// @flow

import * as React from 'react';
import { DummyTranslation } from '@kiwicom/react-native-app-translations';
import type { StylePropType } from '@kiwicom/react-native-app-shared';

import Color from '../Color';
import Text from '../Text';
import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  children: string,
  style?: StylePropType,
|};

const styleSheet = StyleSheet.create({
  icon: {
    fontFamily: 'spfont',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
});

/**
 * These icons are font mobile icons from Fontastic. Usage:
 *
 * ```js
 * <TextIcon>&#xe0a3;</TextIcon>
 * ```
 *
 * We currently support only one font family: "spfont".
 */
function TextIcon(props: Props) {
  return (
    <Text style={[styleSheet.icon, props.style]}>
      <DummyTranslation id={props.children} />
    </Text>
  );
}

TextIcon.defaultProps = {
  style: {
    color: Color.grey.$600,
    fontSize: 20,
  },
};

export default TextIcon;
