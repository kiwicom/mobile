// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color } from '@kiwicom/mobile-shared';

import TimelineRow from './TimelineRow';

type Props = {|
  +dateLocation: ?React.Node,
  +iconVertLines: React.Node,
  +mainContent: React.Node,
  +isPastEvent?: boolean,
|};

export default function TimelineEventLayout(props: Props) {
  let rowStyle = {};
  if (props.isPastEvent) {
    rowStyle = styles.isPastEvent;
  }
  return (
    <TimelineRow
      leftColumn={
        <View style={styles.row}>
          <View style={styles.dateLocation}>{props.dateLocation}</View>
          <View style={styles.iconVertLines}>{props.iconVertLines}</View>
        </View>
      }
      rightColumn={<View style={styles.mainContent}>{props.mainContent}</View>}
      rowStyle={rowStyle}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  isPastEvent: {
    backgroundColor: Color.grey.$50,
  },
  dateLocation: {
    flex: 1,
  },
  iconVertLines: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingEnd: 10,
  },
});
