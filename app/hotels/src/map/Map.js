// @flow

import idx from 'idx';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { MapView, type Region, type LatLng } from 'expo';
import { PriceMarker } from '@kiwicom/react-native-app-common';
import { getCenter, getBounds } from 'geolib';

export type Marker = {|
  id: string,
  coordinate: LatLng,
  data: {|
    price: number,
    name: string,
  |},
|};

type Props = {|
  currency: string,
  markers: Marker[],
  selectedMarker: Marker | null,
  onSelectMarker: string => void,
|};

type State = {|
  region: Region,
  mapIsReady: boolean,
|};

type MarkerPressEvent = {|
  nativeEvent: {
    action: 'marker-press',
    coordinate: LatLng,
    id: string, // id of the marker
    target: string,
  },
|};

const styles = StyleSheet.create({
  map: StyleSheet.absoluteFillObject,
});

const EDGE_PADDING = 1.3;

class Map extends React.Component<Props, State> {
  map: typeof MapView | null;

  constructor(props: Props) {
    super(props);

    this.state = {
      region: this.getRegion(props.markers),
      mapIsReady: false,
    };
  }

  componentWillReceiveProps = (nextProps: Props) => {
    if (this.props.selectedMarker !== nextProps.selectedMarker) {
      this.animateToCoordinate(nextProps.selectedMarker);
    }
  };

  getRegion = (markers: Marker[]) => {
    const coordinates = markers.map(marker => marker.coordinate);
    const boundaries = getBounds(coordinates);
    const topLeft = {
      latitude: boundaries.maxLat,
      longitude: boundaries.minLng,
    };
    const bottomRight = {
      latitude: boundaries.minLat,
      longitude: boundaries.maxLng,
    };

    const center = getCenter([topLeft, bottomRight]);

    // multiply delta by edge padding so markers for extremes fit into view as well
    const latitudeDelta =
      (boundaries.maxLat - boundaries.minLat) * EDGE_PADDING;
    const longitudeDelta =
      (boundaries.maxLng - boundaries.minLng) * EDGE_PADDING;

    return {
      latitude: parseFloat(center.latitude),
      longitude: parseFloat(center.longitude),
      latitudeDelta,
      longitudeDelta,
    };
  };

  storeMapReference = (map: React.Ref<typeof MapView> | null) => {
    this.map = map;
  };

  animateToCoordinate = (
    selectedMarker: Marker | null,
    duration: number = 400,
  ) => {
    if (!(this.map && selectedMarker)) {
      return;
    }

    this.map.animateToCoordinate(selectedMarker.coordinate, duration);
  };

  onMapReady = () => {
    if (!this.state.mapIsReady) {
      this.setState({ mapIsReady: true });
      this.animateToCoordinate(this.props.selectedMarker);
    }
  };

  onMarkerPress = (e: MarkerPressEvent) => {
    this.props.onSelectMarker(e.nativeEvent.id);
  };

  renderMarker = (marker: Marker) => {
    const { currency, selectedMarker } = this.props;
    const selectedMarkerId = idx(selectedMarker, _ => _.id);

    return (
      <MapView.Marker
        key={marker.id}
        identifier={marker.id}
        coordinate={marker.coordinate}
        onPress={this.onMarkerPress}
      >
        <PriceMarker
          price={marker.data.price}
          currency={currency}
          isSelected={marker.id === selectedMarkerId}
        />
      </MapView.Marker>
    );
  };

  render() {
    const { markers } = this.props;

    return (
      <MapView
        ref={this.storeMapReference}
        style={styles.map}
        initialRegion={this.state.region}
        onMapReady={this.onMapReady}
      >
        {markers.map(this.renderMarker)}
      </MapView>
    );
  }
}

export default Map;
