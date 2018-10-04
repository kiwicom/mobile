// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { Text, TextIcon, StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

export default function CreditCardNumberInput() {
  return (
    <View style={styles.row}>
      <TextIcon code="u" style={styles.icon} />
      <Text style={styles.text}>
        <Translation passThrough=" " />
        <Translation id="mmb.trip_services.insurance.payment.header" />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: defaultTokens.colorIconAttention,
    fontSize: 16,
  },
  text: {
    color: defaultTokens.colorTextAttention,
    fontSize: 16,
  },
});
