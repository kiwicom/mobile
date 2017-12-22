// @flow

import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import { StackNavigator } from 'react-navigation';

import Homepage from '../screens/homepage/Homepage';
import Search from '../screens/searchResults/Search';
import WebBooking from '../screens/searchResults/WebBooking';
import NavigatorOptions from './NavigatorOptions';
import HotelsStackNavigator from './HotelsStackNavigator';

export default StackNavigator(
  {
    Home: {
      screen: withMappedProps(Homepage),
      navigationOptions: {
        header: null,
      },
    },
    SearchResults: { screen: withMappedProps(Search) },
    WebBooking: { screen: withMappedProps(WebBooking) },
    ...HotelsStackNavigator,
  },
  {
    ...NavigatorOptions,
    initialRouteName: 'AllHotels',
  },
);
