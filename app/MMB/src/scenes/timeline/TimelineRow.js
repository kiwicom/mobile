// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, type StylePropType } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

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
    backgroundColor: defaultTokens.paletteWhite,
  },
  leftColumn: {
    flex: 6,
  },
  rightColumn: {
    flex: 14,
  },
  isPastEvent: {
    backgroundColor: defaultTokens.paletteCloudLight,
  },
});

export default TimelineRow;
