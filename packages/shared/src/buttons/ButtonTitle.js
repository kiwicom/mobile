// @flow

import * as React from 'react';
import { Platform } from 'react-native';

import Text from '../Text';
import type { TranslationType } from '../../types/Translation';
import type { StylePropType } from '../../types/Styles';

type Props = {|
  text: TranslationType,
  style?: StylePropType,
|};

export default function ButtonTitle(props: Props) {
  const children =
    Platform.OS === 'android'
      ? React.cloneElement(props.text, {
          textTransform: 'uppercase',
        })
      : props.text;

  return <Text style={[{ fontWeight: '500' }, props.style]}>{children}</Text>;
}
