// @flow strict

import * as React from 'react';
import {
  StackNavigator,
  StackNavigatorOptions,
} from '@kiwicom/mobile-navigation';
import { AncillaryFactory } from '@kiwicom/react-native-ancillary-factory';

export default StackNavigator(
  {
    Banner: {
      screen: () => (
        <AncillaryFactory serviceName="fast-track" bookingId={123} />
      ),
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'Banner',
  },
);
