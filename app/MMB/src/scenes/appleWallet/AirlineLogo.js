// @flow strict

import * as React from 'react';
import { NetworkImage, StyleSheet } from '@kiwicom/mobile-shared';

import WalletContext from '../../context/WalletContext';

const AirlineLogo = () => (
  <WalletContext.Consumer>
    {({ selectedSegment }) => {
      if (selectedSegment === null) {
        return null;
      }
      return (
        <NetworkImage
          source={{
            uri: selectedSegment.airlineLogoUrl,
          }}
          style={styles.image}
          resizeMode="contain"
        />
      );
    }}
  </WalletContext.Consumer>
);

const styles = StyleSheet.create({
  image: {
    height: 25,
    width: 55,
  },
});

export default AirlineLogo;
