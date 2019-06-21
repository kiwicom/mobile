// @flow strict

import * as React from 'react';
import { Platform, StatusBar } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

export default function getNavigationOptions() {
  const statusBarHeight = Platform.select({
    ios: 0,
    android: StatusBar.currentHeight,
  });
  return {
    headerStyle: {
      height: 78 + statusBarHeight,
      marginTop: 0,
      paddingTop: Platform.select({
        ios: 0,
        android: statusBarHeight,
      }),

      borderBottomColor: defaultTokens.paletteInkLighter,
    },
    headerLeft: <HeaderLeft />,
    headerRight: <HeaderRight />,
  };
}
