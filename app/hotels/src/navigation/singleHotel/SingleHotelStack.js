// @flow

import * as React from 'react';
import { Platform, Dimensions as RNDimensions } from 'react-native';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import {
  HeaderTitle,
  StackNavigator,
  StackNavigatorOptions,
  createTransparentHeaderStyle,
} from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import { Dimensions, Device } from '@kiwicom/mobile-shared';

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
        headerTitle: (
          <Dimensions.Consumer>
            {dimensions => {
              return Device.isNarrowLayout(dimensions) &&
                Platform.OS === 'android' ? null : (
                <HeaderTitle>
                  <Translation id="hotels.navigation.title.single_hotel" />
                </HeaderTitle>
              );
            }}
          </Dimensions.Consumer>
        ),
        /**
         * @todo Due to static nature of React Navigation, this configuration
         * will not update when screen width changes (when used with SplitView)
         * or rotates.
         *
         * This has to be fixed by providing a custom Header component that forks
         * React Navigation one and uses Dimensions.Consumer to re-render itself.
         */
        ...createTransparentHeaderStyle(RNDimensions.get('screen')),
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
