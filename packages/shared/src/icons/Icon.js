// @flow strict

import * as React from 'react';
import { Icon as UniversalIcon } from '@kiwicom/universal-components';

type Props = {|
  +name: string,
  +size?: 'small' | 'medium' | 'large',
  +color?: string,
|};

export default function Icon(props: Props) {
  return <UniversalIcon {...props} />;
}
