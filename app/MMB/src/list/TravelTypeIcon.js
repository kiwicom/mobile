// @flow

import * as React from 'react';
import { TextIcon } from '@kiwicom/mobile-shared';

type Props = {|
  type: string,
|};

export default function TravelTypeIcon(props: Props) {
  switch (props.type) {
    case 'RETURN':
      return <TextIcon>s</TextIcon>;
    case 'ONE_WAY':
      return <TextIcon>&#xe0A9;</TextIcon>;
    case 'MULTICITY':
      return <TextIcon>{'>'}</TextIcon>;
    default:
      return null;
  }
}
