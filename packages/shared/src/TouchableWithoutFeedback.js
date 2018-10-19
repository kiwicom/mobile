// @flow strict

import * as React from 'react';
import { TouchableWithoutFeedback as OriginalTouchableWithoutFeedback } from 'react-native'; // eslint-disable-line no-restricted-imports
import type { AccessibilityProps } from '@kiwicom/mobile-accessibility';

import { type StylePropType } from '../types/Styles';

type Props = {|
  +children: React.Node,
  +onPress: () => void,
  +disabled: boolean,
  +style?: StylePropType,
  +onLongPress?: () => void,
  +testID?: string,
  ...AccessibilityProps,
|};

export default function TouchableWithoutFeedback(props: Props) {
  return <OriginalTouchableWithoutFeedback {...props} />;
}

TouchableWithoutFeedback.defaultProps = {
  disabled: false,
  accessibilityTraits: 'button',
  accessibilityComponentType: 'button',
};
