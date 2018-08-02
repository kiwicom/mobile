// @flow

import {
  StackNavigator,
  StackNavigatorOptions,
} from '@kiwicom/mobile-navigation';
import ProfileScreen from '@kiwicom/mobile-profile';

export default StackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'Profile',
  },
);
