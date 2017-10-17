// @flow

import * as React from 'react';
import { Text } from 'react-native';

export default function DateComponent({
  dateTime,
}: {
  dateTime: ?string,
}): React.Node {
  if (!dateTime) {
    return null;
  }
  const date = new Date(dateTime);
  return <Text>{date.toISOString().substr(0, 10)}</Text>;
}
