// @flow

import * as React from 'react';
import { Platform, StatusBar } from 'react-native';
import ReactNavigation from 'react-navigation';
import {
  Device,
  StyleSheet,
  Dimensions,
  type StylePropType,
  type DimensionType,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import HeaderTitle from './src/HeaderTitle';

export { default as MenuGroup } from './src/MenuGroup';
export { default as MenuGroupTitle } from './src/MenuGroupTitle';
export { default as MenuItem } from './src/MenuItem';
export { default as TodoMenuItem } from './src/TodoMenuItem';
export { SeparatorTrimmed, SeparatorFullWidth } from './src/Separators';
export { default as TitledMenuGroup } from './src/TitledMenuGroup';
export { default as HeaderTitle } from './src/HeaderTitle';
export { default as HeaderButton } from './src/HeaderButton';
export { withNavigation } from 'react-navigation';

const createNavigationOptions = () => {
  const navigationOptions: Object = {
    headerStyle: {
      backgroundColor: defaultTokens.paletteWhite,
      ...Platform.select({
        android: {
          borderBottomWidth: 0,
          elevation: 2,
        },
        ios: {
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: defaultTokens.borderColorCard,
        },
      }),
    },
    headerTintColor: defaultTokens.paletteProductNormal, // back arrow
    headerBackTitle: null,
  };

  if (Platform.OS === 'android') {
    navigationOptions.headerStyle.paddingTop = StatusBar.currentHeight;
    navigationOptions.headerStyle.height =
      StatusBar.currentHeight + Device.TOOLBAR_HEIGHT;
  }
  return navigationOptions;
};

export const StackNavigator = (
  RouteConfigs: {
    [string]: {|
      +screen: mixed,
      +navigationOptions?: {|
        +headerTitle?:
          | React.Element<typeof HeaderTitle>
          | null
          | React.Element<typeof Dimensions.Consumer>,
        +headerStyle?: StylePropType,
        +mode?: 'modal',
        +headerTransparent?: boolean,
        +headerLeft?: Object | null,
      |},
    |},
  },
  StackNavigatorConfig: {|
    +initialRouteName: string,
    +navigationOptions: {|
      +header: null,
    |},
    +cardStyle?: StylePropType,
    +mode?: 'modal',
    +headerMode?: 'none',
  |},
) => {
  return ReactNavigation.createStackNavigator(
    RouteConfigs,
    StackNavigatorConfig,
  );
};

export const StackNavigatorOptions = {
  initialRouteName: 'Home',
  navigationOptions: createNavigationOptions(),
  cardStyle: {
    backgroundColor: defaultTokens.paletteCloudLight,
  },
};

export const createTransparentHeaderStyle = (dim: DimensionType) => {
  if (Platform.OS === 'ios' || Device.isWideLayout(dim)) {
    // normal header on iOS and wide Android
    return {
      headerStyle: {
        backgroundColor: 'transparent',
        marginTop: 20,
      },
      headerTransparent: true,
    };
  }

  return {
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: 'transparent',
      elevation: 0,
      marginTop: StatusBar.currentHeight,
    },
    headerTransparent: true,
  };
};

// Flow types:

export type { RouteNames as RouteNamesType } from './types/Navigation';
export type { Navigation as NavigationType } from './types/Navigation';
