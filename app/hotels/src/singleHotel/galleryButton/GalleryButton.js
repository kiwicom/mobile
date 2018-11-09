// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  StyleSheet,
  Text,
  Color,
  type StylePropType,
  TextIcon,
} from '@kiwicom/mobile-shared';
import { Translation } from '@kiwicom/mobile-localization';
import { defaultTokens } from '@kiwicom/mobile-orbit';

type Props = {|
  +count: number | null,
  +style?: {
    +container?: StylePropType,
    +icon?: StylePropType,
    +text?: StylePropType,
  },
|};

export default function GalleryButton({ count, style }: Props) {
  const containerStyle = style?.container ?? null;
  const iconStyle = style?.icon ?? null;
  const textStyle = style?.text ?? null;
  return (
    <View style={[styles.container, containerStyle]}>
      <TextIcon code="&#xe064;" style={[styles.icon, iconStyle]} />
      {count !== null && (
        <Text style={[styles.count, textStyle]}>
          <Translation passThrough={count} />
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 2,
    backgroundColor: Color.grey.transparent.outerSpace.$54,
    padding: 4,
    alignItems: 'center',
  },
  icon: {
    color: defaultTokens.paletteWhite,
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
