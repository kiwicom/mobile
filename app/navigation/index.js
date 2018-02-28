// @flow

import { Platform, StatusBar } from 'react-native';
import { Color, Device } from '@kiwicom/react-native-app-shared';

const createNavigationOptions = () => {
  const navigationOptions: Object = {
    headerStyle: {
      backgroundColor: Color.brand,
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      color: '#fff',
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

export const StackNavigatorOptions = {
  initialRouteName: 'Home',
  navigationOptions: createNavigationOptions(),
  cardStyle: {
    backgroundColor: '#eee',
  },
};

// Flow types:

export type { Navigation as NavigationType } from './types/Navigation';
