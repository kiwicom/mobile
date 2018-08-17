// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Color, StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type SeparatorFullWidthType = {|
  +color?: string,
|};

/**
 * Fill width grey line:
 *
 * |                           |
 * |---------------------------|
 * |                           |
 */
export function SeparatorFullWidth(props: SeparatorFullWidthType) {
  let style = {};
  if (props.color) {
    style = {
      backgroundColor: props.color,
    };
  }
  return <View style={[styleSheet.separator, style]} />;
}

type SeparatorTrimmedType = {|
  +gapSizeStart: number,
  +gapSizeEnd?: number,
  +color?: string,
|};

/**
 * Grey line but not starting from the very beginning (or the end):
 *
 * |                           |
 * |     ----------------------|
 * |                           |
 */
export function SeparatorTrimmed(props: SeparatorTrimmedType) {
  const { gapSizeStart, gapSizeEnd, color } = props;
  return (
    <View style={styleSheet.row}>
      <View style={[styleSheet.gap, { width: gapSizeStart }]} />
      <SeparatorFullWidth color={color} />
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
    backgroundColor: Color.backgroundGray, // TODO: Consult designer
  },
  row: {
    flexDirection: 'row',
  },
  gap: {
    height: 1,
    backgroundColor: defaultTokens.paletteWhite,
  },
});
