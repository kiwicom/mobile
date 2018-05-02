// @flow

import * as React from 'react';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import {
  HeaderTitle,
  StackNavigator,
  StackNavigatorOptions,
} from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';

import Homepage from '../screens/homepage/Homepage';
import HotelsPackageWrapper from '../screens/HotelsPackageWrapper';
import SingleHotelsPackageWrapper from '../screens/SingleHotelPackageWrapper';

const HotelsStack = StackNavigator(
  {
    Home: {
      screen: withMappedProps(Homepage),
      navigationOptions: {
        headerTitle: (
          <HeaderTitle>
            <Translation passThrough="Welcome to rn-hotels" />
          </HeaderTitle>
        ),
      },
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'Home',
  },
);

export default StackNavigator(
  {
    Homepage: {
      screen: HotelsStack,
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
