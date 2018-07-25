// @flow

import * as React from 'react';
import { HeaderButton } from '@kiwicom/mobile-navigation';
import { Icon, Color } from '@kiwicom/mobile-shared';

type Props = {|
  +onPress: () => void,
|};

export default function MapHeaderButton(props: Props) {
  return (
    <HeaderButton.Right onPress={props.onPress}>
      <Icon name="map" size={24} color={Color.brand} />
    </HeaderButton.Right>
  );
}
