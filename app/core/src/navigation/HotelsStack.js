// @flow

import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import {
  AllHotels,
  AllHotelsMap,
  SingleHotel,
  GalleryGrid,
  Payment,
} from '@kiwicom/react-native-app-hotels';
import { Ionicons } from '@expo/vector-icons';

import Config from '../../config/application';
import type { Navigation } from '../types/Navigation';

type Props = {|
  navigation: Navigation,
|};

type InjectorProps = {|
  navigation: Navigation,
  WrappedComponent: React.ElementType,
|};

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
      function goToPayment(parameters) {
        props.navigation.navigate('Payment', {
          ...parameters,
          // FIXME: we need to solve how to pass these data from search or map
          checkin: new Date('2018-03-01'),
          checkout: new Date('2018-03-08'),
          affiliateId: Config.affiliate.bookingCom,
          language: 'en', // TODO: we do not have language yet
          currency: 'EUR', // TODO: we do not have currency yet
        });
      }
      return (
        <SingleHotel
          onGoToHotelGallery={goToGalleryGrid}
          onGoToPayment={goToPayment}
          search={{
            // FIXME: we need to solve how to pass these data from search or map
            hotelId: 'aG90ZWw6NzcwOTQ=',
            checkin: new Date('2018-03-01'),
            checkout: new Date('2018-03-08'),
            roomsConfiguration: [
              {
                adultsCount: 1,
                children: [],
              },
            ],
          }}
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
  Payment: {
    screen: withMappedProps(Payment),
    navigationOptions: {
      mode: 'modal',
    },
  },
};
