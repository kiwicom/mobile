// @flow

import { Dimensions as RNDimensions } from 'react-native';
import { withMappedNavigationParams as withMappedProps } from 'react-navigation-props-mapper';
import {
  StackNavigator,
  StackNavigatorOptions,
  createTransparentHeaderStyle,
} from '@kiwicom/mobile-navigation';

import SingleHotelNavigationScreen from './SingleHotelNavigationScreen';
import SingleHotelMapNavigationScreen from './SingleHotelMapNavigationScreen';
import GalleryGrid from '../../gallery/GalleryGrid';
import PaymentScreen from '../../singleHotel/paymentScreen/PaymentScreen';
import AdditionalPropsInjector from './AdditionalPropsInjector';

const DetailStack = StackNavigator(
  {
    SingleHotel: {
      screen: withMappedProps()(SingleHotelNavigationScreen),
      navigationOptions: {
        headerLeft: null,
        ...createTransparentHeaderStyle(RNDimensions.get('screen')),
      },
    },
    GalleryGrid: {
      screen: withMappedProps(AdditionalPropsInjector)(GalleryGrid),
    },
    Payment: {
      screen: withMappedProps()(PaymentScreen),
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'SingleHotel',
  },
);

export default StackNavigator(
  {
    DetailStack: {
      screen: DetailStack,
      navigationOptions: {
        headerLeft: null,
        /**
         * @todo Due to static nature of React Navigation, this configuration
         * will not update when screen width changes (when used with SplitView)
         * or rotates.
         *
         * This has to be fixed by providing a custom Header component that forks
         * React Navigation one and uses Dimensions.Consumer to re-render itself.
         */
        ...createTransparentHeaderStyle(RNDimensions.get('screen')),
      },
    },
    SingleHotelMap: {
      screen: SingleHotelMapNavigationScreen,
      navigationOptions: {
        headerLeft: null,
        ...createTransparentHeaderStyle(RNDimensions.get('screen')),
      },
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'DetailStack',
    mode: 'modal',
  },
);
