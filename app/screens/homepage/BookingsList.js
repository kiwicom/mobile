// @flow

import * as React from 'react';
import { Text, View } from 'react-native';

import type { BookingsListContainer_bookings } from './__generated__/BookingsListContainer_bookings.graphql';

type Props = {
  bookings: BookingsListContainer_bookings,
  relay: Object, // FIXME
};

type State = {
  loading: boolean,
};

export default class SearchResults extends React.Component<Props, State> {
  render = () => {
    return (
      <View>
        {this.props.bookings &&
          this.props.bookings.allBookings &&
          this.props.bookings.allBookings.edges &&
          this.props.bookings.allBookings.edges.map(edge => {
            if (edge) {
              const { node } = edge;
              return (
                <View key={node && node.id}>
                  <Text>{node && node.id}</Text>
                  <Text>
                    {node &&
                      node.departure &&
                      node.departure.airport &&
                      node.departure.airport.locationId}{' '}
                    &rarr;{' '}
                    {node &&
                      node.arrival &&
                      node.arrival.airport &&
                      node.arrival.airport.locationId}
                  </Text>
                </View>
              );
            } else {
              return <Text>Edge not found in the graph.</Text>;
            }
          })}
      </View>
    );
  };
}
