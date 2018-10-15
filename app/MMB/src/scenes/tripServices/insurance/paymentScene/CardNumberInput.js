// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { TextInput, StyleSheet } from '@kiwicom/mobile-shared';

import CardImage from './CardImage';

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
  +onCardChange: (cardNumber: string) => void,
|};

export default function CardNumberInput(props: Props) {
  return (
    <React.Fragment>
      <TextInput
        label={
          <Translation id="mmb.trip_services.insurance.payment.credit_card_number" />
        }
        onChangeText={props.onCardChange}
        keyboardType="number-pad"
      />
      <View style={styles.image}>
        <CardImage cardType={props.cardType} />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    end: 0,
    bottom: 5,
    padding: 10,
  },
});
