// @flow

import { withMappedNavigationAndConfigProps as withMappedProps } from 'react-navigation-props-mapper';

import Homepage from '../screens/homepage/Homepage';

export default {
  Home: {
    screen: withMappedProps(Homepage),
    navigationOptions: {
      title: 'Welcome',
    },
  },
};
