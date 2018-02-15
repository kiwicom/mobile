// @flow

import * as React from 'react';
import ReactNative from 'react-native';
import {
  StyleSheet,
  type StylePropType,
} from '@kiwicom/react-native-app-shared';

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

/**
 * These values are from the official design. Don't touch it.
 */
const styles = StyleSheet.create({
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
