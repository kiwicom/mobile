// @flow

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';

import MapView from './MapView';
import HotelSwipeList from './HotelSwipeList';
import type { MapScreen as MapScreenData } from './__generated__/MapScreen.graphql';

type Props = {|
  data: MapScreenData,
  onOpenSingleHotel: (hotelId: string) => void,
|};

type State = {|
  selectedHotelIndex: number,
|};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

class MapScreen extends React.Component<Props, State> {
  state = {
    selectedHotelIndex: 0,
  };

  componentWillReceiveProps = (nextProps: Props) => {
    if (this.props.data !== nextProps.data) {
      // TODO keep correct index if node with the same id is still present
      this.setState({ selectedHotelIndex: 0 });
    }
  };

  getHotels = () => {
    return idx(this.props, _ => _.data.edges) || [];
  };

  selectMarker = (selectedHotelIndex: number) => {
    if (this.state.selectedHotelIndex === selectedHotelIndex) {
      return;
    }

    this.setState({ selectedHotelIndex });
  };

  onSelectMarker = (hotelId: string) => {
    const hotels = this.getHotels();
    const index = hotels.findIndex(
      hotel => idx(hotel, _ => _.node.id) === hotelId,
    );

    if (index !== -1) {
      this.selectMarker(index);
    }
  };

  onSnapToItem = (index: number) => {
    this.selectMarker(index);
  };

  render = () => {
    const { selectedHotelIndex } = this.state;
    const hotels = this.getHotels();

    return (
      <View style={styles.container}>
        <MapView
          data={hotels}
          selectedIndex={selectedHotelIndex}
          onSelectMarker={this.onSelectMarker}
        />
        <HotelSwipeList
          data={hotels}
          selectedIndex={selectedHotelIndex}
          onOpenSingleHotel={this.props.onOpenSingleHotel}
          onSnapToItem={this.onSnapToItem}
        />
      </View>
    );
  };
}

export default createFragmentContainer(
  MapScreen,
  graphql`
    fragment MapScreen on HotelAvailabilityConnection {
      edges {
        node {
          id
        }
        ...MapView
        ...HotelSwipeList
      }
    }
  `,
);
