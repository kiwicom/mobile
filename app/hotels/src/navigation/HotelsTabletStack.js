// @flow strict

import {
  StackNavigator,
  StackNavigatorOptions,
  type NavigationType,
  createTransparentHeaderStyle,
} from '@kiwicom/mobile-navigation';
import { Dimensions as RNDimensions } from 'react-native';
import { withMappedNavigationParams as withMappedProps } from 'react-navigation-props-mapper';

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

const TabletStack = StackNavigator(
  {
    SearchResults: {
      screen: withMappedProps()(SearchResults),
    },
    GalleryGrid: {
      screen: withMappedProps(AdditionalPropsInjector)(GalleryGrid),
    },
    Payment: {
      screen: withMappedProps()(Payment),
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'SearchResults',
  },
);

export default StackNavigator(
  {
    TabletStack: {
      screen: TabletStack,
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
    initialRouteName: 'TabletStack',
    mode: 'modal',
  },
);
