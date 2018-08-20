// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Translation } from '@kiwicom/mobile-localization';
import { Text, Switch, StyleSheet } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +onRememberCardChange: () => void,
|};

export default function RememberCardSwitch(props: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>
        <Translation id="mmb.trip_services.insurance.payment.remember_card" />
      </Text>
      <Switch value={false} onValueChange={props.onRememberCardChange} />
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
