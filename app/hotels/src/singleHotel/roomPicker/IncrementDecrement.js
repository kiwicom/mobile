// @flow strict

import * as React from 'react';
import { View, Platform } from 'react-native';
import {
  Price,
  Text,
  StyleSheet,
  IncrementDecrementButtons,
  Color,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type PriceType = {|
  +amount: number | null,
  +currency: string | null,
|};

type Props = {|
  +price: PriceType | null,
  +selectedCount: number,
  +selectableCount: number,
  +increment: () => void,
  +decrement: () => void,
|};

export default function IncrementDecrement({
  decrement,
  selectedCount,
  price,
  increment,
  selectableCount,
}: Props) {
  const androidProps = Platform.select({
    ios: {},
    android: { textTransform: 'uppercase' },
  });
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
          <Price price={price} style={styles.price} />
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
    borderWidth: 1,
    height: 44,
    paddingHorizontal: 12,
    shadowColor: Color.dark.$10,
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
