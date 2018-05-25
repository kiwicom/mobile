// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Color, StyleSheet, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

type Props = {|
  title: React.Element<typeof Translation>,
  value: React.Element<typeof Translation>,
|};

export default function ContactMenuItem(props: Props) {
  return (
    <View style={styleSheet.wrapper}>
      <Text style={styleSheet.title}>{props.title}</Text>
      <Text>{props.value}</Text>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
    backgroundColor: Color.white,
  },
  title: {
    color: Color.textLight,
    fontSize: 12,
  },
});
