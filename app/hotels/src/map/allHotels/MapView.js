// @flow

import idx from 'idx';
import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import MapView from 'react-native-maps';
import { orderByDistance, getBounds } from 'geolib';
import { StyleSheet } from '@kiwicom/react-native-app-shared';

import PriceMarker from './PriceMarker';
import type { MapView as MapViewData } from './__generated__/MapView.graphql';

type Props = {|
  data: MapViewData,
  selectedIndex: number,
  onSelectMarker: string => void,
|};

type State = {|
  region: ?{|
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number,
  |},
|};

type MarkerPressEvent = {|
  nativeEvent: {
    action: 'marker-press',
    coordinate: LatLng,
    id: string, // id of the marker
    target: string,
  },
|};

type LatLng = {|
  longitude: number,
  latitude: number,
|};

const NO_OF_MARKERS_IN_REGION = 15;

const styles = StyleSheet.create({
  map: StyleSheet.absoluteFillObject,
});

export class Map extends React.Component<Props, State> {
  map: typeof MapView | null;
  markers: { [number]: typeof MapView.Marker | null };

  constructor(props: Props) {
    super(props);

    this.markers = {};
    this.state = {
      region: this.getRegion(props),
    };
  }

  componentDidMount = () => {
    const { selectedIndex } = this.props;
    // it's necessary to call showCallout to bring selected marker to foreground
    this.markers[selectedIndex] && this.markers[selectedIndex].showCallout();
  };

  componentWillReceiveProps = (nextProps: Props) => {
    if (this.props.selectedIndex !== nextProps.selectedIndex) {
      this.animateToCoordinate(nextProps.selectedIndex);
      this.markers[nextProps.selectedIndex] &&
        this.markers[nextProps.selectedIndex].showCallout();
    }
  };

  getCoordinate = (hotel: Object): LatLng | null => {
    const coordinate = idx(hotel, _ => _.node.hotel.coordinates);

    if (coordinate) {
      return {
        latitude: coordinate.lat,
        longitude: coordinate.lng,
      };
    }

    return null;
  };

  getCoordinates = (hotels: MapViewData): LatLng[] => {
    return hotels.map(this.getCoordinate).filter(Boolean);
  };

  getDelta = (selectedCoordinate: LatLng, coordinates: LatLng[]) => {
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
        ? distances
            .filter(({ distance }) => median * 1.5 > distance)
            .slice(0, NO_OF_MARKERS_IN_REGION)
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

  storeMarkerReference = (index: number) => {
    return (ref: React.Ref<typeof MapView.Marker> | null) => {
      this.markers[index] = ref;
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
        ref={this.storeMarkerReference(index)}
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
