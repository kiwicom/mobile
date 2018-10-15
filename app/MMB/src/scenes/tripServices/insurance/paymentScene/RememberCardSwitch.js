// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { Text, Switch, StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +remember: boolean,
  +onRememberCardChange: (remember: boolean) => void,
|};

export default function RememberCardSwitch({
  remember,
  onRememberCardChange,
}: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>
        <Translation id="mmb.trip_services.insurance.payment.remember_card" />
      </Text>
      <Switch value={remember} onValueChange={onRememberCardChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: defaultTokens.colorTextAttention,
  },
});
