// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  Price,
  Text,
  StyleSheet,
  Touchable,
  ButtonTitle,
  Color,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = $ReadOnly<{|
  +price: number | null,
  +currency: string | null,
  +selectedCount: number,
  +selectableCount: number,
  +increment: () => void,
  +decrement: () => void,
|}>;

export default function RoomPicker({
  price,
  currency,
  selectedCount,
  selectableCount,
  increment,
  decrement,
}: Props) {
  if (price == null && currency == null) {
    return null;
  }

  if (selectedCount === 0) {
    return (
      <Touchable
        style={[
          styles.container,
          styles.borderRadiusLeft,
          styles.borderRadiusRight,
        ]}
        onPress={increment}
      >
        <View style={styles.row}>
          <ButtonTitle
            style={styles.text}
            text={<Translation id="single_hotel.room_picker.select" />}
          />
          <View style={styles.row} />
          <Price amount={price} currency={currency} style={styles.text} />
        </View>
      </Touchable>
    );
  }

  return (
    <View style={styles.row}>
      <MinusButton onPress={decrement} />

      <View style={[styles.container, styles.row, styles.priceAndCount]}>
        <Text style={[styles.text, styles.count]}>
          <Translation passThrough={`${selectedCount} × `} />
        </Text>
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
    <Touchable
      style={[styles.button, styles.borderRadiusLeft]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>
        <Translation passThrough="-" />
      </Text>
    </Touchable>
  );
};

const PlusButton = ({ disabled, onPress }) => {
  let disabledStyle;
  if (disabled === true) {
    disabledStyle = styles.disabledButton;
  }

  return (
    <Touchable
      style={[styles.button, styles.borderRadiusRight, disabledStyle]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>
        <Translation passThrough="+" />
      </Text>
    </Touchable>
  );
};

const radius = 6;
const styles = StyleSheet.create({
  row: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  container: {
    backgroundColor: Color.blue.jaggedIce, // TODO: Consult designer
    height: 44,
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  text: {
    color: Color.brandDark, // TODO: Consult designer
    fontSize: 14,
  },
  button: {
    backgroundColor: defaultTokens.paletteProductNormal,
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
    color: defaultTokens.paletteWhite,
  },
  priceAndCount: {
    justifyContent: 'center',
  },
  count: {
    fontWeight: 'bold',
  },
  borderRadiusLeft: {
    borderTopStartRadius: radius,
    borderBottomStartRadius: radius,
  },
  borderRadiusRight: {
    borderTopEndRadius: radius,
    borderBottomEndRadius: radius,
  },
});
