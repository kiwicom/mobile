// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  Color,
  Text,
  AppleWalletButton,
  PassBook,
} from '@kiwicom/mobile-shared';
import { Translation, Alert } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Passenger from './Passenger';
import DateAndTime from './DateAndTime';
import WalletContext from '../../context/WalletContext';

const createAddHandler = pkpassUrl => async () => {
  try {
    await PassBook.addPass(pkpassUrl);
  } catch (err) {
    return Alert.translatedAlert(undefined, {
      id: 'mmb.apple_wallet.apple_wallet_scene.add_pass_error',
    });
  }
};

export default function WalletContent() {
  return (
    <React.Fragment>
      <View style={[styles.passengerContainer, styles.borderBottom]}>
        <Passenger />
      </View>
      <View style={[styles.dateContainer, styles.borderBottom]}>
        <DateAndTime />
      </View>
      <View style={[styles.infoContainer, styles.borderBottom]}>
        <Text style={styles.subtitle}>
          <Translation id="mmb.apple_wallet.apple_wallet_scene.why_use_apple_wallet" />
        </Text>
        <Text style={styles.text}>
          <Translation id="mmb.apple_wallet.apple_wallet_scene.why_wallet_text" />
        </Text>
      </View>
      <View style={styles.walletButtonContainer}>
        <WalletContext.Consumer>
          {({ selectedSegment }) => {
            if (selectedSegment === null) {
              return null;
            }
            return (
              <AppleWalletButton
                onPress={createAddHandler(selectedSegment.pkpassUrl)}
              />
            );
          }}
        </WalletContext.Consumer>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  passengerContainer: {
    paddingTop: 20,
    paddingBottom: 21,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: Color.backgroundGray, // TODO: Consult designer
  },
  dateContainer: {
    paddingTop: 18,
    paddingBottom: 20,
  },
  infoContainer: {
    paddingTop: 16,
    paddingBottom: 20,
  },
  walletButtonContainer: {
    justifyContent: 'center',
    paddingVertical: 20,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '600',
  },
  text: {
    color: defaultTokens.colorTextSecondary,
  },
});
