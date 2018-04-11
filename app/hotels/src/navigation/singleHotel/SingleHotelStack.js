// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import {
  HeaderTitle,
  StackNavigator,
  StackNavigatorOptions,
  createTransparentHeaderStyle,
} from '@kiwicom/react-native-app-navigation';
import Translation from '@kiwicom/react-native-app-translations';
import { Device } from '@kiwicom/react-native-app-shared';

import SingleHotelNavigationScreen from './SingleHotelNavigationScreen';
import SingleHotelMapNavigationScreen from './SingleHotelMapNavigationScreen';
import GalleryGrid from '../../gallery/GalleryGrid';
import Payment from '../../singleHotel/PaymentScreen';
import AdditionalPropsInjecter from './AdditionalPropsInjector';

export default StackNavigator(
  {
    SingleHotel: {
      screen: SingleHotelNavigationScreen,
      navigationOptions: {
        headerTitle:
          Device.isNarrowLayout() && Platform.OS === 'android' ? null : (
            <HeaderTitle>
              <Translation id="hotels.navigation.title.single_hotel" />
            </HeaderTitle>
          ),
        ...createTransparentHeaderStyle(),
      },
    },
    SingleHotelMap: {
      screen: SingleHotelMapNavigationScreen,
      navigationOptions: {
        headerTitle: (
          <HeaderTitle>
            <Translation id="hotels.navigation.title.single_hotel_map" />
          </HeaderTitle>
        ),
      },
    },
    GalleryGrid: {
      screen: withMappedProps(GalleryGrid, AdditionalPropsInjecter),
      navigationOptions: {
        headerTitle: (
          <HeaderTitle>
            <Translation id="hotels.navigation.title.gallery_grid" />
          </HeaderTitle>
        ),
      },
    },
    Payment: {
      screen: withMappedProps(Payment),
      navigationOptions: {
        mode: 'modal',
        headerTitle: (
          <HeaderTitle>
            <Translation id="hotels.navigation.title.payment" />
          </HeaderTitle>
        ),
      },
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'SingleHotel',
  },
);
