// @flow strict

import * as React from 'react';
import {
  StackNavigator,
  StackNavigatorOptions,
  type NavigationType,
  HeaderTitle,
  createTransparentHeaderStyle,
} from '@kiwicom/mobile-navigation';
import { Dimensions as RNDimensions } from 'react-native';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import { Translation } from '@kiwicom/mobile-localization';

import SingleHotel from './singleHotel/SingleHotelNavigationScreen';
import SearchResults from './allHotels/SearchResultsScreen';
import NewAllHotelsMap from './allHotelsMap/NewAllHotelsMapNavigationScreen';
import AdditionalPropsInjector from './singleHotel/AdditionalPropsInjector';
import SingleHotelMapNavigationScreen from './singleHotel/SingleHotelMapNavigationScreen';
import Payment from '../singleHotel/PaymentScreen';
import GalleryGrid from '../gallery/GalleryGrid';

export type NavigationProps = {|
  navigation: NavigationType,
  bookingComAffiliate: string,
  language: string,
  currency: string,
|};

export default StackNavigator(
  {
    SearchResults: {
      screen: withMappedProps(SearchResults),
    },
    SingleHotel: {
      screen: withMappedProps(SingleHotel),
      navigationOptions: {
        headerLeft: null,
        ...createTransparentHeaderStyle(RNDimensions.get('screen')),
      },
    },
    AllHotelsMap: {
      screen: withMappedProps(NewAllHotelsMap),
      navigationOptions: {
        headerTitle: (
          <HeaderTitle>
            <Translation id="hotels.navigation.title.all_hotels_map" />
          </HeaderTitle>
        ),
      },
    },
    GalleryGrid: {
      screen: withMappedProps(GalleryGrid, AdditionalPropsInjector),
    },
    SingleHotelMap: {
      screen: SingleHotelMapNavigationScreen,
      navigationOptions: {
        headerLeft: null,
        ...createTransparentHeaderStyle(RNDimensions.get('screen')),
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
    initialRouteName: 'SearchResults',
    mode: 'modal',
  },
);
