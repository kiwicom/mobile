// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color } from '@kiwicom/mobile-shared';

export default function Handle() {
  return <View style={styles.handle} />;
}

const styles = StyleSheet.create({
  handle: {
    borderBottomWidth: 2,
    borderBottomColor: Color.grey.athensGrey, // TODO: Consult designer
    borderRadius: 130,
    alignSelf: 'center',
    width: 100,
    marginTop: 3,
  },
});
