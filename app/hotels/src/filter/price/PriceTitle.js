// @flow strict

import * as React from 'react';
import {
  Translation,
  TranslationFragment,
  Price,
  type TranslationType,
} from '@kiwicom/mobile-shared';
import { Decimal } from 'decimal.js-light';

type Props = {|
  +start: Decimal,
  +end: Decimal,
  +min: Decimal,
  +max: Decimal,
  +currency: string,
  +daysOfStay: number,
|};

export default function PriceTitle({
  start,
  min,
  end,
  max,
  currency,
  daysOfStay,
}: Props): TranslationType {
  if (start.equals(min) && end.equals(max)) {
    // No filter set
    return <Translation id="hotels_search.filter.price_filter.price" />;
  }
  if (start.equals(min)) {
    // Only max price filter
    return (
      <TranslationFragment>
        <Translation passThrough="< " />
        <Price amount={end.times(daysOfStay)} currency={currency} />
      </TranslationFragment>
    );
  }
  if (end.equals(max)) {
    // Only min price filter
    return (
      <TranslationFragment>
        <Translation passThrough="> " />
        <Price amount={start.times(daysOfStay)} currency={currency} />
      </TranslationFragment>
    );
  }
  // Max and min set
  return (
    <TranslationFragment>
      <Price amount={start.times(daysOfStay)} currency={currency} />
      <Translation passThrough=" - " />
      <Price amount={end.times(daysOfStay)} currency={currency} />
    </TranslationFragment>
  );
}
