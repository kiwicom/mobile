// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import type { StylePropType, TranslationType } from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import Text from './Text';
import StyleSheet from './PlatformStyleSheet';

type Props = {|
  +translation: TranslationType,
  +style?: StylePropType,
  +textStyle?: StylePropType,
  +icon?: React.Node,
  +type?: 'neutral' | 'info',
  +circled?: boolean,
|};

/**
 * This badge automatically adapt width based on the text length inside so the
 * result looks like this:
 *
 * .----------.
 * | VERIFIED |
 * `----------`
 *
 * And it expands with long text:
 *
 * .-------------------------------------------------.
 * | UNVERIFIED with very long text to make it clear |
 * `-------------------------------------------------`
 */
export default function AdaptableBadge(props: Props) {
  return (
    <View
      style={[
        styles.container,
        props.style,
        props.type === 'info' && styles.info,
        props.circled === true && styles.circled,
      ]}
    >
      {props.icon}
      <Text style={[styles.text, props.textStyle]}>{props.translation}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    borderRadius: 2,
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: defaultTokens.paletteInkLight,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    color: defaultTokens.paletteWhite,
  },
  info: {
    backgroundColor: defaultTokens.paletteBlueNormal,
  },
  circled: {
    borderRadius: 11,
  },
});
