// @flow

import * as React from 'react';
import { StackNavigator } from 'react-navigation';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import {
  StackNavigatorOptions,
  type NavigationType,
} from '@kiwicom/react-native-app-navigation';

import GalleryGrid from '../gallery/GalleryGrid';
import Payment from '../singleHotel/PaymentScreen';
import AllHotelsNavigationScreen from './AllHotelsNavigationScreen';
import AllHotelsMapNavigationScreen from './AllHotelsMapNavigationScreen';
import SingleHotelNavigationScreen from './SingleHotelNavigationScreen';
import SingleHotelMapNavigationScreen from './SingleHotelMapNavigationScreen';

export type NavigationProps = {|
  navigation: NavigationType,
  bookingComAffiliate: string,
  language: string,
  currency: string,
|};

type InjectorProps = {|
  navigation: NavigationType,
  WrappedComponent: React.ElementType,
|};

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
      screen: SingleHotelNavigationScreen,
      navigationOptions: {
        headerTitle: 'Detail',
      },
    },
    SingleHotelMap: {
      screen: SingleHotelMapNavigationScreen,
      navigationOptions: {
        headerTitle: 'Map',
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
    ...StackNavigatorOptions,
    initialRouteName: 'AllHotels',
  },
);
