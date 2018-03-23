// @flow

import * as React from 'react';
import { DummyTranslation } from '@kiwicom/react-native-app-translations';

type Props = {|
  // number of stars
  rating?: ?number,
|};

export default function Stars({ rating }: Props) {
  return <DummyTranslation id={'★'.repeat(rating || 0)} />;
}
