// @flow

import * as React from 'react';
import { Text, View } from 'react-native';

import BookingListRow from './BookingsListRow';

import type { BookingsListContainer_bookings } from './__generated__/BookingsListContainer_bookings.graphql';
import type { Navigation } from '../../types/Navigation';

type Props = {
  bookings: BookingsListContainer_bookings,
  relay: Object, // FIXME
  navigation: Navigation,
};

type State = {
  loading: boolean,
};

export default class BookingsList extends React.Component<Props, State> {
  render = () => {
    return (
      <View>
        {this.props.bookings &&
          this.props.bookings.allBookings &&
          this.props.bookings.allBookings.edges &&
          this.props.bookings.allBookings.edges.map(edge => {
            if (edge) {
              const { node, cursor } = edge;
              return (
                <BookingListRow
                  node={node}
                  key={cursor}
                  navigation={this.props.navigation}
                />
              );
            } else {
              return <Text>Edge not found in the graph.</Text>;
            }
          })}
      </View>
    );
  };
}
