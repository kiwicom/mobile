// @flow

import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import {
  AllHotels,
  AllHotelsMap,
  SingleHotel,
  Gallery,
} from '@kiwicom/native-hotels';

/**
 * This isn't actually true stack navigator. It's used inside of explore
 * stack navigator on the homepage.
 */
export default {
  AllHotels: {
    screen: withMappedProps(AllHotels),
    navigationOptions: {
      headerTitle: 'Hotels',
    },
  },
  AllHotelsMap: {
    screen: withMappedProps(AllHotelsMap),
    navigationOptions: {
      headerTitle: 'Map',
    },
  },
  SingleHotel: {
    screen: withMappedProps(SingleHotel),
    navigationOptions: {
      headerTitle: 'Detail',
    },
  },
  Gallery: {
    screen: withMappedProps(Gallery),
    navigationOptions: {
      headerTitle: 'Photos',
    },
  },
};
