// @flow

import { Color } from '@kiwicom/mobile-shared';
import { createBottomTabNavigator } from 'react-navigation';

import HotelsStack from './stacks/HotelsStack';
import VoidStack from './stacks/VoidStack';
import ProfileStack from './stacks/ProfileStack';
import BookingsStack from './stacks/BookingsStack';

export default createBottomTabNavigator(
  {
    Search: { screen: HotelsStack },
    Bookings: { screen: BookingsStack },
    Message: { screen: VoidStack },
    Profile: { screen: ProfileStack },
  },
  {
    tabBarOptions: {
      activeTintColor: Color.brand,
      inactiveTintColor: Color.grey.$600,
      style: {
        backgroundColor: Color.white, // makes Android tab bar white instead of standard blue
      },
      indicatorStyle: {
        backgroundColor: Color.brand,
      },
    },
    initialRouteName: 'Bookings',
    tabBarPosition: 'bottom',
  },
);
