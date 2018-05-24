// @flow

import * as React from 'react';
import {
  StackNavigator,
  StackNavigatorOptions,
} from '@kiwicom/mobile-navigation';
import { Color } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { TabNavigator } from 'react-navigation';

import HotelsStack from './HotelsStack';
import MMBPackage from '../screens/MMBPackageWrapper';

const VoidStack = StackNavigator(
  {
    Void: {
      screen: function VoidScreen() {
        return (
          <Translation passThrough="This scene is prepared for the future. Please check navigation in the core package." />
        );
      },
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'Void',
  },
);

export default TabNavigator(
  {
    Search: { screen: HotelsStack },
    Bookings: { screen: MMBPackage },
    Message: { screen: VoidStack },
    Profile: { screen: VoidStack },
  },
  {
    tabBarOptions: {
      activeTintColor: Color.brand,
      inactiveTintColor: 'gray',
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
