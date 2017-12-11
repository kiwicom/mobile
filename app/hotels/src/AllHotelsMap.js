// @flow

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { MapView, type LatLng, type Region } from 'expo';
import { PriceMarker } from '@kiwicom/react-native-app-common';
import { getCenter, getBounds } from 'geolib';

export type HotelMarker = {|
  id: string,
  coordinate: LatLng,
  data: {|
    price: number,
  |},
|};

type Props_ = {|
  markers: HotelMarker[],
  selectedMarkerId: string,
  currency: string,
|};

type Props = Props & $Shape<Props_>;

type State = {|
  region: Region,
  mapIsReady: boolean,
  selectedMarkerId: string,
|};

type MarkerPressEvent = {|
  nativeEvent: {
    action: 'marker-press',
    coordinate: LatLng,
    id: string, // id of the marker
    target: string,
  },
|};

const EDGE_PADDING = 1.3;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

class AllHotelsMap extends React.Component<Props, State> {
  map: typeof MapView | null;

  constructor(props) {
    super(props);

    this.state = {
      region: this.getRegion(props.markers),
      mapIsReady: false,
      selectedMarkerId: props.selectedMarkerId,
    };
  }

  componentWillReceiveProps = nextProps => {
    if (this.props.selectedMarkerId !== nextProps.selectedMarkerId) {
      this.setState({ selectedMarkerId: nextProps.selectedMarkerId });
    }
  };

  getRegion = markers => {
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

  onMapReady = () => {
    if (!this.state.mapIsReady) {
      this.setState({ mapIsReady: true });
      this.animateToCoordinate(this.state.selectedMarkerId);
    }
  };

  onMarkerPress = (e: MarkerPressEvent) => {
    this.animateToCoordinate(e.nativeEvent.id);
    this.setState({ selectedMarkerId: e.nativeEvent.id });
  };

  animateToCoordinate = (selectedMarkerId, duration = 400) => {
    const { markers } = this.props;
    const selectedMarker = markers.find(m => m.id === selectedMarkerId);

    if (!(this.map && selectedMarker)) {
      return;
    }

    this.map.animateToCoordinate(selectedMarker.coordinate, duration);
  };

  renderMarker = marker => {
    const { currency } = this.props;
    const { selectedMarkerId } = this.state;

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

  render = () => {
    const { markers } = this.props;

    return (
      <View style={styles.container}>
        <MapView
          ref={this.storeMapReference}
          style={styles.map}
          initialRegion={this.state.region}
          onMapReady={this.onMapReady}
        >
          {markers.map(this.renderMarker)}
        </MapView>
      </View>
    );
  };
}

// temporary solution to fake data
const FakeHOC = (ComponentToRender: React.ComponentType<Props>) => {
  // Prague coordinates
  const LATITUDE = 50.08804;
  const LONGITUDE = 14.42076;
  const markers = [
    {
      id: '1',
      coordinate: { latitude: LATITUDE, longitude: LONGITUDE },
      data: {
        price: 9987,
      },
    },
    {
      id: '2',
      coordinate: { latitude: LATITUDE + 0.004, longitude: LONGITUDE - 0.004 },
      data: {
        price: 9170,
      },
    },
    {
      id: '3',
      coordinate: { latitude: LATITUDE - 0.004, longitude: LONGITUDE + 0.004 },
      data: {
        price: 7551,
      },
    },
    {
      id: '4',
      coordinate: {
        latitude: LATITUDE + 0.0045,
        longitude: LONGITUDE - 0.0045,
      },
      data: {
        price: 89,
      },
    },
    {
      id: '5',
      coordinate: {
        latitude: LATITUDE + 0.0035,
        longitude: LONGITUDE - 0.0035,
      },
      data: {
        price: 17551,
      },
    },
  ];
  const props = {
    markers,
    currency: 'CZK',
    selectedMarkerId: '2',
  };

  const hoc = () => <ComponentToRender {...props} />;
  hoc.displayName = 'FakeHoc(AllHotelsMap)';

  return hoc;
};

export default FakeHOC(AllHotelsMap);
