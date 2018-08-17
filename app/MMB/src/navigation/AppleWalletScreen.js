// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import AppleWalletScene from '../scenes/appleWallet/AppleWalletScene';
import WalletContext from '../context/WalletContext';

type PropsWithContext = {|
  +setSelectedSegment: (segmentId: string | null) => void,
|};

class AppleWalletScreen extends React.Component<PropsWithContext> {
  componentWillUnmount = () => {
    this.props.setSelectedSegment(null);
  };

  render = () => (
    <View style={styles.container}>
      <AppleWalletScene />
    </View>
  );
}

export default function AppleWalletScreenWithContext() {
  return (
    <WalletContext.Consumer>
      {({ actions: { setSelectedSegment } }) => (
        <AppleWalletScreen setSelectedSegment={setSelectedSegment} />
      )}
    </WalletContext.Consumer>
  );
}

AppleWalletScreenWithContext.navigationOptions = () => ({
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTransparent: true,
  headerTintColor: defaultTokens.paletteWhite,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
