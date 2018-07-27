// @flow strict

import * as React from 'react';
import { Switch as OriginalSwitch } from 'react-native'; // eslint-disable-line no-restricted-imports

import Color from '../Color';

type Props = {|
  +value: boolean,
  +onValueChange: (value: boolean) => void,
|};

export default function Switch(props: Props) {
  return (
    <OriginalSwitch
      onValueChange={props.onValueChange}
      value={props.value}
      onTintColor={Color.brand}
    />
  );
}
