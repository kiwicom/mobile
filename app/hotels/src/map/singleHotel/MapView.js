// @flow

import * as React from 'react';
import idx from 'idx';
import { createFragmentContainer, graphql } from 'react-relay';
import { StyleSheet } from 'react-native';
import NativeMapView from 'react-native-maps';
import { DropMarker } from '@kiwicom/react-native-app-shared';

import type { MapView_hotel } from './__generated__/MapView_hotel.graphql';

type ContainerProps = {|
  hotel: any,
|};

type Props = {
  ...ContainerProps,
  hotel: ?MapView_hotel,
};

export class MapView extends React.Component<Props> {
  render() {
    const { hotel } = this.props;
    const latitude = idx(hotel, _ => _.coordinates.lat);
    const longitude = idx(hotel, _ => _.coordinates.lng);

    return (
      <NativeMapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <NativeMapView.Marker coordinate={{ latitude, longitude }}>
          <DropMarker size={50} />
        </NativeMapView.Marker>
      </NativeMapView>
    );
  }
}

export default (createFragmentContainer(
  MapView,
  graphql`
    fragment MapView_hotel on Hotel {
      coordinates {
        lat
        lng
      }
    }
  `,
): React.ComponentType<ContainerProps>);
