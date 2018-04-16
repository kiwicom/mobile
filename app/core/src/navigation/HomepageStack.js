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

export default StackNavigator(
  {
    Home: {
      screen: withMappedProps(Homepage),
      navigationOptions: {
        headerTitle: (
          <HeaderTitle>
            <Translation passThrough="Welcome" />
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
