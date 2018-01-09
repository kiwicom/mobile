// @flow

import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';

import AllBookings from '../screens/allBookings/AllBookings';
import SingleBooking from '../screens/singleBooking/SingleBookingRenderer';

export default {
  AllBookings: { screen: withMappedProps(AllBookings) },
  SingleBooking: { screen: withMappedProps(SingleBooking) },
};
