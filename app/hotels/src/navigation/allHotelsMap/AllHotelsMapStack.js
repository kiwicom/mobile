// @flow

import * as React from 'react';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import {
  HeaderTitle,
  StackNavigator,
  StackNavigatorOptions,
} from '@kiwicom/react-native-app-navigation';
import { Translation } from '@kiwicom/react-native-app-localization';

import AllHotelsMapNavigationScreen from './AllHotelsMapNavigationScreen';

export default StackNavigator(
  {
    AllHotelsMap: {
      screen: withMappedProps(AllHotelsMapNavigationScreen),
      navigationOptions: {
        headerTitle: (
          <HeaderTitle>
            <Translation id="hotels.navigation.title.all_hotels_map" />
          </HeaderTitle>
        ),
      },
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'AllHotelsMap',
  },
);
