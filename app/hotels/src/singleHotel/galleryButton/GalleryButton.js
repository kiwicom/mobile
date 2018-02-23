// @flow

import * as React from 'react';
import { Image, View } from 'react-native';
import { StyleSheet, Text } from '@kiwicom/react-native-app-shared';

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
    lineHeight: 14,
    fontWeight: '600',
    color: '#ffffff',
    marginLeft: 5,
  },
});

type Props = {|
  count: number,
|};

export default function GalleryButton({ count }: Props) {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.count}>{count}</Text>
    </View>
  );
}
