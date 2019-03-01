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

import {
  withHotelsContext,
  type HotelsContextState,
} from '../../HotelsContext';
import MapView from './MapView';
import HotelSwipeList from './HotelSwipeList';
import type { MapScreen_data as MapScreenData } from './__generated__/MapScreen_data.graphql';
import gradient from '../gradient.png';

type PropsWithContext = {|
  ...Props,
  +deviceWidth: number,
|};

type State = {|
  selectedHotelIndex: number,
|};

class MapScreenWithContext extends React.Component<PropsWithContext, State> {
  state = {
    selectedHotelIndex: 0,
  };

  isNarrowLayout = () => {
    return this.props.deviceWidth < Device.DEVICE_THRESHOLD;
  };

  getHotels = () => this.props.data || [];

  selectMarker = (selectedHotelIndex: number) => {
    if (this.state.selectedHotelIndex === selectedHotelIndex) {
      return;
    }
    this.setState({ selectedHotelIndex });
  };

  onSelectMarker = (hotelId: string) => {
    const hotels = this.getHotels();
    const index = hotels.findIndex(hotel => hotel.id === hotelId);

    if (index !== -1) {
      this.handleActiveIndex(index, hotels);
    }
  };

  handleActiveIndex = (index: number, hotels: MapScreenData) => {
    if (!this.isNarrowLayout() && hotels[index].hotelId != null) {
      this.props.setHotelId(hotels[index].hotelId);
    }
    this.selectMarker(index);
  };

  onSnapToItem = (index: number) => {
    const hotels = this.getHotels();
    this.handleActiveIndex(index, hotels);
  };

  render() {
    const { selectedHotelIndex } = this.state;
    const hotels = this.getHotels();

    return (
      <View style={styles.container} testID="allHotels-mapScreen">
        <MapView
          data={hotels}
          selectedIndex={selectedHotelIndex}
          onSelectMarker={this.onSelectMarker}
        />
        <View style={styles.underlay}>
          <StretchedImage source={gradient} />
        </View>
        <HotelSwipeList
          data={hotels}
          selectedIndex={selectedHotelIndex}
          onSnapToItem={this.onSnapToItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  underlay: { height: 132 },
});

type Props = {|
  +data: MapScreenData,
  +setHotelId: (hotelId: string) => void,
|};

class MapScreen extends React.Component<Props> {
  renderDimension = ({ width }) => (
    <MapScreenWithContext
      {...this.props}
      setHotelId={this.props.setHotelId}
      deviceWidth={width}
    />
  );

  render() {
    return <Dimensions.Consumer>{this.renderDimension}</Dimensions.Consumer>;
  }
}

const select = ({ setHotelId }: HotelsContextState) => ({ setHotelId });

export default createFragmentContainer(withHotelsContext(select)(MapScreen), {
  data: graphql`
    fragment MapScreen_data on AllHotelsInterface @relay(plural: true) {
      id
      hotelId
      ...MapView_data
      ...HotelSwipeList_data
    }
  `,
});
