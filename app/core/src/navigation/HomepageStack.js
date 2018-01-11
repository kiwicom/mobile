// @flow

import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import { StackNavigator } from 'react-navigation';
import { Color } from '@kiwicom/react-native-app-common';

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
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: Color.brand,
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        color: '#fff',
      },
      headerTintColor: '#fff', // back arrow
    },
    cardStyle: {
      backgroundColor: '#eee',
    },
  },
);
