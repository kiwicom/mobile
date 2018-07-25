// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color } from '@kiwicom/mobile-shared';

import AppleWalletScene from '../scenes/appleWallet/AppleWalletScene';
import WalletContext from '../context/WalletContext';

type PropsWithContext = {|
  +setSelectedSegment: (segmentId: string | null) => void,
|};

class AppleWalletScreen extends React.Component<PropsWithContext> {
  static navigationOptions = () => ({
    headerStyle: {
      backgroundColor: 'transparent',
    },
    headerTransparent: true,
    headerTintColor: Color.white,
  });

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
