// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Color, StyleSheet, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

type Props = {|
  name?: React.Element<typeof Translation>,
  title: React.Element<typeof Translation>,
  value: React.Element<typeof Translation>,
|};

export default function PassengerMenuItem(props: Props) {
  return (
    <View style={styleSheet.wrapper}>
      {props.name && <Text style={styleSheet.name}>{props.name}</Text>}
      <Text style={styleSheet.title}>{props.title}</Text>
      <Text>{props.value}</Text>
    </View>
  );
}

const styleSheet = StyleSheet.create({
  name: {
    fontSize: 16,
    marginBottom: 17,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 15,
    backgroundColor: Color.white,
  },
  title: {
    color: Color.textLight,
    fontSize: 12,
  },
});
