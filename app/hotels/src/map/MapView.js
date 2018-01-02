// @flow

import idx from 'idx';
import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { StyleSheet } from 'react-native';
import { MapView, type Region, type LatLng } from 'expo';
import { orderByDistance, getBounds } from 'geolib';

import PriceMarker from './PriceMarker';
import type { MapView as MapViewData } from './__generated__/MapView.graphql';

type Props = {|
  data: MapViewData,
  selectedIndex: number,
  onSelectMarker: string => void,
|};

type State = {|
  region: Region,
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

class Map extends React.Component<Props, State> {
  map: typeof MapView | null;

  constructor(props: Props) {
    super(props);

    this.state = {
      region: this.getRegion(props),
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

  getDelta = (selectedCoordinate, coordinates) => {
    const distances = orderByDistance(selectedCoordinate, coordinates);

    if (coordinates.length === 1) {
      return {
        longitudeDelta: 0.005,
        latitudeDelta: 0.005,
      };
    }

    // Use median to filter out extreme positions to compute more appropriate region
    const lowMiddle = Math.floor((distances.length - 1) / 2);
    const highMiddle = Math.ceil((distances.length - 1) / 2);
    const median =
      (distances[lowMiddle].distance + distances[highMiddle].distance) / 2;
    const validDistances =
      distances.length > 2
        ? distances.filter(({ distance }) => median * 1.5 > distance)
        : distances;

    const coordsByDistance = validDistances
      .map(({ key }) => coordinates[parseInt(key)])
      .filter(Boolean);
    const boundaries = getBounds(coordsByDistance);
    const latitudeDelta = boundaries.maxLat - boundaries.minLat;
    const longitudeDelta = boundaries.maxLng - boundaries.minLng;

    return { longitudeDelta, latitudeDelta };
  };

  getRegion = (props: Props) => {
    const { data: hotels, selectedIndex } = props;
    const selectedHotel = hotels[selectedIndex];

    if (!selectedHotel) {
      return;
    }

    const coordinate = this.getCoordinate(selectedHotel);

    if (!coordinate) {
      return;
    }

    const delta = this.getDelta(coordinate, this.getCoordinates(hotels));

    return {
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
      latitudeDelta: delta.latitudeDelta,
      longitudeDelta: delta.longitudeDelta,
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
