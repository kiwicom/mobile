// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color } from '@kiwicom/mobile-shared';

import HeaderImage from './HeaderImage';
import AirlineLogo from './AirlineLogo';
import WalletContent from './WalletContent';

export default function AppleWalletScene() {
  return (
    <React.Fragment>
      <HeaderImage />
      <View style={[styles.content, styles.flex]}>
        <View style={[styles.logoContainer, styles.borderBottom]}>
          <View style={styles.contentPadding}>
            <AirlineLogo />
          </View>
          {/* TODO: replace with zig zag separator */}
        </View>
        <View style={[styles.contentPadding, styles.flex]}>
          <WalletContent />
        </View>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: Color.white,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    marginTop: 240,
    paddingTop: 25,
  },
  logoContainer: {
    alignItems: 'center',
    paddingBottom: 21,
  },
  contentPadding: {
    paddingHorizontal: 20,
  },
  flex: {
    flex: 1,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: Color.backgroundGray,
  },
});
