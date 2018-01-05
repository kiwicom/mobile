// @flow

import * as React from 'react';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import {
  SingleHotel,
  GalleryGrid,
  Payment,
} from '@kiwicom/react-native-app-hotels';

import Config from '../../config/application';
import AllHotelsNavigationScreen from '../screens/hotels/AllHotelsNavigationScreen';
import AllHotelsMapNavigationScreen from '../screens/hotels/AllHotelsMapNavigationScreen';
import type { Navigation } from '../types/Navigation';

type Props = {|
  navigation: Navigation,
|};

type InjectorProps = {|
  navigation: Navigation,
  WrappedComponent: React.ElementType,
|};

type AvailableHotelSearchInput = {|
  hotelId: string,
  checkin: Date,
  checkout: Date,
  roomsConfiguration: Array<{|
    adultsCount: number,
    children: Array<{|
      age: number,
    |}>,
  |}>,
|};

type SingleHotelProps = Props & AvailableHotelSearchInput;

export default {
  AllHotels: {
    screen: AllHotelsNavigationScreen,
  },
  AllHotelsMap: {
    screen: AllHotelsMapNavigationScreen,
    navigationOptions: {
      headerTitle: 'Map',
    },
  },
  SingleHotel: {
    screen: withMappedProps(function SingleHotelNavigationScreen(
      props: SingleHotelProps,
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
          checkin: new Date(props.checkin),
          checkout: new Date(props.checkout),
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
            hotelId: props.hotelId,
            checkin: new Date(props.checkin),
            checkout: new Date(props.checkout),
            roomsConfiguration: props.roomsConfiguration,
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
