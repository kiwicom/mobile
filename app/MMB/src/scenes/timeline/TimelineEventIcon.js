// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color, Icon } from '@kiwicom/mobile-shared';

const size = 17;

export type Props = {|
  +name: string,
  +isFirst?: boolean,
  +isPastEvent?: boolean,
|};

export default function TimelineEventIcon(props: Props) {
  const pastEventIcon = (
    <Icon
      name="check"
      size={size}
      style={[styles.icon, styles.pastEventIcon]}
    />
  );
  const icon = <Icon name={props.name} size={size} style={styles.icon} />;
  return (
    <View style={styles.container}>
      <View
        style={[styles.line, props.isFirst && styles.resetBackgroundColor]}
      />
      <View style={styles.iconBorder}>
        {props.isPastEvent ? pastEventIcon : icon}
      </View>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  line: {
    backgroundColor: Color.ink.lighter,
    flex: 1,
    height: 30,
    width: 1,
  },
  resetBackgroundColor: {
    backgroundColor: 'transparent',
  },
  icon: {
    color: Color.product.normal,
    backgroundColor: Color.white,
    padding: 3,
    borderRadius: 50,
    borderColor: Color.product.normal,
    borderWidth: 2,
    textAlign: 'center',
  },
  pastEventIcon: {
    color: Color.white,
    backgroundColor: Color.product.normal,
  },
  iconBorder: {
    backgroundColor: Color.white,
    margin: 2,
  },
});
