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
  const icon = React.cloneElement(props.icon, {
    style: [props.icon.props.style, styles.icon],
  });
  const pastEventIcon = (
    <TextIcon code="V" style={[styles.icon, styles.pastEventIcon]} />
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
      <View style={styles.iconBorder}>
        {props.isPastEvent ? pastEventIcon : icon}
      </View>
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
