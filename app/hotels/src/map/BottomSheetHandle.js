// @flow

import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  handle: {
    borderBottomWidth: 2,
    borderBottomColor: '#edeff2',
    alignSelf: 'center',
    width: 100,
    marginTop: 3,
  },
});

export default function Handle() {
  return <View style={styles.handle} />;
}
