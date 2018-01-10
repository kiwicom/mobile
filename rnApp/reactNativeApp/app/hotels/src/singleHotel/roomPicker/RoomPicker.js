// @flow

import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Price } from '@kiwicom/react-native-app-common';

import NoneSelected from './NoneSelected';

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    backgroundColor: 'rgba(0, 151, 169, 0.2)',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#0097a9',
    width: 60,
    paddingVertical: 10,
    alignItems: 'center',
  },
  minusButton: {
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
  },
  plusButton: {
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  disabledButton: {
    opacity: 0.2,
  },
  buttonText: {
    backgroundColor: 'transparent',
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
  },
  priceAndCount: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 14,
    color: '#0097a9',
    fontWeight: '800',
  },
  price: {
    fontSize: 14,
    color: '#0097a9',
  },
});

type Props = {|
  price: number,
  currency: string,
  selectedCount: number,
  selectableCount: number,
  increment: () => void,
  decrement: () => void,
|};

export default function RoomPicker({
  price,
  currency,
  selectedCount,
  selectableCount,
  increment,
  decrement,
}: Props) {
  if (selectedCount === 0) {
    return (
      <NoneSelected price={price} currency={currency} onSelect={increment} />
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.minusButton]}
        onPress={decrement}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <View style={styles.priceAndCount}>
        <Text style={styles.count}>{selectedCount} × </Text>
        <Price amount={price} currency={currency} style={styles.price} />
      </View>
      {selectedCount < selectableCount ? (
        <TouchableOpacity
          style={[styles.button, styles.plusButton]}
          onPress={increment}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      ) : (
        <View style={[styles.button, styles.plusButton, styles.disabledButton]}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      )}
    </View>
  );
}
