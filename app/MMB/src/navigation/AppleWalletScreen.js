// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color } from '@kiwicom/mobile-shared';

import AppleWalletScene from '../scenes/appleWallet/AppleWalletScene';

export default function AppleWalletScreen() {
  return (
    <View style={styles.container}>
      <AppleWalletScene />
    </View>
  );
}

AppleWalletScreen.navigationOptions = () => ({
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTransparent: true,
  headerTintColor: Color.white,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
