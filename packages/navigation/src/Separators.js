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
export function SeparatorTrimmed({
  gapSizeStart,
  gapSizeEnd,
}: {|
  gapSizeStart: number,
  gapSizeEnd?: number,
|}) {
  return (
    <View style={styleSheet.row}>
      <View style={[styleSheet.gap, { width: gapSizeStart }]} />
      <SeparatorFullWidth />
      <View style={[styleSheet.gap, { width: gapSizeEnd }]} />
    </View>
  );
}

SeparatorTrimmed.defaultProps = {
  gapSizeEnd: 0,
};

const styleSheet = StyleSheet.create({
  separator: {
    flex: 1,
    height: 1,
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
