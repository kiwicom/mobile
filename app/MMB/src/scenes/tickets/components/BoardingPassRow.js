// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';

type Props = {|
  +leftColumn: React.Node,
  +rightColumn: React.Node,
|};

const BoardingPassRow = ({ leftColumn, rightColumn }: Props) => (
  <View style={styles.row}>
    <View style={styles.leftColumn}>{leftColumn}</View>
    <View style={styles.rightColumn}>{rightColumn}</View>
  </View>
);

export default BoardingPassRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  leftColumn: {
    width: 50,
  },
  rightColumn: {
    flex: 1,
  },
});
