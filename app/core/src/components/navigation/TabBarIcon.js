// @flow

import * as React from 'react';
import { Text } from 'react-native';

type Props = {|
  type: string,
  focused: boolean,
  tintColor: string,
|};

export default function TabBarIcon({ type, focused, tintColor }: Props) {
  const style = {};
  if (focused === true) {
    style.color = tintColor;
  }
  return <Text style={style}>{type}</Text>;
}
