// @flow strict

import * as React from 'react';
import {
  StackNavigator,
  StackNavigatorOptions,
} from '@kiwicom/mobile-navigation';
import { AncillaryFactory } from '@kiwicom/react-native-ancillary-factory';

const MOCK_PROPS = {
  service: 'fast-track',
  bookingId: 123,
  token: 'x.y.z',
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
