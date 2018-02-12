// @flow

import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import { StackNavigator } from 'react-navigation';
import { StackNavigatorOptions } from '@kiwicom/react-native-app-navigation';

import Homepage from '../screens/homepage/Homepage';

export default StackNavigator(
  {
    Home: {
      screen: withMappedProps(Homepage),
      navigationOptions: {
        title: 'Welcome',
      },
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'Home',
  },
);
