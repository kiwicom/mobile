// @flow strict

import * as React from 'react';
import { HeaderButton } from '@kiwicom/mobile-navigation';
import { TextIcon } from '@kiwicom/mobile-shared';

type Props = {|
  +onPress: () => void,
  +icon: React.Element<typeof TextIcon>,
  +testID?: string,
|};

export default function MapHeaderButton(props: Props) {
  return (
    <HeaderButton.Right onPress={props.onPress} testID={props.testID}>
      {props.icon}
    </HeaderButton.Right>
  );
}
