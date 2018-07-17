// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';

const styles = StyleSheet.create({
  handle: {
    borderBottomWidth: 2,
    borderBottomColor: '#edeff2',
    borderRadius: 130,
    alignSelf: 'center',
    width: 100,
    marginTop: 3,
  },
});

export default function Handle() {
  return <View style={styles.handle} />;
}
