// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  TouchableItem,
  type StylePropType,
} from '@kiwicom/react-native-app-shared';

type Props = {|
  children: React.Node,
  density?: 'airy' | 'compact',
  onPress?: Function,
  separator?: boolean,
  additionalStyles?: StylePropType,
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
    return <TouchableItem onPress={props.onPress}>{Card}</TouchableItem>;
  } else {
    return Card;
  }
}
