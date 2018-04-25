// @flow

import * as React from 'react';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import {
  StackNavigator,
  StackNavigatorOptions,
} from '@kiwicom/mobile-navigation';
import { Color } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { TabNavigator } from 'react-navigation';

import HomepageStack from './HomepageStack';
import HotelsPackageWrapper from '../screens/HotelsPackageWrapper';
import SingleHotelsPackageWrapper from '../screens/SingleHotelPackageWrapper';

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

const Navigation = StackNavigator(
  {
    Homepage: {
      screen: HomepageStack,
    },
    HotelsPackage: {
      screen: withMappedProps(HotelsPackageWrapper),
    },
    SingleHotelPackage: {
      screen: withMappedProps(SingleHotelsPackageWrapper),
    },
  },
  {
    initialRouteName: 'Homepage',
    navigationOptions: {
      header: null,
    },
  },
);

export default TabNavigator(
  {
    Search: { screen: Navigation },
    Bookings: { screen: VoidStack },
    Message: { screen: VoidStack },
    Profile: { screen: VoidStack },
  },
  {
    tabBarOptions: {
      activeTintColor: Color.brand,
      inactiveTintColor: 'gray',
    },
  },
);
