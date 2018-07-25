// @flow

import * as React from 'react';
import { Platform, StatusBar } from 'react-native';
import ReactNavigation from 'react-navigation';
import {
  Color,
  Device,
  Text,
  StyleSheet,
  Touchable,
  Dimensions,
  type StylePropType,
  type DimensionType,
} from '@kiwicom/mobile-shared';
import type { TranslationType } from '@kiwicom/mobile-localization';

export { default as MenuGroup } from './src/MenuGroup';
export { default as MenuGroupTitle } from './src/MenuGroupTitle';
export { default as MenuItem } from './src/MenuItem';
export { default as TodoMenuItem } from './src/TodoMenuItem';
export { SeparatorTrimmed, SeparatorFullWidth } from './src/Separators';
export { default as TitledMenuGroup } from './src/TitledMenuGroup';
export { withNavigation } from 'react-navigation';

const createNavigationOptions = () => {
  const navigationOptions: Object = {
    headerStyle: {
      backgroundColor: Color.white,
      ...Platform.select({
        android: {
          borderBottomWidth: 0,
          elevation: 2,
        },
        ios: {
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: Color.border,
        },
      }),
    },
    headerTintColor: Color.brand, // back arrow
    headerBackTitle: null,
  };

  if (Platform.OS === 'android') {
    navigationOptions.headerStyle.paddingTop = StatusBar.currentHeight;
    navigationOptions.headerStyle.height =
      StatusBar.currentHeight + Device.TOOLBAR_HEIGHT;
  }
  return navigationOptions;
};

export const HeaderTitle = ({ children }: {| children: TranslationType |}) => {
  return <Text style={styleSheet.title}>{children}</Text>;
};

export const HeaderButton = ({
  children,
  onPress,
  disabled,
}: {|
  +children: React.Element<any>,
  +onPress: () => void,
  +disabled: boolean,
|}) => {
  return (
    <Touchable
      borderlessRipple={true}
      onPress={onPress}
      style={styleSheet.headerButton}
      disabled={disabled}
    >
      <Text
        style={[
          styleSheet.headerButtonText,
          disabled ? styleSheet.disabledButton : null,
        ]}
      >
        {children}
      </Text>
    </Touchable>
  );
};

HeaderButton.defaultProps = {
  disabled: false,
};

const styleSheet = StyleSheet.create({
  title: {
    color: Color.textDark,
    fontWeight: '600',
    android: {
      fontSize: 18,
    },
    ios: {
      fontSize: 17,
    },
  },
  headerButton: {
    padding: 8,
  },
  headerButtonText: {
    color: Color.brand,
    fontSize: 17,
  },
  disabledButton: {
    color: Color.inputBackground,
  },
});

export const StackNavigator = (
  RouteConfigs: {
    [string]: {|
      +screen: mixed,
      +navigationOptions?: {|
        +headerTitle:
          | React.Element<typeof HeaderTitle>
          | null
          | React.Element<typeof Dimensions.Consumer>,
        +headerStyle?: StylePropType,
        +mode?: 'modal',
        +headerTransparent?: boolean,
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
  return ReactNavigation.StackNavigator(RouteConfigs, StackNavigatorConfig);
};

export const StackNavigatorOptions = {
  initialRouteName: 'Home',
  navigationOptions: createNavigationOptions(),
  cardStyle: {
    backgroundColor: Color.backgroundGray,
  },
};

export const createTransparentHeaderStyle = (dim: DimensionType) => {
  if (Platform.OS === 'ios' || Device.isWideLayout(dim)) {
    // normal header on iOS and wide Android
    return {};
  }

  return {
    headerStyle: {
      borderBottomWidth: 0,
      backgroundColor: 'rgba(0,0,0,0)',
      elevation: 0,
      marginTop: StatusBar.currentHeight,
    },
    headerTransparent: true,
  };
};

// Flow types:

export type { RouteNames as RouteNamesType } from './types/Navigation';
export type { Navigation as NavigationType } from './types/Navigation';
