// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type SeparatorFullWidthType = {|
  +color?: string,
  +height?: number,
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
      height: props.height ? props.height : 1,
    };
  }
  return <View style={[styleSheet.separator, style]} />;
}

type SeparatorTrimmedType = {|
  +gapSizeStart: number,
  +gapSizeEnd?: number,
  +color?: string,
  +height?: number,
|};

/**
 * Grey line but not starting from the very beginning (or the end):
 *
 * |                           |
 * |     ----------------------|
 * |                           |
 */
export function SeparatorTrimmed(props: SeparatorTrimmedType) {
  const { gapSizeStart, gapSizeEnd, color, height } = props;
  return (
    <View style={styleSheet.row}>
      <View style={[styleSheet.gap, { width: gapSizeStart, height }]} />
      <SeparatorFullWidth color={color} height={height} />
      <View style={[styleSheet.gap, { width: gapSizeEnd, height }]} />
    </View>
  );
}

SeparatorTrimmed.defaultProps = {
  gapSizeEnd: 0,
  height: 1,
};

const styleSheet = StyleSheet.create({
  separator: {
    flex: 1,
    backgroundColor: defaultTokens.paletteCloudLight,
  },
  row: {
    flexDirection: 'row',
  },
  gap: {
    backgroundColor: defaultTokens.paletteWhite,
  },
});
