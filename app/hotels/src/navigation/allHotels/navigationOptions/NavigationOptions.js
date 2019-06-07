// @flow strict

import * as React from 'react';
import { Platform, StatusBar } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

export default function getNavigationOptions() {
  return {
    headerStyle: {
      height: 78,
      marginTop: Platform.select({
        ios: 0,
        android: StatusBar.currentHeight,
      }),
      borderBottomColor: defaultTokens.paletteInkLighter,
    },
    headerLeft: <HeaderLeft />,
    headerRight: <HeaderRight />,
  };
}
