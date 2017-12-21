// @flow

import idx from 'idx';
import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { StyleSheet } from 'react-native';
import { MapView, type Region, type LatLng } from 'expo';
import { getCenter, getBounds } from 'geolib';

import PriceMarker from './PriceMarker';
import type { MapView as MapViewData } from './__generated__/MapView.graphql';

type Props = {|
  data: MapViewData,
  selectedIndex: number,
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
      region: this.getRegion(props.data),
      mapIsReady: false,
    };
  }

  componentWillReceiveProps = (nextProps: Props) => {
    if (this.props.selectedIndex !== nextProps.selectedIndex) {
      this.animateToCoordinate(nextProps.selectedIndex);
    }
  };

  getCoordinate = (hotel: Object) => {
    const coordinate = idx(hotel, _ => _.node.hotel.coordinates);

    if (coordinate) {
      return {
        latitude: coordinate.lat,
        longitude: coordinate.lng,
      };
    }

    return null;
  };

  getCoordinates = (hotels: MapViewData) => {
    return hotels.map(this.getCoordinate).filter(Boolean);
  };

  getRegion = (hotels: MapViewData) => {
    const coordinates = this.getCoordinates(hotels);

    if (!coordinates.length) {
      return null;
    }

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

    // multiply delta by edge padding so hotels for extremes fit into view as well
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

  animateToCoordinate = (selectedIndex: number, duration: number = 400) => {
    if (!Number.isFinite(selectedIndex)) {
      return;
    }

    const hotel = this.props.data[selectedIndex];

    if (!hotel) {
      return;
    }

    const coordinate = this.getCoordinate(hotel);

    if (!(this.map && coordinate)) {
      return;
    }

    this.map.animateToCoordinate(coordinate, duration);
  };

  onMapReady = () => {
    if (!this.state.mapIsReady) {
      this.setState({ mapIsReady: true });
      this.animateToCoordinate(this.props.selectedIndex);
    }
  };

  onMarkerPress = (e: MarkerPressEvent) => {
    this.props.onSelectMarker(e.nativeEvent.id);
  };

  renderHotelMarker = (hotel: Object, index: number) => {
    const { selectedIndex } = this.props;
    const price = idx(hotel, _ => _.node.price);
    const id = idx(hotel, _ => _.node.id);
    const coordinate = this.getCoordinate(hotel);

    return (
      <MapView.Marker
        key={id}
        identifier={id}
        coordinate={coordinate}
        onPress={this.onMarkerPress}
      >
        <PriceMarker data={price} isSelected={index === selectedIndex} />
      </MapView.Marker>
    );
  };

  render() {
    const { data } = this.props;

    return (
      <MapView
        ref={this.storeMapReference}
        style={styles.map}
        initialRegion={this.state.region}
        onMapReady={this.onMapReady}
      >
        {data.map(this.renderHotelMarker)}
      </MapView>
    );
  }
}

export default createFragmentContainer(
  Map,
  graphql`
    fragment MapView on HotelAvailabilityEdge @relay(plural: true) {
      node {
        id
        price {
          ...PriceMarker
        }
        hotel {
          coordinates {
            lat
            lng
          }
        }
      }
    }
  `,
);
