// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Color, StyleSheet } from '@kiwicom/mobile-shared';

export default function MenuGroupSeparator() {
  return <View style={styleSheet.separator} />;
}

const styleSheet = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: Color.backgroundGray,
  },
});
