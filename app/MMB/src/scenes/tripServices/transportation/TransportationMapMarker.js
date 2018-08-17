// @flow

import * as React from 'react';
import MapView from 'react-native-maps';
import { PositionMarker } from '@kiwicom/mobile-shared';

type Props = {|
  +coordinate: ?{|
    +latitude: number,
    +longitude: number,
  |},
  +color?: string,
  +code: string,
|};

export default function TransportationMapMarker({
  coordinate,
  color,
  code,
}: Props) {
  if (coordinate) {
    return (
      <MapView.Marker coordinate={coordinate}>
        <PositionMarker code={code} color={color} />
      </MapView.Marker>
    );
  }
  return null;
}
