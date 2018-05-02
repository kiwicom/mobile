// @flow

import {
  StackNavigator,
  StackNavigatorOptions,
} from '@kiwicom/mobile-navigation';

import MMBScreen from './MMBScreen';

export default StackNavigator(
  {
    MMB: {
      screen: MMBScreen,
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'MMB',
  },
);
