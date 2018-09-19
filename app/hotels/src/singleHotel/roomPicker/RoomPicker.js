// @flow strict

import * as React from 'react';

import SelectButton from './SelectButton';
import IncrementDecrement from './IncrementDecrement';

type Props = {|
  +price: number | null,
  +currency: string | null,
  +selectedCount: number,
  +selectableCount: number,
  +increment: () => void,
  +decrement: () => void,
|};

export default function RoomPicker(props: Props) {
  if (props.price == null && props.currency == null) {
    return null;
  }

  if (props.selectedCount === 0) {
    return (
      <SelectButton
        price={props.price}
        currency={props.currency}
        increment={props.increment}
      />
    );
  }

  return <IncrementDecrement {...props} />;
}
