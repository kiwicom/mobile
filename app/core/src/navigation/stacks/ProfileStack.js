// @flow

import { StackNavigator, StackNavigatorOptions } from '@kiwicom/mobile-navigation';
import ProfileScreen from '@kiwicom/mobile-profile';
import { AccountSettings } from '@kiwicom/mobile-account';

export default StackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
    },
    AccountSettings: {
      screen: AccountSettings,
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'Profile',
  },
);
