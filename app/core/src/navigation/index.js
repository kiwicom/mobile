// @flow strict

import { defaultTokens } from '@kiwicom/mobile-orbit';
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
      activeTintColor: defaultTokens.paletteProductNormal,
      inactiveTintColor: defaultTokens.paletteInkLight,
      style: {
        backgroundColor: defaultTokens.paletteWhite, // makes Android tab bar white instead of standard blue
      },
      indicatorStyle: {
        backgroundColor: defaultTokens.paletteProductNormal,
      },
    },
    initialRouteName: 'Bookings',
    tabBarPosition: 'bottom',
  },
);
