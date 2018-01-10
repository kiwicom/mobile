// @flow

import * as React from 'react';
import { Text } from 'react-native';

type Props = {|
  // number of stars
  rating?: ?number,
|};

export default function Stars({ rating }: Props) {
  return <Text>{'★'.repeat(rating || 0)}</Text>;
}
