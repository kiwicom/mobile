// @flow

import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import { StackNavigator } from 'react-navigation';

import AllBookings from '../screens/allBookings/AllBookings';
import SingleBooking from '../screens/singleBooking/SingleBooking';
import NavigatorOptions from './NavigatorOptions';

export default StackNavigator(
  {
    AllBookings: {
      screen: withMappedProps(AllBookings),
      navigationOptions: {
        header: null,
      },
    },
    SingleBooking: { screen: withMappedProps(SingleBooking) },
  },
  {
    ...NavigatorOptions,
    initialRouteName: 'AllBookings',
  },
);
