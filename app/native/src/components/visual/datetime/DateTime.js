// @flow

import * as React from 'react';
import { Text } from 'react-native';

type Props = {|
  dateTime: ?string,
|};

export default function DateComponent({ dateTime }: Props): React.Node {
  if (!dateTime) {
    return null;
  }
  const date = new Date(dateTime);
  return <Text>{date.toUTCString()}</Text>;
}
