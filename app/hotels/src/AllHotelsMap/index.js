// @flow

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { MapView, type LatLng } from 'expo';
import { PriceMaker } from '@kiwicom/native-common';

export type HotelMarker = {|
  id: string,
  coordinate: LatLng,
  data: {|
    price: number,
  |},
|};

type Props = {
  markers: HotelMarker[],
  currency: string,
};

const EDGE_PADDING = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

class AllHotelsMap extends React.Component<Props> {
  map: typeof MapView | null;

  storeMapReference = (map: React.Ref<typeof MapView> | null) => {
    this.map = map;
  };

  fitToMarkers = () => {
    const coordinates = this.props.markers.map(marker => marker.coordinate);
    const options = {
      edgePadding: EDGE_PADDING,
      animated: true,
    };

    if (!this.map) {
      return;
    }

    this.map.fitToCoordinates(coordinates, options);
  };

  renderMarker = props => marker => {
    return (
      <MapView.Marker
        key={marker.id}
        identifier={marker.id}
        coordinate={marker.coordinate}
      >
        <PriceMaker
          price={marker.data.price}
          isSelected={marker.id === '1' /* Just as an example */}
          currency={props.currency}
        />
      </MapView.Marker>
    );
  };

  render = () => {
    return (
      <View style={styles.container}>
        <MapView
          ref={this.storeMapReference}
          style={styles.map}
          onLayout={this.fitToMarkers}
        >
          {this.props.markers.map(this.renderMarker(this.props))}
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
  ];
  const props = {
    markers,
    currency: 'CZK',
  };

  const hoc = () => <ComponentToRender {...props} />;
  hoc.displayName = 'FakeHoc(AllHotelsMap)';

  return hoc;
};

export default FakeHOC(AllHotelsMap);
