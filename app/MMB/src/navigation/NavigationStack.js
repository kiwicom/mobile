// @flow

import {
  StackNavigator,
  StackNavigatorOptions,
} from '@kiwicom/mobile-navigation';
import { createSwitchNavigator } from 'react-navigation';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import { NewHotelsStandAlonePackage } from '../../../hotels';
import DetailScreen, { MenuComponents } from './DetailScreen';
import ListScreen from './ListScreen';
import FillTravelDocumentScreen from './FillTravelDocumentScreen';
import TravelDocumentModalScreen from './TravelDocumentModalScreen';
import AppleWalletScreen from './AppleWalletScreen';
import AddressPickerScreen from './AddressPickerScreen';
import TransportationMap from '../scenes/tripServices/transportation/TransportationMap';

// THIS IS ONLY FOR MOBILE DEVICES!
const Screens = {};
Object.entries(MenuComponents).forEach(
  // $FlowIssue: https://github.com/facebook/flow/issues/2221
  ([routeName, { screen, headerTitle, headerRight, headerStyle }]) => {
    Screens[routeName] = {
      screen: withMappedProps(screen),
      navigationOptions: {
        headerTitle,
        headerRight,
        headerStyle: {
          ...headerStyle,
          backgroundColor: defaultTokens.paletteWhite,
        },
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

const SwitchStack = createSwitchNavigator(
  {
    MMBMainSwitchStack: {
      screen: MainStack,
    },
    MMBHotelsStack: {
      screen: withMappedProps(NewHotelsStandAlonePackage),
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'MMBMainSwitchStack',
    backBehavior: 'initialRoute',
    resetOnBlur: false,
  },
);

const TransportationStack = StackNavigator(
  {
    AddressPickerScreen: withMappedProps(AddressPickerScreen),
    TransportationMap: withMappedProps(TransportationMap),
    // TODO add another webview screen to this stack as navigation behaviour looks weird otherwise.
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'TransportationMap',
    mode: 'modal',
  },
);

export default StackNavigator(
  {
    MMBMainStack: {
      screen: SwitchStack,
    },
    TravelDocumentModalStack: {
      screen: TravelDocumentModalStack,
    },
    TransportationMap: {
      screen: TransportationStack,
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'MMBMainStack',
    headerMode: 'none',
    mode: 'modal',
  },
);
