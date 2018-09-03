// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import type { TranslationType } from '@kiwicom/mobile-localization';
import { StyleSheet, Text, TextIcon } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +icon: React.Element<typeof TextIcon>,
  +value: TranslationType,
  +title?: TranslationType,
|};

export default function TimelineRow(props: Props) {
  return (
    <View style={styles.row}>
      {props.icon}
      {props.title != null && <Text style={styles.key}>{props.title}</Text>}
      <Text style={styles.value}>{props.value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  key: {
    fontSize: 12,
  },
  value: {
    fontSize: 12,
    color: defaultTokens.colorTextSecondary,
  },
});
