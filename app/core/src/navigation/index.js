// @flow strict

import { defaultTokens } from '@kiwicom/mobile-orbit';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import HotelsStack from './stacks/HotelsStack';
import VoidStack from './stacks/VoidStack';
import ProfileStack from './stacks/ProfileStack';
import BookingStack from './stacks/BookingsStack';

export default createAppContainer(
  createBottomTabNavigator(
    {
      Search: {
        screen: HotelsStack,
        navigationOptions: {
          tabBarTestID: 'hotelsTab',
        },
      },
      Bookings: {
        screen: BookingStack,
      },
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
      initialRouteName: 'Search',
      tabBarPosition: 'bottom',
    },
  ),
);
