// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color } from '@kiwicom/react-native-app-shared';

const styles = StyleSheet.create({
  handle: {
    borderBottomWidth: 2,
    borderBottomColor: Color.backgroundGray,
    alignSelf: 'center',
    width: 100,
    marginTop: 3,
  },
});

export default function Handle() {
  return <View style={styles.handle} />;
}
