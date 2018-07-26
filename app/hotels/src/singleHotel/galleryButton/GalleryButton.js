// @flow

import * as React from 'react';
import { Image, View } from 'react-native';
import {
  StyleSheet,
  Text,
  Color,
  type StylePropType,
} from '@kiwicom/mobile-shared';
import idx from 'idx';
import { Translation } from '@kiwicom/mobile-localization';

import icon from './gallery-icon.png';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 2,
    backgroundColor: Color.grey.transparent.outerSpace.$60,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  icon: {
    width: 14,
    height: 14,
  },
  count: {
    backgroundColor: 'transparent',
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '600',
    color: Color.white,
    marginStart: 5,
  },
});

type Props = {|
  count: number,
  style?: {
    container?: StylePropType,
    icon?: StylePropType,
    text?: StylePropType,
  },
|};

export default function GalleryButton({ count, style }: Props) {
  const containerStyle = idx(style, _ => _.container) || null;
  const iconStyle = idx(style, _ => _.icon) || null;
  const textStyle = idx(style, _ => _.text) || null;
  return (
    <View style={[styles.container, containerStyle]}>
      <Image source={icon} style={[styles.icon, iconStyle]} />
      <Text style={[styles.count, textStyle]}>
        <Translation passThrough={count} />
      </Text>
    </View>
  );
}
