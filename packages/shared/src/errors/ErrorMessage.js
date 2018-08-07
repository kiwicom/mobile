// @flow strict

import * as React from 'react';
import { type TranslationType } from '@kiwicom/mobile-localization';

import Text from '../Text';
import Color from '../Color';
import StyleSheet from '../PlatformStyleSheet';
import type { StylePropType } from '../../types/Styles';

type Props = {|
  +children: TranslationType,
  +style?: StylePropType,
|};

export default function Message(props: Props): React.Node {
  return <Text style={[styles.error, props.style]}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: Color.red.normal,
  },
});
