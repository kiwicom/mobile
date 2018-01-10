// @flow

import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

import icon from './gallery-icon.png';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 2,
    backgroundColor: 'rgba(48, 54, 61, 0.6)',
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
    fontWeight: '600',
    color: '#ffffff',
    marginLeft: 5,
  },
});

type Props = {|
  count: number,
  onClick: () => void,
|};

export default function GalleryButton({ count, onClick }: Props) {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={styles.container}
      accessible={true}
      accessibilityLabel="Photo Gallery"
    >
      <Image source={icon} style={styles.icon} />
      <Text style={styles.count}>{count}</Text>
    </TouchableOpacity>
  );
}
