// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  Text,
  Color,
  type StylePropType,
  Icon,
  Translation,
} from '@kiwicom/mobile-shared';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +count: number | null,
  +style?: {
    +container?: StylePropType,
    +text?: StylePropType,
  },
  +iconSize?: 'small' | 'medium' | 'large',
|};

export default function GalleryButton({ count, style, iconSize }: Props) {
  const containerStyle = style?.container ?? null;
  const textStyle = style?.text ?? null;
  return (
    <View style={[styles.container, containerStyle]}>
      <Icon name="gallery" color={defaultTokens.paletteWhite} size={iconSize} />
      {count !== null && (
        <Text style={[styles.count, textStyle]}>
          <Translation passThrough={count} />
        </Text>
      )}
    </View>
  );
}

GalleryButton.defaultProps = {
  iconSize: 'medium',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 2,
    backgroundColor: Color.grey.transparent.outerSpace.$54,
    padding: 4,
    alignItems: 'center',
  },
  count: {
    backgroundColor: 'transparent',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '600',
    color: defaultTokens.paletteWhite,
    marginStart: 5,
  },
});
