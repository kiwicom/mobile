// @flow

import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';

type Props = {
  children: React.Node,
  density?: 'airy' | 'compact',
  onPress?: Function,
  separator?: boolean,
};

const style = ({ density = 'compact', separator = true }: Props) => {
  const PADDING_TOP_BOTTOM = density === 'compact' ? 10 : 20;
  const PADDING_LEFT_RIGHT = 0;
  let additionalStyles = {};

  if (separator) {
    additionalStyles = {
      ...additionalStyles,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    };
  }

  return {
    backgroundColor: '#fff',
    paddingTop: PADDING_TOP_BOTTOM,
    paddingBottom: PADDING_TOP_BOTTOM,
    paddingLeft: PADDING_LEFT_RIGHT,
    paddingRight: PADDING_LEFT_RIGHT,
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
