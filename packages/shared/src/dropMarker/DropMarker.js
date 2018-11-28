// @flow strict

import * as React from 'react';
import { Image } from 'react-native';

import dropmarker from './dropmarker.png';
import StyleSheet from '../PlatformStyleSheet';

/**
 * This drop marker is always pointing to the (0,0) coordinate. It's because
 * the marker itself is always absolutely shifted to the left-top corner as
 * shown on the following picture:
 *
 *  .-.
 *  \O/
 *   v
 *   .-------.
 *   |       |
 *   |   x   |
 *   |       |
 *   `-------`
 */
export default function DropMarker() {
  return (
    <Image source={dropmarker} style={styles.image} resizeMode="contain" />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 38,
    height: 38,
    position: 'absolute',
    start: -16,
    top: -27,
  },
});
