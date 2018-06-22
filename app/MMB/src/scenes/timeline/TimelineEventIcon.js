// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color, Icon, TextIcon } from '@kiwicom/mobile-shared';

export type Props = {|
  +icon: React.Element<typeof TextIcon | typeof Icon>,
  +isFirst?: boolean,
  +isPastEvent?: boolean,
|};

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
      <View
        style={[
          styles.line,
          styles.topLine,
          props.isFirst && styles.resetBackgroundColor,
        ]}
      />
      {props.isPastEvent ? pastEventIcon : icon}
      <View style={[styles.line, styles.bottomLine]} />
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
  },
  pastEventIcon: {
    color: Color.white,
    backgroundColor: Color.product.normal,
    textAlign: 'center',
  },
  iconBorder: {
    borderRadius: 50,
    borderWidth: 2,
    padding: 3,
    borderColor: Color.product.normal,
    backgroundColor: Color.white,
    margin: 2,
  },
  pastEventIconBorder: {
    borderRadius: 50,
    borderWidth: 2,
    padding: 3,
    borderColor: Color.product.normal,
    backgroundColor: Color.product.normal,
    margin: 2,
  },
});
