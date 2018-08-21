// @flow

import {
  StackNavigator,
  StackNavigatorOptions,
} from '@kiwicom/mobile-navigation';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';

import { NewHotelsStandAlonePackage } from '../../../hotels';
import DetailScreen, { MenuComponents } from './DetailScreen';
import ListScreen from './ListScreen';
import FillTravelDocumentScreen from './FillTravelDocumentScreen';
import TravelDocumentModalScreen from './TravelDocumentModalScreen';
import AppleWalletScreen from './AppleWalletScreen';

// THIS IS ONLY FOR MOBILE DEVICES!
const Screens = {};
Object.entries(MenuComponents).forEach(
  // $FlowIssue: https://github.com/facebook/flow/issues/2221
  ([routeName, { screen, headerTitle }]) => {
    Screens[routeName] = {
      screen: withMappedProps(screen),
      navigationOptions: {
        headerTitle,
      },
    };
  },
);

const TravelDocumentStack = StackNavigator(
  {
    TravelDocumentScreen: {
      screen: withMappedProps(FillTravelDocumentScreen),
    },
    TravelDocumentModalScreen: {
      screen: withMappedProps(TravelDocumentModalScreen),
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'TravelDocumentScreen',
    mode: 'modal',
  },
);

// This is not good enough since it just opens as a new page, not modal
// It is complicated, needs to be improved later
const HotelStack = StackNavigator(
  {
    Hotels: {
      screen: withMappedProps(NewHotelsStandAlonePackage),
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'Hotels',
    mode: 'modal',
    headerMode: 'none',
  },
);

const MainStack = StackNavigator(
  {
    ListScreen: {
      screen: withMappedProps(ListScreen),
    },
    DetailScreen: {
      screen: withMappedProps(DetailScreen),
    },
    AppleWalletScreen: {
      screen: withMappedProps(AppleWalletScreen),
    },
    ...Screens,
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'ListScreen',
  },
);

export default StackNavigator(
  {
    MMBMainStack: {
      screen: MainStack,
    },
    TravelDocumentScreen: {
      screen: TravelDocumentStack,
    },
    MMBHotelsStack: {
      screen: HotelStack,
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'MMBMainStack',
    headerMode: 'none',
  },
);
