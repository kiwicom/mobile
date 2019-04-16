// @flow strict

import * as React from 'react';
import {
  Translation,
  TranslationFragment,
  Price,
  type TranslationType,
} from '@kiwicom/mobile-shared';

type Props = {|
  +start: number,
  +end: number,
  +min: number,
  +max: number,
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
  if (start === min && end === max) {
    return <Translation id="hotels_search.filter.price_filter.price" />;
  }
  if (start === min) {
    return (
      <TranslationFragment>
        <Translation passThrough="< " />
        <Price amount={end * daysOfStay} currency={currency} />
      </TranslationFragment>
    );
  }
  if (end === max) {
    return (
      <TranslationFragment>
        <Translation passThrough="> " />
        <Price amount={start * daysOfStay} currency={currency} />
      </TranslationFragment>
    );
  }
  return (
    <TranslationFragment>
      <Price amount={start * daysOfStay} currency={currency} />
      <Translation passThrough=" - " />
      <Price amount={end * daysOfStay} currency={currency} />
    </TranslationFragment>
  );
}
