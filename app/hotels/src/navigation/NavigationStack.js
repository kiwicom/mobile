// @flow

import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import { Color } from '@kiwicom/react-native-app-common';

import SingleHotel from '../singleHotel';
import GalleryGrid from '../gallery/GalleryGrid';
import Payment from '../singleHotel/PaymentScreen';
import AllHotelsNavigationScreen from './AllHotelsNavigationScreen';
import AllHotelsMapNavigationScreen from './AllHotelsMapNavigationScreen';

type Props = {|
  navigation: Object, // FIXME: navigation type is still part of the core package
  bookingComAffiliate: string,
  language: string,
  currency: string,
|};

type InjectorProps = {|
  navigation: Object, // FIXME: navigation type is still part of the core package
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

export default StackNavigator(
  {
    AllHotels: {
      screen: withMappedProps(AllHotelsNavigationScreen),
    },
    AllHotelsMap: {
      screen: withMappedProps(AllHotelsMapNavigationScreen),
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
            affiliateId: props.bookingComAffiliate,
            language: props.language,
            currency: props.currency,
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
  },
  {
    initialRouteName: 'AllHotels',
    navigationOptions: {
      headerStyle: {
        backgroundColor: Color.brand,
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        color: '#fff',
      },
      headerTintColor: '#fff', // back arrow
    },
    cardStyle: {
      backgroundColor: '#eee',
    },
  },
);
