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
  +testID?: string,
  +disabled: boolean,
|};

export default function SelectButton({
  increment,
  price,
  testID,
  disabled,
}: Props) {
  return (
    <Touchable
      style={[styles.container, disabled && styles.containerDisabled]}
      onPress={increment}
      delayPressIn={40}
      testID={testID}
    >
      <View style={styles.row}>
        <ButtonTitle
          style={styles.text}
          text={<Translation id="single_hotel.room_picker.select" />}
        />
        <View style={styles.row} />
        <Price
          amount={price.amount}
          currency={price.currency}
          style={styles.price}
        />
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
  containerDisabled: {
    backgroundColor: defaultTokens.paletteCloudLight,
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
