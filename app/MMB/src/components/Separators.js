// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Color, StyleSheet } from '@kiwicom/mobile-shared';

/**
 * Fill width grey line:
 *
 * |                           |
 * |---------------------------|
 * |                           |
 */
export function SeparatorFullWidth() {
  return <View style={styleSheet.separator} />;
}

/**
 * Grey line but not starting from the very beginning:
 *
 * |                           |
 * |     ----------------------|
 * |                           |
 */
export function SeparatorTrimmed({ gapSize }: {| gapSize: number |}) {
  return (
    <View style={styleSheet.row}>
      <View style={[styleSheet.gap, { width: gapSize }]} />
      <SeparatorFullWidth />
    </View>
  );
}

const styleSheet = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: Color.backgroundGray,
  },
  row: {
    flexDirection: 'row',
  },
  gap: {
    height: 1,
    backgroundColor: Color.white,
  },
});
