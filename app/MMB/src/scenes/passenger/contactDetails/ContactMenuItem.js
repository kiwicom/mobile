// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +title: React.Element<typeof Translation>,
  +value: React.Element<typeof Translation>,
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
    backgroundColor: defaultTokens.paletteWhite,
  },
  title: {
    color: defaultTokens.colorTextSecondary,
    fontSize: 12,
  },
});
