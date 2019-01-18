// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/mobile-orbit';
import { Icon } from '@kiwicom/mobile-shared';

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
      icon={
        <Icon name="location-b" color={defaultTokens.colorAlertIconWarning} />
      }
    />
  );
}
