// @flow strict

import * as React from 'react';
import { type TranslationType } from '@kiwicom/mobile-localization';
import { Text, StyleSheet } from '@kiwicom/mobile-shared';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +label: TranslationType,
  +text: TranslationType,
|};

export default function WalletText(props: Props) {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    color: defaultTokens.colorTextSecondary,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 2,
  },
});
