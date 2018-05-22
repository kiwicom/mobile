// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Text, StyleSheet, Icon } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

type CommonProps = {|
  title: React.Element<typeof Translation>,
  children: React.Node,
|};

type Props = {|
  type: 'danger' | 'warning' | 'success',
  ...CommonProps,
|};

const AlertDanger = (props: CommonProps) => (
  <View style={[styles.container, styles.containerDanger]}>
    <View style={styles.iconContainer}>
      <Icon name="warning" size={18} color={RED} />
    </View>
    <View>
      <Text style={[styles.titleText, styles.titleDanger]}>{props.title}</Text>
      <View style={styles.body}>{props.children}</View>
    </View>
  </View>
);

export default function Alert(props: Props) {
  switch (props.type) {
    case 'danger':
      return <AlertDanger title={props.title}>{props.children}</AlertDanger>;
    case 'warning':
      // TODO
      return null;
    case 'success':
      // TODO
      return null;
    default:
      return null;
  }
}

const RED = '#d0021b';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 11,
    flexDirection: 'row',
  },
  containerDanger: {
    backgroundColor: 'rgba(208, 2, 27, 0.15)',
  },
  iconContainer: {
    marginRight: 12,
  },
  titleText: {
    fontSize: 12,
  },
  titleDanger: {
    color: RED,
  },
  body: {
    marginTop: 5,
  },
});
