// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  Price,
  StyleSheet,
  Touchable,
  ButtonTitle,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type PriceType = {|
  +amount: number | null,
  +currency: string | null,
|};

type Props = {|
  +price: PriceType,
  +increment: () => void,
|};

export default function SelectButton({ increment, price }: Props) {
  return (
    <Touchable style={styles.container} onPress={increment} delayPressIn={40}>
      <View style={styles.row}>
        <ButtonTitle
          style={styles.text}
          text={<Translation id="single_hotel.room_picker.select" />}
        />
        <View style={styles.row} />
        <Price price={price} style={styles.price} />
      </View>
    </Touchable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  container: {
    backgroundColor: defaultTokens.paletteProductLight,
    height: 44,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  text: {
    color: defaultTokens.paletteProductNormal,
    fontSize: 16,
    fontWeight: '800',
    alignSelf: 'center',
  },
  price: {
    color: defaultTokens.paletteProductNormal,
    fontSize: 14,
    alignSelf: 'center',
  },
});
