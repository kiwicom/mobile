// @flow

import * as React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
  children: React.Node,
};

export default function SimpleCard({ children }: Props) {
  return <View style={styles.container}>{children}</View>;
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
