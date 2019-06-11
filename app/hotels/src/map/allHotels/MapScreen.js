// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import {
  StyleSheet,
  StretchedImage,
  Dimensions,
  Device,
} from '@kiwicom/mobile-shared';

import { HotelsContext, type HotelsContextState } from '../../HotelsContext';
import MapView from './MapView';
import HotelSwipeList from './HotelSwipeList';
import type { MapScreen_data as MapScreenData } from './__generated__/MapScreen_data.graphql';
import gradient from '../gradient.png';

type PropsWithContext = {|
  ...Props,
  +deviceWidth: number,
|};

function MapScreenWithContext(props: PropsWithContext) {
  const [selectedHotelIndex, setSelectedHotelIndex] = React.useState(0);
  const {
    actions: { setHotelId },
  }: HotelsContextState = React.useContext(HotelsContext);
  const hotels = props.data ?? [];

  function selectMarker(index: number) {
    if (selectedHotelIndex !== index) {
      setSelectedHotelIndex(index);
    }
  }

  function onSelectMarker(hotelId: string) {
    const index = hotels.findIndex(hotel => hotel.id === hotelId);

    if (index !== -1) {
      handleActiveIndex(index);
    }
  }

  function handleActiveIndex(index: number) {
    const isNarrowLayout = props.deviceWidth < Device.DEVICE_THRESHOLD;
    if (!isNarrowLayout && hotels[index].hotelId != null) {
      setHotelId(hotels[index].hotelId);
    }
    selectMarker(index);
  }

  function onSnapToItem(index: number) {
    handleActiveIndex(index);
  }

  return (
    <View style={styles.container} testID="allHotels-mapScreen">
      <MapView
        data={hotels}
        selectedIndex={selectedHotelIndex}
        onSelectMarker={onSelectMarker}
      />
      <View style={styles.underlay}>
        <StretchedImage source={gradient} />
      </View>
      <HotelSwipeList
        data={hotels}
        selectedIndex={selectedHotelIndex}
        onSnapToItem={onSnapToItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  underlay: {
    height: 132,
  },
});

type Props = {|
  +data: MapScreenData,
|};

class MapScreen extends React.Component<Props> {
  renderDimension = ({ width }) => (
    <MapScreenWithContext {...this.props} deviceWidth={width} />
  );

  render() {
    return <Dimensions.Consumer>{this.renderDimension}</Dimensions.Consumer>;
  }
}

export default createFragmentContainer(MapScreen, {
  data: graphql`
    fragment MapScreen_data on AllHotelsInterface @relay(plural: true) {
      id
      hotelId
      ...MapView_data
      ...HotelSwipeList_data
    }
  `,
});
