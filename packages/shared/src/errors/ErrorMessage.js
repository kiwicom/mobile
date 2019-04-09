// @flow strict

import * as React from 'react';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Text from '../Text';
import StyleSheet from '../PlatformStyleSheet';
import type { StylePropType } from '../../types/Styles';
import type { TranslationType } from '../../types/Translation';

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
