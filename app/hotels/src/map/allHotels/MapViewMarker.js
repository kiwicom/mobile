// @flow strict

import * as React from 'react';
import MapView from 'react-native-maps';
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

const MapViewMarker = (props: Props) => {
  const coordinate = props.markerData?.coordinates;
  const lat = coordinate?.lat;
  const lng = coordinate?.lng;
  const price = props.markerData?.price;
  const id = props.markerData?.id;
  const [tracksViewChanges, setTracksViewChanges] = React.useState(false);

  React.useEffect(() => {
    // Update marker location if coordinates changed
    setTracksViewChanges(true);
  }, [lat, lng]);

  React.useEffect(() => {
    if (tracksViewChanges === true) {
      // set to false immediately after rendering with tracksViewChanges is true
      // This prevents react-native-maps from eating away all resource on android
      // see https://github.com/react-native-community/react-native-maps/issues/2658#issuecomment-455731624
      setTracksViewChanges(false);
    }
  }, [tracksViewChanges]);

  function storeMarkerReference(ref: React.Ref<typeof MapView.Marker> | null) {
    props.storeRef(props.index, ref);
  }

  return (
    <MapView.Marker
      identifier={id}
      coordinate={{
        latitude: coordinate?.lat,
        longitude: coordinate?.lng,
      }}
      onPress={props.onPress}
      ref={storeMarkerReference}
      tracksViewChanges={tracksViewChanges}
    >
      <PriceMarker data={price} isSelected={props.isSelected} />
    </MapView.Marker>
  );
};

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
