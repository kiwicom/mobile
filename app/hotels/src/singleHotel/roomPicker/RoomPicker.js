// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Price,
  Text,
  StyleSheet,
  TouchableItem,
  ButtonText,
} from '@kiwicom/react-native-app-shared';

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
      <TouchableItem
        style={[
          styles.container,
          styles.borderRadiusLeft,
          styles.borderRadiusRight,
        ]}
        onPress={increment}
      >
        <View style={styles.row}>
          <ButtonText style={styles.text} text="Select" />
          <View style={styles.row} />
          <Price amount={price} currency={currency} style={styles.text} />
        </View>
      </TouchableItem>
    );
  }

  return (
    <View style={styles.row}>
      <MinusButton onPress={decrement} />

      <View style={[styles.container, styles.row, styles.priceAndCount]}>
        <Text style={[styles.text, styles.count]}>{selectedCount} × </Text>
        <Price amount={price} currency={currency} style={styles.text} />
      </View>

      <PlusButton
        onPress={increment}
        disabled={selectedCount >= selectableCount}
      />
    </View>
  );
}

const MinusButton = ({ onPress }) => {
  return (
    <TouchableItem
      style={[styles.button, styles.borderRadiusLeft]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>-</Text>
    </TouchableItem>
  );
};

const PlusButton = ({ disabled, onPress }) => {
  let disabledStyle;
  if (disabled === true) {
    disabledStyle = styles.disabledButton;
  }

  return (
    <TouchableItem
      style={[styles.button, styles.borderRadiusRight, disabledStyle]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>+</Text>
    </TouchableItem>
  );
};

const radius = 3;
const styles = StyleSheet.create({
  row: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  container: {
    backgroundColor: 'rgba(0, 151, 169, 0.13)',
    height: 44,
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  text: {
    color: '#0097a9',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#0097a9',
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.2,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
  },
  priceAndCount: {
    justifyContent: 'center',
  },
  count: {
    fontWeight: 'bold',
  },
  borderRadiusLeft: {
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
  },
  borderRadiusRight: {
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius,
  },
});
