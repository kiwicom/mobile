// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { Text, TextInput, StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +onExpiryDateChange: () => void,
|};

export default function CreditCardNumberInput(props: Props) {
  return (
    <React.Fragment>
      <Text style={styles.header}>
        <Translation id="mmb.trip_services.insurance.payment.expiry_date" />
      </Text>
      <View style={styles.row}>
        <View style={styles.month}>
          <TextInput
            placeholder={
              <Translation id="mmb.trip_services.insurance.payment.month" />
            }
            onChangeText={props.onExpiryDateChange}
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.separator}>
          <Translation passThrough=" / " />
        </Text>
        <View style={styles.year}>
          <TextInput
            placeholder={
              <Translation id="mmb.trip_services.insurance.payment.year" />
            }
            onChangeText={props.onExpiryDateChange}
            keyboardType="numeric"
          />
        </View>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  header: {
    color: defaultTokens.colorTextSecondary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  month: {
    flexGrow: 1,
  },
  year: {
    flexGrow: 1,
    marginEnd: 10,
  },
  separator: {
    fontSize: 15,
  },
});
