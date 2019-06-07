// @flow strict

import * as React from 'react';
import { Text, StyleSheet, Translation } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { View } from 'react-native';

type Props = {|
  +children: React.Element<typeof Translation>,
|};

export default function DateButton(props: Props) {
  return (
    <View style={styles.buttonWrapper}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: defaultTokens.colorTextPrimary,
  },
  buttonWrapper: {
    backgroundColor: defaultTokens.paletteCloudNormal,
    marginBottom: 10,
    padding: 10,
    borderRadius: parseInt(defaultTokens.borderRadiusSmall, 10),
  },
});
