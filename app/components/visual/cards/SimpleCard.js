// @flow

import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  children: React.Node,
  onPress?: Function,
  style?: Object,
};

export default function SimpleCard({ children, onPress, style }: Props) {
  const Card = <View style={[styles.container, style]}>{children}</View>;

  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{Card}</TouchableOpacity>;
  } else {
    return Card;
  }
}

const MARGIN = 5;
const PADDING_TOP_BOTTOM = 5;
const PADDING_LEFT_RIGHT = 10;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginBottom: MARGIN,
    marginLeft: MARGIN,
    marginRight: MARGIN,
    paddingTop: PADDING_TOP_BOTTOM,
    paddingBottom: PADDING_TOP_BOTTOM,
    paddingLeft: PADDING_LEFT_RIGHT,
    paddingRight: PADDING_LEFT_RIGHT,
  },
});
