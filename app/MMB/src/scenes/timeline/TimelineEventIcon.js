// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color, Icon, TextIcon } from '@kiwicom/mobile-shared';

import TimelineEventIconContext from '../../context/TimelineEventIconContext';
import TimelineEventContext from '../../context/TimelineEventContext';

export type Props = {|
  +icon: React.Element<typeof TextIcon | typeof Icon>,
|};

const TopLine = () => (
  <TimelineEventIconContext.Consumer>
    {({ displayTopLine }) => (
      <View
        style={[
          styles.line,
          styles.topLine,
          !displayTopLine && styles.resetBackgroundColor,
        ]}
      />
    )}
  </TimelineEventIconContext.Consumer>
);

const BottomLine = () => (
  <TimelineEventIconContext.Consumer>
    {({ displayBottomLine }) => (
      <View
        style={[
          styles.line,
          styles.bottomLine,
          !displayBottomLine && styles.resetBackgroundColor,
        ]}
      />
    )}
  </TimelineEventIconContext.Consumer>
);

export default function TimelineEventIcon(props: Props) {
  const icon = (
    <View style={styles.iconBorder}>
      {React.cloneElement(props.icon, {
        style: [props.icon.props.style, styles.icon],
      })}
    </View>
  );
  const pastEventIcon = (
    <View style={styles.pastEventIconBorder}>
      <TextIcon code="V" style={[styles.icon, styles.pastEventIcon]} />
    </View>
  );

  return (
    <View style={styles.container}>
      <TopLine />
      <TimelineEventContext.Consumer>
        {({ isPastEvent }) => (isPastEvent ? pastEventIcon : icon)}
      </TimelineEventContext.Consumer>
      <BottomLine />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
  },
  line: {
    backgroundColor: Color.ink.lighter,
    width: 1,
  },
  resetBackgroundColor: {
    backgroundColor: 'transparent',
  },
  topLine: {
    height: 20,
  },
  bottomLine: {
    minHeight: 10,
    flex: 1,
  },
  icon: {
    color: Color.product.normal,
    textAlign: 'center',
    fontSize: 15,
  },
  pastEventIcon: {
    color: Color.white,
    backgroundColor: Color.product.normal,
    textAlign: 'center',
  },
  iconBorder: {
    borderRadius: 50,
    borderWidth: 2,
    padding: 4,
    borderColor: Color.product.normal,
    backgroundColor: Color.white,
    margin: 3,
  },
  pastEventIconBorder: {
    borderRadius: 50,
    borderWidth: 2,
    padding: 4,
    borderColor: Color.product.normal,
    backgroundColor: Color.product.normal,
    margin: 3,
  },
});
