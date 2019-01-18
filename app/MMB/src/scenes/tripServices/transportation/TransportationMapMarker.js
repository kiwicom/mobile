// @flow strict

import * as React from 'react';
import MapView from 'react-native-maps';
import { Icon, StyleSheet } from '@kiwicom/mobile-shared';

type Props = {|
  +coordinate: ?{|
    +latitude: number,
    +longitude: number,
  |},
  +icon: React.Element<typeof Icon>,
|};

export default function TransportationMapMarker(props: Props) {
  if (props.coordinate != null) {
    const icon = React.cloneElement(props.icon, {
      style: styles.icon,
    });
    return (
      <MapView.Marker coordinate={props.coordinate}>{icon}</MapView.Marker>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  icon: {
    ios: {
      position: 'absolute',
      left: -24 / 2,
      top: -24,
    },
  },
});
