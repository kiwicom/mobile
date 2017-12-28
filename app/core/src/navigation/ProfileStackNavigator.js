// @flow

import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import { StackNavigator } from 'react-navigation';

import Profile from '../screens/profile/Profile';
import NavigatorOptions from './NavigatorOptions';

export default StackNavigator(
  {
    Profile: {
      screen: withMappedProps(Profile),
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    ...NavigatorOptions,
    initialRouteName: 'Profile',
  },
);
