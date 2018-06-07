// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color, type StylePropType } from '@kiwicom/mobile-shared';

type Props = {|
  +leftColumn?: React.Element<typeof View>,
  +rightColumn?: React.Element<typeof View>,
  +rowStyle?: StylePropType,
|};

const TimelineRow = (props: Props) => {
  return (
    <View style={[styles.container, props.rowStyle]}>
      <View style={styles.leftColumn}>{props.leftColumn}</View>
      <View style={styles.rightColumn}>{props.rightColumn}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Color.white,
  },
  leftColumn: {
    flex: 6,
  },
  rightColumn: {
    flex: 14,
  },
});

export default TimelineRow;
