// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { TextButton, StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import OrderSummary from '../insuranceOverviewScene/orderSummary/OrderSummary';
import PaymentFormTitle from './PaymentFormTitle';
import CreditCardNumberInput from './CreditCardNumberInput';
import ExpiryDateInput from './ExpiryDateInput';
import SecurityCodeInput from './SecurityCodeInput';
import CardholdersNameInput from './CardholdersNameInput';
import RememberCardSwitch from './RememberCardSwitch';

const noop = () => {};

export default class PaymentScene extends React.Component<{||}> {
  onPress = () => {
    console.warn('TODO');
  };
  render() {
    return (
      <React.Fragment>
        <View style={styles.container}>
          <View style={styles.formRow}>
            <PaymentFormTitle />
          </View>
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
        </View>
        <View style={[styles.container, styles.buttonContainer]}>
          <TextButton
            title={
              <Translation id="mmb.trip_services.insurance.payment.pay_now" />
            }
            onPress={this.onPress}
          />
        </View>

        <OrderSummary />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultTokens.paletteWhite,
    padding: 10,
  },
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
  buttonContainer: {
    marginTop: 10,
  },
});
