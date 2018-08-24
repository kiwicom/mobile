// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

export default function Handle() {
  return <View style={styles.handle} />;
}

const styles = StyleSheet.create({
  handle: {
    borderBottomWidth: 2,
    borderBottomColor: defaultTokens.paletteCloudLight,
    borderRadius: 130,
    alignSelf: 'center',
    width: 100,
    marginTop: 3,
  },
});
