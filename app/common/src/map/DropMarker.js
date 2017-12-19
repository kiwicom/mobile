// @flow

import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Color from '../Color';

type Props = {|
  size?: number,
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
export default function DropMarker({ size = 50 }: Props) {
  return (
    <MaterialCommunityIcons
      name="map-marker"
      size={size}
      color={Color.brand}
      style={{ position: 'absolute', left: -size / 2, top: -size }}
    />
  );
}
