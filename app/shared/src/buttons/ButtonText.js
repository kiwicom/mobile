// @flow
import * as React from 'react';
import { Platform } from 'react-native';
import type { TranslationType } from '@kiwicom/react-native-app-localization';

import Text from '../Text';
import type { StylePropType } from '../../types/Styles';

type Props = {|
  text: TranslationType,
  style?: StylePropType,
|};

export default function ButtonText(props: Props) {
  return (
    <Text style={props.style}>
      {Platform.OS === 'android'
        ? // $FlowIssue: https://github.com/facebook/flow/issues/4756
          React.cloneElement(props.text, {
            textTransform: 'uppercase',
          })
        : props.text}
    </Text>
  );
}
