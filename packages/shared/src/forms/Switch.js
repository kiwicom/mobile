// @flow strict

import * as React from 'react';
import { Switch as OriginalSwitch } from 'react-native'; // eslint-disable-line no-restricted-imports
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +value: boolean,
  +onValueChange: (value: boolean) => void,
|};

export default function Switch(props: Props) {
  return (
    <OriginalSwitch
      onValueChange={props.onValueChange}
      value={props.value}
      onTintColor={defaultTokens.paletteProductNormal}
    />
  );
}
