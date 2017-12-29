// @flow

import * as React from 'react';
import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';
import { Text } from 'react-native';

import Homepage from '../screens/homepage/Homepage';
import Search from '../screens/searchResults/Search';
import WebBooking from '../screens/searchResults/WebBooking';

export default {
  Home: {
    screen: withMappedProps(Homepage),
    navigationOptions: {
      title: <Text>Welcome</Text>,
    },
  },
  SearchResults: { screen: withMappedProps(Search) },
  WebBooking: { screen: withMappedProps(WebBooking) },
};
