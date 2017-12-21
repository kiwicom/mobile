// @flow

import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import {
  AllHotels,
  AllHotelsMap,
  SingleHotel,
  GalleryGrid,
  GalleryStripe,
} from '@kiwicom/react-native-app-hotels';
import { Ionicons } from '@expo/vector-icons';

import type { Navigation } from '../types/Navigation';

type Props = {|
  navigation: Navigation,
|};

type InjectorProps = {|
  navigation: Navigation,
  WrappedComponent: React.ElementType,
|};

/**
 * This isn't actually true stack navigator. It's used inside of explore
 * stack navigator on the homepage.
 */
export default {
  AllHotels: {
    screen: class AllHotelsNavigationScreen extends React.Component<Props> {
      static navigationOptions = (props: Props) => {
        function goToAllHotelsMap() {
          props.navigation.navigate('AllHotelsMap');
        }

        return {
          headerTitle: 'Hotels',
          headerRight: (
            <TouchableOpacity
              style={{ marginHorizontal: 10 }}
              onPress={goToAllHotelsMap}
            >
              <Ionicons name="md-map" size={30} color="#fff" />
            </TouchableOpacity>
          ),
        };
      };

      openSingleHotel = (id: string) =>
        this.props.navigation.navigate('SingleHotel', { hotelId: id });

      render = () => <AllHotels openSingleHotel={this.openSingleHotel} />;
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
    screen: withMappedProps(function SingleHotelNavigationScreen(
      props: Props & {| hotelId: string |},
    ) {
      function goToGalleryGrid(hotelName, images) {
        props.navigation.navigate('GalleryGrid', {
          hotelName,
          images,
        });
      }
      return (
        <SingleHotel
          onGoToHotelGallery={goToGalleryGrid}
          // hotelId={props.hotelId}
          hotelId="aG90ZWw6MjUyMTU=" // FIXME: we need to refactor this - it's not possible to fetch hotel just by simple ID here
        />
      );
    }),
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
