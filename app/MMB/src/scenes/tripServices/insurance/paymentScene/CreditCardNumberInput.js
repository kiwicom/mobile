// @flow

import * as React from 'react';
import { View, Image } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { TextInput, StyleSheet } from '@kiwicom/mobile-shared';

type Props = {|
  +onCreditCardChange: () => void,
|};

export default function CreditCardNumberInput(props: Props) {
  return (
    <React.Fragment>
      <TextInput
        label={
          <Translation id="mmb.trip_services.insurance.payment.credit_card_number" />
        }
        onChangeText={props.onCreditCardChange}
        keyboardType="number-pad"
      />
      <View style={styles.image}>
        {/* TODO: CHANGE CARD IMAGE DEPENDING ON INPUT */}
        <Image source={require('./images/all_cards.imageset/all_cards.png')} />
      </View>
      {/* </View> */}
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
