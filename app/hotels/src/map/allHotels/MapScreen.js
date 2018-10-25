// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import {
  StyleSheet,
  StretchedImage,
  Dimensions,
  Device,
} from '@kiwicom/mobile-shared';
import idx from 'idx';

import SingleHotelContext from '../../navigation/singleHotel/SingleHotelContext';
import MapView from './MapView';
import HotelSwipeList from './HotelSwipeList';
import type { MapScreen as MapScreenData } from './__generated__/MapScreen.graphql';
import gradient from '../gradient.png';

type Props = {|
  +data: MapScreenData,
|};

type PropsWithContext = {|
  ...Props,
  +setHotelId: (hotelId: string) => void,
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
    const index = hotels.findIndex(hotel => idx(hotel, _ => _.id) === hotelId);

    if (index !== -1) {
      this.handleActiveIndex(index, hotels);
    }
  };

  handleActiveIndex = (index: number, hotels: MapScreenData) => {
    if (!this.isNarrowLayout()) {
      const hotelHotelId = idx(hotels[index], _ => _.hotelId);
      hotelHotelId != null && this.props.setHotelId(hotelHotelId);
    }
    this.selectMarker(index);
  };

  onSnapToItem = (index: number) => {
    const hotels = this.getHotels();
    this.handleActiveIndex(index, hotels);
  };

  render = () => {
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
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  underlay: { height: 132 },
});

const MapScreen = (props: Props) => (
  <Dimensions.Consumer>
    {({ width }) => (
      <SingleHotelContext.Consumer>
        {({ setHotelId }) => {
          return (
            <MapScreenWithContext
              {...props}
              setHotelId={setHotelId}
              deviceWidth={width}
            />
          );
        }}
      </SingleHotelContext.Consumer>
    )}
  </Dimensions.Consumer>
);

export default createFragmentContainer(
  MapScreen,
  graphql`
    fragment MapScreen on AllHotelsInterface @relay(plural: true) {
      id
      hotelId
      ...MapView
      ...HotelSwipeList
    }
  `,
);
