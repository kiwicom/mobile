// @flow strict

import * as React from 'react';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import StyleSheet from './PlatformStyleSheet';
import Icon from './icons/Icon';

type Props = {|
  +size?: number,
  +color?: string,
|};

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
export default function DropMarker({
  size = 50,
  color = defaultTokens.paletteProductNormal,
}: Props) {
  const styles = createStyles(size);
  return <Icon name="place" size={size} color={color} style={styles.icon} />;
}

const createStyles = (size: number) =>
  StyleSheet.create({
    icon: {
      ios: {
        position: 'absolute',
        left: -size / 2,
        top: -size,
      },
      android: {},
    },
  });
