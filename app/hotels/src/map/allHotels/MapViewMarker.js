// @flow strict

/* eslint-disable react/no-did-update-set-state */
import * as React from 'react';
import MapView from 'react-native-maps';
import isEqual from 'react-fast-compare';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';

import PriceMarker from './PriceMarker';
import type { MapViewMarker_markerData as MarkerData } from './__generated__/MapViewMarker_markerData.graphql';

export type LatLng = {|
  +longitude: number,
  +latitude: number,
|};

export type MarkerPressEvent = {|
  +nativeEvent: {
    +action: 'marker-press',
    +coordinate: LatLng,
    +id: string, // id of the marker
    +target: string,
  },
|};

type Props = {|
  +markerData: ?MarkerData,
  +isSelected: boolean,
  +storeRef: (number, React.Ref<typeof MapView> | null) => void,
  +index: number,
  +onPress: MarkerPressEvent => void,
|};

type State = {|
  tracksViewChanges: boolean,
|};

class MapViewMarker extends React.Component<Props, State> {
  state = {
    tracksViewChanges: false,
  };

  componentDidUpdate(prevProps: Props) {
    const coordinate = this.props.markerData?.coordinates;
    const prevCoordinate = prevProps.markerData?.coordinates;
    if (
      !isEqual(prevCoordinate, coordinate) // set true only when coordinates changes
    ) {
      this.setState({ tracksViewChanges: true });
    } else if (this.state.tracksViewChanges) {
      // set to false immediately after rendering with tracksViewChanges is true
      // This prevents react-native-maps from eating away all resource on android
      // see https://github.com/react-native-community/react-native-maps/issues/2658#issuecomment-455731624
      this.setState({ tracksViewChanges: false });
    }
  }

  storeMarkerReference = (ref: React.Ref<typeof MapView.Marker> | null) => {
    const { index } = this.props;
    this.props.storeRef(index, ref);
  };

  render() {
    const { isSelected, onPress } = this.props;
    const coordinate = this.props.markerData?.coordinates;
    const price = this.props.markerData?.price;
    const id = this.props.markerData?.id;
    return (
      <MapView.Marker
        identifier={id}
        coordinate={{
          latitude: coordinate?.lat,
          longitude: coordinate?.lng,
        }}
        onPress={onPress}
        ref={this.storeMarkerReference}
        tracksViewChanges={this.state.tracksViewChanges}
      >
        <PriceMarker data={price} isSelected={isSelected} />
      </MapView.Marker>
    );
  }
}

export default createFragmentContainer(MapViewMarker, {
  markerData: graphql`
    fragment MapViewMarker_markerData on AllHotelsInterface {
      id
      price: money {
        ...PriceMarker_data
      }
      coordinates {
        lat
        lng
      }
    }
  `,
});
