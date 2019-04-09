// @flow

import * as React from 'react';
import {
  StackNavigator,
  StackNavigatorOptions,
} from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-shared';

export default StackNavigator(
  {
    Void: {
      screen: function VoidScreen() {
        return (
          <Translation passThrough="This scene is prepared for the future. Please check navigation in the core package." />
        );
      },
    },
  },
  {
    ...StackNavigatorOptions,
    initialRouteName: 'Void',
  },
);
