// @flow

import * as React from 'react';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import {
  AllHotels,
  AllHotelsMap,
  SingleHotel,
  GalleryGrid,
  GalleryStripe,
} from '@kiwicom/native-hotels';

import type { Navigation } from '../types/Navigation';

type Props = {
  navigation: Navigation,
};

type InjectorProps = {
  navigation: Navigation,
  WrappedComponent: React.ElementType,
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
      function goToGalleryGrid(hotelName, images) {
        props.navigation.navigate('GalleryGrid', {
          hotelName,
          images,
        });
      }
      return <SingleHotel onGoToHotelGallery={goToGalleryGrid} />;
    },
    navigationOptions: {
      headerTitle: 'Detail',
    },
  },
  GalleryGrid: {
    screen: withMappedProps(
      GalleryGrid,
      class AdditionalPropsInjecter extends React.Component<InjectorProps> {
        goToGalleryStripe = (hotelName, highResImages, imageIndex) => {
          this.props.navigation.navigate('GalleryStripe', {
            hotelName,
            imageUrls: highResImages,
            index: imageIndex,
          });
        };

        render = () => {
          const { WrappedComponent } = this.props;
          return (
            <WrappedComponent
              {...this.props}
              onGoToGalleryStripe={this.goToGalleryStripe}
            />
          );
        };
      },
    ),
    navigationOptions: {
      headerTitle: 'Photos',
    },
  },
  GalleryStripe: {
    screen: withMappedProps(
      GalleryStripe,
      class AdditionalPropsInjecter extends React.Component<InjectorProps> {
        goBack = () => {
          this.props.navigation.goBack();
        };

        render = () => {
          const { WrappedComponent } = this.props;
          return <WrappedComponent {...this.props} goBack={this.goBack} />;
        };
      },
    ),
    navigationOptions: {
      header: null,
      tabBarVisible: false,
      gesturesEnabled: false,
    },
  },
};
