// @flow strict

import {
  StackNavigator,
  StackNavigatorOptions,
  type NavigationType,
  createTransparentHeaderStyle,
} from '@kiwicom/mobile-navigation';
import { Dimensions as RNDimensions } from 'react-native';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';

import SingleHotel from './singleHotel/SingleHotelNavigationScreen';
import SearchResults from './allHotels/SearchResultsScreen';
import AdditionalPropsInjector from './singleHotel/AdditionalPropsInjector';
import SingleHotelMapNavigationScreen from './singleHotel/SingleHotelMapNavigationScreen';
import Payment from '../singleHotel/paymentScreen/PaymentScreen';
import GalleryGrid from '../gallery/GalleryGrid';

export type NavigationProps = {|
  navigation: NavigationType,
  language: string,
  currency: string,
|};

const DetailStack = StackNavigator(
  {
    SingleHotel: {
      screen: withMappedProps(SingleHotel),
      navigationOptions: {
        headerLeft: null,
        ...createTransparentHeaderStyle(RNDimensions.get('screen')),
      },
    },
    GalleryGrid: {
      screen: withMappedProps(GalleryGrid, AdditionalPropsInjector),
    },
    Payment: {
      screen: withMappedProps(Payment),
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'SingleHotel',
  },
);

export default StackNavigator(
  {
    SearchResults: {
      screen: withMappedProps(SearchResults),
    },
    DetailStack: {
      screen: DetailStack,
      navigationOptions: {
        header: null,
      },
    },
    SingleHotelMap: {
      screen: SingleHotelMapNavigationScreen,
      navigationOptions: {
        headerLeft: null,
        ...createTransparentHeaderStyle(RNDimensions.get('screen')),
      },
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'SearchResults',
    mode: 'modal',
  },
);
