// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet, Color, Text } from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';

import Passenger from './Passenger';
import DateAndTime from './DateAndTime';

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
      {/* TODO: Button to add to wallet */}
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
    borderBottomColor: Color.backgroundGray,
  },
  dateContainer: {
    paddingTop: 18,
    paddingBottom: 20,
  },
  infoContainer: {
    paddingTop: 16,
    paddingBottom: 20,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '600',
  },
  text: {
    color: Color.textLight,
  },
});
