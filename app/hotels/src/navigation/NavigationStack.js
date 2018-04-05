// @flow

import * as React from 'react';
import { StatusBar, Platform } from 'react-native';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import {
  HeaderTitle,
  StackNavigator,
  StackNavigatorOptions,
  type NavigationType,
} from '@kiwicom/react-native-app-navigation';
import Translation from '@kiwicom/react-native-app-translations';
import { Device } from '@kiwicom/react-native-app-shared';

import GalleryGrid from '../gallery/GalleryGrid';
import Payment from '../singleHotel/PaymentScreen';
import AllHotelsNavigationScreen from './AllHotelsNavigationScreen';
import AllHotelsMapNavigationScreen from './AllHotelsMapNavigationScreen';
import SingleHotelNavigationScreen from './SingleHotelNavigationScreen';
import SingleHotelMapNavigationScreen from './SingleHotelMapNavigationScreen';
import LocationPicker from './LocationPickerScreen';
import GuestsModalScreen from './GuestsModalScreen';

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

const AllHotelsStack = StackNavigator(
  {
    AllHotelsMain: {
      screen: withMappedProps(AllHotelsNavigationScreen),
    },
    LocationPicker: {
      screen: LocationPicker,
    },
    GuestsModal: {
      screen: GuestsModalScreen,
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'AllHotelsMain',
    mode: 'modal',
  },
);

const createTransparentHeaderStyle = () => {
  if (Platform.OS === 'ios' || Device.isWideLayout()) {
    // normal header on iOS and wide Android
    return {};
  }

  return {
    headerStyle: {
      position: 'absolute',
      backgroundColor: 'transparent',
      top: StatusBar.currentHeight,
      left: 0,
      right: 0,
    },
  };
};

export const SingleHotelStack = StackNavigator(
  {
    SingleHotel: {
      screen: SingleHotelNavigationScreen,
      navigationOptions: {
        headerTitle:
          Device.isNarrowLayout() && Platform.OS === 'android' ? null : (
            <HeaderTitle>
              <Translation id="Hotels.Navigation.Title.SingleHotel" />
            </HeaderTitle>
          ),
        ...createTransparentHeaderStyle(),
      },
    },
    SingleHotelMap: {
      screen: SingleHotelMapNavigationScreen,
      navigationOptions: {
        headerTitle: (
          <HeaderTitle>
            <Translation id="Hotels.Navigation.Title.SingleHotelMap" />
          </HeaderTitle>
        ),
      },
    },
    GalleryGrid: {
      screen: withMappedProps(
        GalleryGrid,
        class AdditionalPropsInjecter extends React.Component<InjectorProps> {
          goToGalleryStripe = (hotelName, highResImages, imageIndex) => {
            this.props.navigation.navigate({
              routeName: 'GalleryStripe',
              key: 'key-GalleryStripe',
              params: {
                hotelName,
                imageUrls: highResImages,
                index: imageIndex,
              },
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
        headerTitle: (
          <HeaderTitle>
            <Translation id="Hotels.Navigation.Title.GalleryGrid" />
          </HeaderTitle>
        ),
      },
    },
    Payment: {
      screen: withMappedProps(Payment),
      navigationOptions: {
        mode: 'modal',
        headerTitle: (
          <HeaderTitle>
            <Translation id="Hotels.Navigation.Title.Payment" />
          </HeaderTitle>
        ),
      },
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'SingleHotel',
  },
);

export default StackNavigator(
  {
    AllHotels: {
      screen: AllHotelsStack,
    },
    AllHotelsMap: {
      screen: withMappedProps(AllHotelsMapNavigationScreen),
      navigationOptions: {
        headerTitle: (
          <HeaderTitle>
            <Translation id="Hotels.Navigation.Title.AllHotelsMap" />
          </HeaderTitle>
        ),
      },
    },
    SingleHotel: {
      screen: SingleHotelStack,
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'AllHotels',
    headerMode: 'none',
  },
);
