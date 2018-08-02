// @flow

import {
  StackNavigator,
  StackNavigatorOptions,
} from '@kiwicom/mobile-navigation';

import MMBPackage from '../../screens/bookingsStack/MMBPackageWrapper';

export default StackNavigator(
  {
    Bookings: {
      screen: MMBPackage,
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'Bookings',
  },
);
