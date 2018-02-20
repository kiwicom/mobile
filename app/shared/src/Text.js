// @flow

import * as React from 'react';
import ReactNative from 'react-native';

import StyleSheet from './PlatformStyleSheet';
import type { StylePropType } from '../types/Styles';

type Props = {|
  children: React.Node,
  style?: StylePropType,
|};

export default function Text({ children, style }: Props) {
  return (
    <ReactNative.Text style={[styles.nativeText, style]}>
      {children}
    </ReactNative.Text>
  );
}

const styles = StyleSheet.create({
  // These values are from the official design. Don't touch it please.
  nativeText: {
    fontWeight: 'normal',
    color: '#30363d',
    android: {
      fontSize: 15,
      lineHeight: 21,
    },
    ios: {
      fontSize: 14,
      lineHeight: 20,
    },
  },
});
