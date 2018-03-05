// @flow
import * as React from 'react';
import { Platform } from 'react-native';

import Text from '../Text';
import type { StylePropType } from '../../types/Styles';

type Props = {|
  text: string,
  style?: StylePropType,
|};

export default function ButtonText(props: Props) {
  return (
    <Text style={props.style}>
      {Platform.OS === 'android' ? props.text.toUpperCase() : props.text}
    </Text>
  );
}
