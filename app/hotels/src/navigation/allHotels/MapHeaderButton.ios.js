// @flow strict

import * as React from 'react';
import { HeaderButton } from '@kiwicom/mobile-navigation';
import { TextIcon } from '@kiwicom/mobile-shared';

type Props = {|
  +onPress: () => void,
  +icon: React.Element<typeof TextIcon>,
|};

export default function MapHeaderButton(props: Props) {
  return (
    <HeaderButton.Right onPress={props.onPress}>
      {props.icon}
    </HeaderButton.Right>
  );
}
