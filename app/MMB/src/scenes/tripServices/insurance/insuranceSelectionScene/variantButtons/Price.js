// @flow

import * as React from 'react';
import {
  Price as OriginalPrice,
  type StylePropType,
  Text,
  StyleSheet,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { Translation } from '@kiwicom/mobile-localization';

type PriceType = {|
  +amount: ?number,
  +currency: ?string,
|};

type Props = {|
  +price: ?PriceType,
  +isSelected: boolean,
  +textDisabled: StylePropType,
|};

const Price = (props: Props) => {
  const { price, isSelected, textDisabled } = props;
  const style = isSelected ? styles.price : [styles.price, textDisabled];
  if (price === null) {
    return (
      <Text style={style}>
        <Translation id="mmb.trip_services.insurance.selection.price.free" />
      </Text>
    );
  } else if (price && price.amount != null && price.currency != null) {
    return <OriginalPrice price={price} style={style} />;
  }
  return (
    <Text style={style}>
      <Translation id="mmb.trip_services.insurance.selection.price.not_available" />
    </Text>
  );
};

const styles = StyleSheet.create({
  price: {
    color: defaultTokens.paletteInkNormal,
    fontSize: 13,
  },
});

export default Price;
