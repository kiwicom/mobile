// @flow

import * as React from 'react';
import { Platform, StatusBar } from 'react-native';
import ReactNavigation from 'react-navigation';
import {
  Color,
  Device,
  Text,
  StyleSheet,
} from '@kiwicom/react-native-app-shared';
import type { TranslationType } from '@kiwicom/react-native-app-translations';

const createNavigationOptions = () => {
  const navigationOptions: Object = {
    headerStyle: {
      backgroundColor: Color.brand,
      borderBottomWidth: 0,
    },
    headerTintColor: '#fff', // back arrow
    headerBackTitle: null,
  };

  if (Platform.OS === 'android') {
    navigationOptions.headerStyle.paddingTop = StatusBar.currentHeight;
    navigationOptions.headerStyle.height =
      StatusBar.currentHeight + Device.getToolbarHeight();
  }
  return navigationOptions;
};

export const HeaderTitle = ({ children }: {| children: TranslationType |}) => {
  const styleSheet = StyleSheet.create({
    title: {
      color: '#fff',
      android: {
        fontSize: 18,
      },
      ios: {
        fontSize: 17,
      },
    },
  });

  return <Text style={styleSheet.title}>{children}</Text>;
};

export const StackNavigator = (
  RouteConfigs: {
    [string]: {|
      screen: mixed,
      navigationOptions?: {|
        headerTitle: React.Element<typeof HeaderTitle> | null,
        headerStyle?: Object,
        mode?: 'modal',
      |},
    |},
  },
  StackNavigatorConfig: {|
    initialRouteName: string,
    navigationOptions: Object,
    cardStyle?: Object,
    mode?: 'modal',
    headerMode?: 'none',
  |},
) => {
  return ReactNavigation.StackNavigator(RouteConfigs, StackNavigatorConfig);
};

export const StackNavigatorOptions = {
  initialRouteName: 'Home',
  navigationOptions: createNavigationOptions(),
  cardStyle: {
    backgroundColor: '#eee',
  },
};

// Flow types:

export type { Navigation as NavigationType } from './types/Navigation';
