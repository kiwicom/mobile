// @flow

import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function DateComponent({
  dateTime,
}: {
  dateTime: ?string,
}): React.Node {
  if (!dateTime) {
    return null;
  }
  const date = new Date(dateTime);
  return <Text style={style.text}>{date.toISOString().substr(0, 10)}</Text>;
}

const style = StyleSheet.create({
  text: {
    color: '#888',
  },
});
