// @flow

import * as React from 'react';
import { Icon, StyleSheet } from '@kiwicom/react-native-app-shared';

import Color from '../Color';

type Props = {|
  size?: number,
|};

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
export default function DropMarker({ size = 50 }: Props) {
  const styles = createStyles(size);
  return (
    <Icon name="place" size={size} color={Color.brand} style={styles.icon} />
  );
}
