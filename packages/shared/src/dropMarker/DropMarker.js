// @flow strict

import * as React from 'react';
import { Image } from 'react-native';

import dropmarker from './images/dropmarker.png';
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
  return <Image source={dropmarker} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
  },
});
