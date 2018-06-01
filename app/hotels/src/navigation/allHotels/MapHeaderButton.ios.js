// @flow

import * as React from 'react';
import { HeaderRightButton, Icon, Color } from '@kiwicom/mobile-shared';

type Props = {|
  +onPress: () => void,
|};

export default function MapHeaderButton(props: Props) {
  return (
    <HeaderRightButton onPress={props.onPress}>
      <Icon name="map" size={24} color={Color.brand} />
    </HeaderRightButton>
  );
}
