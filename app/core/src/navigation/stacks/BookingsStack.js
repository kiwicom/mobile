// @flow strict

import React from 'react';
import {
  StackNavigator,
  StackNavigatorOptions,
} from '@kiwicom/mobile-navigation';
import { AncillaryFactory } from '@kiwicom/react-native-ancillary-factory';

const MOCK_PROPS = {
  service: 'fast_track',
  bookingId: 123,
  kwAuthToken: 'xyz',
};

export default StackNavigator(
  {
    Banner: {
      screen: () => <AncillaryFactory {...MOCK_PROPS} />,
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'Banner',
  },
);
