// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';

import { withInsurancePaymentContext } from './InsurancePaymentContext';
import CardNumberInput from './CardNumberInput';
import ExpiryDateInput from './ExpiryDateInput';
import SecurityCodeInput from './SecurityCodeInput';
import CardholdersNameInput from './CardholdersNameInput';
import RememberCardSwitch from './RememberCardSwitch';

type CardType =
  | 'MASTERCARD'
  | 'VISA'
  | 'MAESTRO'
  | 'AMERICAN_EXPRESS'
  | 'DISCOVER'
  | 'DINERS_CLUB'
  | 'MIR'
  | 'UNKNOWN';

type Props = {|
  +cardType: CardType,
  +expiryDate: {| +month: string, +year: string |},
  +remember: boolean,
  +onCardChange: (cardNumber: string) => void,
  +onExpiryDateChange: (expiryDate: {|
    +month: string,
    +year: string,
  |}) => void,
  +onSecurityCodeChange: (securityCode: string) => void,
  +onCardholdersNameChange: (cardHoldersName: string) => void,
  +onRememberCardChange: (remember: boolean) => void,
|};

function PaymentForm({
  cardType,
  expiryDate,
  remember,
  onCardChange,
  onExpiryDateChange,
  onSecurityCodeChange,
  onCardholdersNameChange,
  onRememberCardChange,
}: Props) {
  return (
    <React.Fragment>
      <View style={styles.formRow}>
        <CardNumberInput onCardChange={onCardChange} cardType={cardType} />
      </View>
      <View style={styles.row}>
        <View style={styles.halfRow}>
          <ExpiryDateInput
            onExpiryDateChange={onExpiryDateChange}
            expiryDate={expiryDate}
          />
        </View>
        <View style={styles.halfRow}>
          <SecurityCodeInput onSecurityCodeChange={onSecurityCodeChange} />
        </View>
      </View>
      <View style={styles.formRow}>
        <CardholdersNameInput
          onCardholdersNameChange={onCardholdersNameChange}
        />
      </View>
      <View style={[styles.formRow, styles.rememberCard]}>
        <RememberCardSwitch
          onRememberCardChange={onRememberCardChange}
          remember={remember}
        />
      </View>
    </React.Fragment>
  );
}

export default withInsurancePaymentContext(state => ({
  cardType: state.cardType,
  expiryDate: state.expiryDate,
  remember: state.remember,
  onCardChange: state.actions.onCardChange,
  onExpiryDateChange: state.actions.onExpiryDateChange,
  onSecurityCodeChange: state.actions.onSecurityCodeChange,
  onCardholderNameChange: state.actions.onCardholderNameChange,
  onRememberCardChange: state.actions.onRememberCardChange,
}))(PaymentForm);

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
