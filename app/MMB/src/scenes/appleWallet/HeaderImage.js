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
          resizeMode="cover"
          style={styles.image}
        />
      }
      renderOnWide={
        <Image
          source={AppleWalletBackgroundTablet}
          resizeMode="cover"
          style={styles.image}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: '100%',
    position: 'absolute',
    top: 0,
    start: 0,
    end: 0,
  },
});
