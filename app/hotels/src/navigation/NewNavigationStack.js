// @flow strict

import * as React from 'react';
import {
  StackNavigator,
  StackNavigatorOptions,
  type NavigationType,
  HeaderTitle,
} from '@kiwicom/mobile-navigation';
import { Platform } from 'react-native';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import { Translation } from '@kiwicom/mobile-localization';
import { Dimensions, Device } from '@kiwicom/mobile-shared';

import SingleHotel from './singleHotel/SingleHotelNavigationScreen';
import SearchResults from './allHotels/SearchResultsScreen';
import AllHotelsMap from './allHotelsMap/AllHotelsMapNavigationScreen';
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
      },
    },
    AllHotelsMap: {
      screen: withMappedProps(AllHotelsMap),
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
        headerTitle: (
          <HeaderTitle>
            <Translation id="hotels.navigation.title.single_hotel_map" />
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
    initialRouteName: 'SearchResults',
  },
);
