// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color, type StylePropType } from '@kiwicom/mobile-shared';

import IsPastEventContext from '../../context/TimelineEventContext';

type Props = {|
  +leftColumn?: React.Element<typeof View>,
  +rightColumn?: React.Element<typeof View>,
  +rowStyle?: StylePropType,
|};

const ViewWithIsPastEventContext = ({ children, style }) => (
  <IsPastEventContext.Consumer>
    {({ isPastEvent }) => (
      <View style={[style, isPastEvent && styles.isPastEvent]}>{children}</View>
    )}
  </IsPastEventContext.Consumer>
);

const TimelineRow = (props: Props) => {
  return (
    <ViewWithIsPastEventContext style={[styles.container, props.rowStyle]}>
      <View style={styles.leftColumn}>{props.leftColumn}</View>
      <View style={styles.rightColumn}>{props.rightColumn}</View>
    </ViewWithIsPastEventContext>
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
  isPastEvent: {
    backgroundColor: Color.grey.$50,
  },
});

export default TimelineRow;
