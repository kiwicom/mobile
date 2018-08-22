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
    TravelDocumentScreen: {
      screen: withMappedProps(FillTravelDocumentScreen),
    },
    ...Screens,
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'ListScreen',
  },
);

const TravelDocumentModalStack = StackNavigator(
  {
    TravelDocumentModalScreen: {
      screen: withMappedProps(TravelDocumentModalScreen),
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'TravelDocumentModalScreen',
  },
);

export default StackNavigator(
  {
    MMBMainStack: {
      screen: MainStack,
    },
    TravelDocumentModalStack: {
      screen: TravelDocumentModalStack,
    },
    // This is not good enough, it is complicated, needs to be improved later

    MMBHotelsStack: {
      screen: withMappedProps(NewHotelsStandAlonePackage),
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'MMBMainStack',
    headerMode: 'none',
    mode: 'modal',
  },
);
