// @flow strict

import * as React from 'react';
import { StyleSheet, Price, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +text: React.Element<typeof Translation>,
  +price: React.Element<typeof Price>,
|};

export default function SummaryRow(props: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.text}>{props.text}</Text>
      <Text style={styles.price}>{props.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: defaultTokens.colorTextSecondary,
  },
  price: {
    color: defaultTokens.colorTextAttention,
  },
});
