// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text, Color } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

type Props = {|
  title: React.Element<typeof Translation>,
  value: React.Element<typeof Translation>,
|};

const Column = (props: Props) => (
  <View style={styles.column}>
    <Text style={styles.titleLight}>{props.title}</Text>
    {props.value}
  </View>
);

const styles = StyleSheet.create({
  column: {
    flex: 1,
  },
  titleLight: {
    color: Color.textLight,
    fontSize: 12,
  },
});

export default Column;
