// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';

import CreditCardNumberInput from './CreditCardNumberInput';
import ExpiryDateInput from './ExpiryDateInput';
import SecurityCodeInput from './SecurityCodeInput';
import CardholdersNameInput from './CardholdersNameInput';
import RememberCardSwitch from './RememberCardSwitch';

const noop = () => {};

export default function PaymentForm() {
  return (
    <React.Fragment>
      <View style={styles.formRow}>
        <CreditCardNumberInput onCreditCardChange={noop} />
      </View>
      <View style={styles.row}>
        <View style={styles.halfRow}>
          <ExpiryDateInput onExpiryDateChange={noop} />
        </View>
        <View style={styles.halfRow}>
          <SecurityCodeInput onSecurityCodeChange={noop} />
        </View>
      </View>
      <View style={styles.formRow}>
        <CardholdersNameInput onCardholdersNameChange={noop} />
      </View>
      <View style={[styles.formRow, styles.rememberCard]}>
        <RememberCardSwitch onRememberCardChange={noop} />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  formRow: {
    paddingTop: 15,
    paddingBottom: 5,
  },
  halfRow: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberCard: {
    justifyContent: 'space-between',
  },
});
