// @flow

import {
  StackNavigator,
  StackNavigatorOptions,
  type NavigationType,
} from '@kiwicom/mobile-navigation';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';

import SingleHotel from './singleHotel/SingleHotelNavigationScreen';
import SearchResults from './allHotels/SearchResultsScreen';
import AllHotelsMap from './allHotelsMap/AllHotelsMapNavigationScreen';

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
    },
    AllHotelsMap: {
      screen: withMappedProps(AllHotelsMap),
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'SearchResults',
  },
);
