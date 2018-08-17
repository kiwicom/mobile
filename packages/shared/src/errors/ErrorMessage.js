// @flow strict

import * as React from 'react';
import { type TranslationType } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Text from '../Text';
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
    color: defaultTokens.paletteRedNormal,
  },
});
