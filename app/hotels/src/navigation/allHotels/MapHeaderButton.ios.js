// @flow strict

import * as React from 'react';
import { HeaderButton } from '@kiwicom/mobile-navigation';
import { TextIcon } from '@kiwicom/mobile-shared';
import type { TooltipsTranslationType } from '@kiwicom/mobile-localization';

type Props = {|
  +onPress: () => void,
  +icon: React.Element<typeof TextIcon>,
  +text: TooltipsTranslationType,
  +testID?: string,
|};

export default function MapHeaderButton(props: Props) {
  return (
    <HeaderButton.Right onPress={props.onPress} testID={props.testID}>
      {props.icon}
    </HeaderButton.Right>
  );
}
