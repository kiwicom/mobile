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
      function goToMap() {
        props.navigation.navigate('AllHotelsMap');
      }

      function goToHotel() {
        props.navigation.navigate('SingleHotel');
      }

      return (
        <AllHotels onGoToHotelsMap={goToMap} onGoToSingleHotel={goToHotel} />
      );
    },
    navigationOptions: {
      headerTitle: 'Hotels',
    },
  },
  AllHotelsMap: {
    screen: function AllHotelsMapNavigationScreen(props: Props) {
      function goToHotel() {
        props.navigation.navigate('SingleHotel');
      }
      return <AllHotelsMap onGoToSingleHotel={goToHotel} />;
    },
    navigationOptions: {
      headerTitle: 'Map',
    },
  },
  SingleHotel: {
    screen: function SingleHotelNavigationScreen(props: Props) {
      function goToGallery() {
        props.navigation.navigate('Gallery');
      }
      return <SingleHotel onGoToHotelGallery={goToGallery} />;
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
