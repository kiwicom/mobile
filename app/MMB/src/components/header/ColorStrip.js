// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +color?: string,
|};

export default function ColorStrip(props: Props) {
  return <View style={[styles.strip, { backgroundColor: props.color }]} />;
}

ColorStrip.defaultProps = {
  color: defaultTokens.paletteProductNormal,
};

const styles = StyleSheet.create({
  strip: {
    width: 5,
    height: '100%',
  },
});
