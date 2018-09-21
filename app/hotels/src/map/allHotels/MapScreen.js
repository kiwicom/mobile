// @flow

import * as React from 'react';
import { View } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { StyleSheet } from '@kiwicom/mobile-shared';
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

class MapScreen extends React.Component<Props, State> {
  state = {
    selectedHotelIndex: 0,
  };

  getHotels = () => {
    return idx(this.props, _ => _.data.allAvailableHotels.edges) || [];
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 8,
  },
});

export default createFragmentContainer(
  MapScreen,
  graphql`
    fragment MapScreen on RootQuery {
      allAvailableHotels(
        search: $search
        filter: $filter
        options: $options
        first: $first
        after: $after
      ) @connection(key: "AllHotels_allAvailableHotels") {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          node {
            id
          }
          ...MapView
          ...HotelSwipeList
        }
        stats {
          maxPrice
          minPrice
        }
      }
    }
  `,
);
