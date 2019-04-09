// @flow strict

import * as React from 'react';
import { View, Platform } from 'react-native';
import {
  Price,
  Text,
  StyleSheet,
  IncrementDecrementButtons,
  Translation,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type PriceType = {|
  +amount: string | null,
  +currency: string | null,
|};

type Props = {|
  +price: PriceType | null,
  +selectedCount: number,
  +selectableCount: number,
  +increment: () => void,
  +decrement: () => void,
  +testID?: string,
  +disabled: boolean,
|};

export default function IncrementDecrement({
  decrement,
  selectedCount,
  price,
  increment,
  selectableCount,
  disabled,
}: Props) {
  const androidProps = Platform.select({
    ios: {},
    android: { textTransform: 'uppercase' },
  });
  const disableDecrement = disabled && selectedCount <= 0;
  const disableIncrement = disabled;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.priceContainer}>
          <Text style={styles.countText}>
            <Translation
              id="single_hotel.increment_decrement.count"
              {...androidProps}
            />
          </Text>
          <Price
            amount={price?.amount}
            currency={price?.currency}
            style={styles.price}
          />
        </View>

        <View style={styles.countContainer}>
          <IncrementDecrementButtons
            min={0}
            max={selectableCount}
            onIncrement={increment}
            onDecrement={decrement}
            number={selectedCount}
            showNumber={true}
            numberStyle={styles.roomCount}
            disableDecrement={disableDecrement}
            disableIncrement={disableIncrement}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 6,
    borderColor: defaultTokens.paletteInkLighter,
    borderWidth: 0.5,
    backgroundColor: defaultTokens.paletteWhite,
    height: 44,
    paddingHorizontal: 12,
    shadowColor: defaultTokens.paletteInkDark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    android: {
      elevation: 1,
    },
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceContainer: {
    paddingTop: 5,
  },
  countText: {
    fontWeight: '800',
  },
  price: {
    fontSize: 12,
    color: defaultTokens.colorTextSecondary,
  },
  roomCount: {
    marginHorizontal: 10,
  },
  countContainer: {
    paddingTop: 8,
  },
});
