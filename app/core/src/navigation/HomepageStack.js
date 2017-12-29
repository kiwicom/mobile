// @flow

import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';

import Homepage from '../screens/homepage/Homepage';
import Search from '../screens/searchResults/Search';
import WebBooking from '../screens/searchResults/WebBooking';

export default {
  Home: {
    screen: withMappedProps(Homepage),
    navigationOptions: {
      title: 'Welcome',
    },
  },
  SearchResults: { screen: withMappedProps(Search) },
  WebBooking: { screen: withMappedProps(WebBooking) },
};
