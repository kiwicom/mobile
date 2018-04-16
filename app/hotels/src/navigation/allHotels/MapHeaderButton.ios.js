// @flow

import * as React from 'react';
import { HeaderRightButton } from '@kiwicom/mobile-shared';

type Props = {|
  onPress: () => void,
|};

export default function MapHeaderButton(props: Props) {
  return <HeaderRightButton onPress={props.onPress} />;
}
