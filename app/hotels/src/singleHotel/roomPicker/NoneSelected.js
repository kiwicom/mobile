// @flow

import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Price, StyleSheet } from '@kiwicom/react-native-app-shared';

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#0097a9',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  texts: {
    fontSize: 14,
    color: '#0097a9',
  },
});

type Props = {|
  price: number,
  currency: string,
  onSelect: () => void,
|};

export default function NoneSelected({ price, currency, onSelect }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <Text style={styles.texts}>Select</Text>
      <Price amount={price} currency={currency} style={styles.texts} />
    </TouchableOpacity>
  );
}
