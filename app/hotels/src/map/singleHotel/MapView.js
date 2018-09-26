// @flow

import * as React from 'react';
import idx from 'idx';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { DropMarker, StyleSheet } from '@kiwicom/mobile-shared';
import { Mapbox } from '@kiwicom/mobile-mapbox';

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
      <Mapbox.MapView
        styleURL={Mapbox.StyleURL.Street}
        zoomLevel={15}
        centerCoordinate={[longitude, latitude]}
        style={styles.mapview}
      >
        <Mapbox.PointAnnotation
          id="hotel-marker"
          coordinate={[longitude, latitude]}
        >
          <DropMarker size={50} />
        </Mapbox.PointAnnotation>
      </Mapbox.MapView>
    );
  }
}

const styles = StyleSheet.create({
  mapview: { flex: 1 },
});

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
