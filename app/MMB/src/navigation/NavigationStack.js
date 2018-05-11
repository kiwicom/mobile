// @flow

import {
  StackNavigator,
  StackNavigatorOptions,
} from '@kiwicom/mobile-navigation';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';

import DetailScreen, { MenuComponents } from './DetailScreen';
import ListScreen from './ListScreen';

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

export default StackNavigator(
  {
    ListScreen: {
      screen: withMappedProps(ListScreen),
    },
    DetailScreen: {
      screen: withMappedProps(DetailScreen),
    },
    ...Screens,
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'ListScreen',
  },
);
