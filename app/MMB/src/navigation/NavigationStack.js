// @flow

import {
  StackNavigator,
  StackNavigatorOptions,
} from '@kiwicom/mobile-navigation';

import DetailScreen, { MenuComponents } from './DetailScreen';
import ListScreen from './ListScreen';
import FillTravelDocumentScreen from './FillTravelDocumentScreen';
import TravelDocumentModalScreen from './TravelDocumentModalScreen';

// THIS IS ONLY FOR MOBILE DEVICES!
const Screens = {};
Object.entries(MenuComponents).forEach(
  // $FlowIssue: https://github.com/facebook/flow/issues/2221
  ([routeName, { screen, headerTitle }]) => {
    Screens[routeName] = {
      screen,
      navigationOptions: {
        headerTitle,
      },
    };
  },
);

const TravelDocumentStack = StackNavigator(
  {
    TravelDocumentScreen: {
      screen: FillTravelDocumentScreen,
    },
    TravelDocumentModalScreen: {
      screen: TravelDocumentModalScreen,
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'TravelDocumentScreen',
    mode: 'modal',
  },
);

const MainStack = StackNavigator(
  {
    ListScreen: {
      screen: ListScreen,
    },
    DetailScreen: {
      screen: DetailScreen,
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
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'MMBMainStack',
    headerMode: 'none',
  },
);
