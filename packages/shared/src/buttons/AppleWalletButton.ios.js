// @flow

import * as React from 'react';
import { requireNativeComponent } from 'react-native';

import StyleSheet from '../PlatformStyleSheet';
import type { StylePropType } from '../../types/Styles';

const RNKiwiAppleWallet = requireNativeComponent('RNKiwiAppleWallet', null);

type Props = {|
  +style?: StylePropType,
  +onPress: () => void,
|};

class AppleWalletButton extends React.Component<Props> {
  render() {
    const { onPress, style } = this.props;
    return (
      <RNKiwiAppleWallet onPress={onPress} style={[styles.button, style]} />
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 44,
  },
});

export default AppleWalletButton;
