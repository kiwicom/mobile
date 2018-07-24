// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import HeaderImage from './HeaderImage';

export default function AppleWalletScene() {
  return (
    <React.Fragment>
      <HeaderImage />
      <View style={styles.content}>
        <Translation passThrough="TODO" />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: Color.white,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    marginTop: 240,
    paddingTop: 25,
    paddingHorizontal: 20,
  },
});
