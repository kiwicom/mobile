// @flow

import * as React from 'react';
import {
  Price as OriginalPrice,
  type StylePropType,
  Text,
} from '@kiwicom/mobile-shared';
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
  const style = isSelected ? undefined : textDisabled;
  if (price === null) {
    return (
      <Text style={style}>
        <Translation id="mmb.trip_services.insurance.selection.price.free" />
      </Text>
    );
  } else if (price && price.amount != null && price.currency != null) {
    return (
      <OriginalPrice
        amount={price.amount}
        currency={price.currency}
        style={style}
      />
    );
  }
  return (
    <Text style={style}>
      <Translation id="mmb.trip_services.insurance.selection.price.not_available" />
    </Text>
  );
};

export default Price;
