// @flow

import * as React from 'react';
import { Text } from 'react-native';

type Props = {
  minutes: ?number,
};

export default function Duration({ minutes }: Props) {
  if (!minutes || minutes < 0) {
    minutes = 0;
  }

  const hours = Math.floor(minutes / 60);
  minutes = minutes % 60;

  return (
    <Text>
      {hours}h {minutes}m
    </Text>
  );
}
