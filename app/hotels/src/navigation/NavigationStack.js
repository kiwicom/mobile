// @flow

import {
  StackNavigator,
  StackNavigatorOptions,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import AllHotelsMapStack from './allHotelsMap/AllHotelsMapStack';
import AllHotelsStack from './allHotels/AllHotelsStack';
import SingleHotelStack from './singleHotel/SingleHotelStack';

export type NavigationProps = {|
  navigation: NavigationType,
  bookingComAffiliate: string,
  language: string,
  currency: string,
|};

export default StackNavigator(
  {
    AllHotels: {
      screen: AllHotelsStack,
    },
    AllHotelsMap: {
      screen: AllHotelsMapStack,
    },
    SingleHotel: {
      screen: SingleHotelStack,
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'AllHotels',
    headerMode: 'none',
  },
);
