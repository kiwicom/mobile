// @flow

import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';

type Props = {|
  children: React.Node,
  density?: 'airy' | 'compact',
  onPress?: Function,
  separator?: boolean,
  additionalStyles?: Object,
|};

const style = ({
  density = 'compact',
  separator = true,
  additionalStyles = {},
}: Props) => {
  const PADDING_VERTICAL = density === 'compact' ? 10 : 20;
  const PADDING_HORIZONTAL = 0;

  if (separator) {
    additionalStyles = {
      ...additionalStyles,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    };
  }

  return {
    backgroundColor: '#fff',
    paddingVertical: PADDING_VERTICAL,
    paddingHorizontal: PADDING_HORIZONTAL,
    ...additionalStyles,
  };
};

export default function SimpleCard(props: Props) {
  const Card = <View style={style(props)}>{props.children}</View>;

  if (props.onPress) {
    return <TouchableOpacity onPress={props.onPress}>{Card}</TouchableOpacity>;
  } else {
    return Card;
  }
}
