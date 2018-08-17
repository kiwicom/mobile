// @flow strict

import * as React from 'react';
import { HeaderButton } from '@kiwicom/mobile-navigation';
import { Icon } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +onPress: () => void,
  +iconColor: string,
|};

export default function MapHeaderButton(props: Props) {
  return (
    <HeaderButton.Right onPress={props.onPress}>
      <Icon name="map" size={24} color={props.iconColor} />
    </HeaderButton.Right>
  );
}

MapHeaderButton.defaultProps = {
  iconColor: defaultTokens.paletteProductNormal,
};
