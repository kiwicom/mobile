// @flow

import * as React from 'react';
// eslint-disable-next-line no-restricted-imports
import { Text as RNText } from 'react-native';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import StyleSheet from '../PlatformStyleSheet';
import iconsMap from './icons.json';

const sanitizeIconCharacter = (iconCharacter: string) => {
  if (/^E(?:.{3})$/.test(iconCharacter)) {
    return String.fromCharCode(parseInt(iconCharacter, 16));
  }
  return iconCharacter;
};

export default function Icon({ name, color = '#46515e', size = 'medium', style }: $FlowFixMe) {
  if (name == null) {
    return <RNText style={[styles[size], { color }, style]}>?</RNText>;
  }

  const icon = iconsMap[name];
  if (!icon) {
    return <RNText style={[styles[size], { color }, style]}>?</RNText>;
  }

  return (
    <RNText style={[styles.icon, styles[size], { color }, style]}>
      {sanitizeIconCharacter(icon.character)}
    </RNText>
  );
}

const getSizeStyle = (size: number): $Values<$FlowFixMe> => ({
  fontSize: size,
  width: size,
  height: size,
  lineHeight: size,
});

const styles = StyleSheet.create({
  icon: {
    fontFamily: 'orbit-icons',
    android: {
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
  },
  /* eslint-disable react-native/no-unused-styles */
  small: getSizeStyle(parseFloat(defaultTokens.widthIconSmall)),
  medium: getSizeStyle(parseFloat(defaultTokens.widthIconMedium)),
  large: getSizeStyle(parseFloat(defaultTokens.widthIconLarge)),
  /* eslint-enable */
});
