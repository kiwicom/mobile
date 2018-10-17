// @flow strict

import * as React from 'react';

import SelectButton from './SelectButton';
import IncrementDecrement from './IncrementDecrement';

type Price = {|
  +amount: number | null,
  +currency: string | null,
|};

type Props = {|
  +price: Price | null,
  +selectedCount: number,
  +selectableCount: number,
  +increment: () => void,
  +decrement: () => void,
  +testID?: string,
|};

export default function RoomPicker(props: Props) {
  if (props.price == null) {
    return null;
  }

  if (props.selectedCount === 0) {
    return (
      <SelectButton
        price={props.price}
        increment={props.increment}
        testID={props.testID}
      />
    );
  }

  return <IncrementDecrement {...props} />;
}
