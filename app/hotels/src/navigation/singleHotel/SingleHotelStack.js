// @flow

import * as React from 'react';
import { Dimensions as RNDimensions } from 'react-native';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import {
  HeaderTitle,
  StackNavigator,
  StackNavigatorOptions,
  createTransparentHeaderStyle,
} from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';

import SingleHotelNavigationScreen from './SingleHotelNavigationScreen';
import SingleHotelMapNavigationScreen from './SingleHotelMapNavigationScreen';
import GalleryGrid from '../../gallery/GalleryGrid';
import { PaymentScreen } from '../../singleHotel/PaymentScreen';
import AdditionalPropsInjector from './AdditionalPropsInjector';

export default StackNavigator(
  {
    SingleHotel: {
      screen: SingleHotelNavigationScreen,
      navigationOptions: {
        headerLeft: null,
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
        headerLeft: null,
        ...createTransparentHeaderStyle(RNDimensions.get('screen')),
      },
    },
    GalleryGrid: {
      screen: withMappedProps(GalleryGrid, AdditionalPropsInjector),
    },
    Payment: {
      screen: withMappedProps(PaymentScreen),
      navigationOptions: {
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
    mode: 'modal',
  },
);
