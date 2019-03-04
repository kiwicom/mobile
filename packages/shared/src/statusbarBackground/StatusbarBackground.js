// @flow strict

import * as React from 'react';
import { View, Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import StyleSheet from '../PlatformStyleSheet';
import type { StylePropType } from '../../types/Styles';
import Device from '../Device';

type Props = {|
  +style?: StylePropType,
|};

export default function StatsbarBackground(props: Props) {
  if (Platform.OS === 'android') {
    // Default implementation on android is just fine
    return null;
  }
  return <View style={[styles.statusbar, props.style]} />;
}

const styles = StyleSheet.create({
  statusbar: {
    ios: {
      position: 'absolute',
      top: 0,
      end: 0,
      start: 0,
      height: Device.isIPhoneX ? 44 : 20,
      zIndex: parseInt(defaultTokens.zIndexSticky, 10),
    },
  },
});
