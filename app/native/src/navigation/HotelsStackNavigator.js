// @flow

import * as React from 'react';
import {
  AllHotels,
  AllHotelsMap,
  SingleHotel,
  Gallery,
} from '@kiwicom/native-hotels';

import type { Navigation } from '../types/Navigation';

type Props = {
  navigation: Navigation,
};

/**
 * This isn't actually true stack navigator. It's used inside of explore
 * stack navigator on the homepage.
 */
export default {
  AllHotels: {
    screen: function AllHotelsNavigationScreen(props: Props) {
      return (
        <AllHotels
          onGoToHotelsMap={() => props.navigation.navigate('AllHotelsMap')}
          onGoToSingleHotel={() => props.navigation.navigate('SingleHotel')}
        />
      );
    },
    navigationOptions: {
      headerTitle: 'Hotels',
    },
  },
  AllHotelsMap: {
    screen: function AllHotelsMapNavigationScreen(props: Props) {
      return (
        <AllHotelsMap
          onGoToSingleHotel={() => props.navigation.navigate('SingleHotel')}
        />
      );
    },
    navigationOptions: {
      headerTitle: 'Map',
    },
  },
  SingleHotel: {
    screen: function SingleHotelNavigationScreen(props: Props) {
      return (
        <SingleHotel
          onGoToHotelGallery={() => props.navigation.navigate('Gallery')}
        />
      );
    },
    navigationOptions: {
      headerTitle: 'Detail',
    },
  },
  Gallery: {
    screen: Gallery,
    navigationOptions: {
      headerTitle: 'Photos',
    },
  },
};
