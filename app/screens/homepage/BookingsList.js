// @flow

import * as React from 'react';
import { View, Text } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';

import BookingListRow from './BookingsListRow';
import BookingListRowError from './BookingsListRowError';

import type { BookingsList_bookings } from './__generated__/BookingsList_bookings.graphql';
import type { Navigation } from '../../types/Navigation';

type Props = {
  bookings: BookingsList_bookings,
  navigation: Navigation,
};

type State = {
  loading: boolean,
};

export class BookingsListWithoutData extends React.Component<Props, State> {
  render = () => {
    let { allBookings } = this.props.bookings;
    return (
      <View>
        {allBookings && allBookings.edges ? (
          allBookings.edges.map(edge => {
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
              return <BookingListRowError />;
            }
          })
        ) : (
          // FIXME: maybe there are just no bookings?
          <Text>
            We couldn&apos;t load the bookings because of our API returned an
            error. Please try it again later.
          </Text>
        )}
      </View>
    );
  };
}

export default createFragmentContainer(
  BookingsListWithoutData,
  graphql`
    fragment BookingsList_bookings on RootQuery {
      allBookings {
        edges {
          cursor
          node {
            ...BookingsListRow_node
          }
        }
      }
    }
  `,
);
