// @flow strict

import * as React from 'react';
import { Image } from 'react-native';
import {
  StyleSheet,
  AppleWalletBackground,
  AppleWalletBackgroundTablet,
  AdaptableLayout,
} from '@kiwicom/mobile-shared';

export default function HeaderImage() {
  return (
    <AdaptableLayout
      renderOnNarrow={
        <Image
          source={AppleWalletBackground}
          resizeMode="stretch"
          style={styles.image}
        />
      }
      renderOnWide={
        <Image
          source={AppleWalletBackgroundTablet}
          resizeMode="stretch"
          style={styles.image}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
  },
});
