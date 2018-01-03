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
