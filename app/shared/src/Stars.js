// @flow

import * as React from 'react';
import { Translation } from '@kiwicom/mobile-localization';

type Props = {|
  // number of stars
  rating?: ?number,
|};

export default function Stars({ rating }: Props) {
  return <Translation passThrough={'★'.repeat(rating || 0)} />;
}
