// @flow

import { StackNavigator, StackNavigatorOptions } from '@kiwicom/mobile-navigation';
import ProfileScreen from '@kiwicom/mobile-profile';
import { AccountSettings } from '@kiwicom/mobile-account';

const ProfileStack = StackNavigator(
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

export default StackNavigator(
  {
    Profile: {
      screen: ProfileStack,
    },
    AccountSettings: {
      screen: AccountSettings,
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'Profile',
    headerMode: 'none',
  },
);
