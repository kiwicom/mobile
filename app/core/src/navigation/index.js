// @flow

import * as React from 'react';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import { StackNavigator } from '@kiwicom/mobile-navigation';

import HomepageStack from './HomepageStack';
import HotelsPackageWrapper from '../screens/HotelsPackageWrapper';
import SingleHotelsPackageWrapper from '../screens/SingleHotelPackageWrapper';

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

export default function Application() {
  return <Navigation />;
}
