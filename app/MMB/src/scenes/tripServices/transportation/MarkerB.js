// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import TransportationMapMarker from './TransportationMapMarker';

type Props = {|
  +coordinate: ?{|
    +latitude: number,
    +longitude: number,
  |},
|};

export default function MarkerB(props: Props) {
  return (
    <TransportationMapMarker
      coordinate={props.coordinate}
      code="k"
      color={defaultTokens.colorAlertIconWarning}
    />
  );
}
