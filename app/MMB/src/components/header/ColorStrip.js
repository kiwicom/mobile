// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color } from '@kiwicom/mobile-shared';

type Props = {|
  +color?: string,
|};

export default function ColorStrip(props: Props) {
  return <View style={[styles.strip, { backgroundColor: props.color }]} />;
}

ColorStrip.defaultProps = {
  color: Color.brand,
};

const styles = StyleSheet.create({
  strip: {
    width: 5,
    height: '100%',
  },
});
