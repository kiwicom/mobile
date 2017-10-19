// @flow

import * as React from 'react';
import { View, Text } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';

import BookingListRow from './BookingsListRow';
import BookingListRowError from './BookingsListRowError';
import AssetsDownloader from '../../src/assets/AssetsDownloader';

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

              if (node && node.assets) {
                const { ticketUrl, invoiceUrl } = node.assets;
                if (ticketUrl) {
                  AssetsDownloader({ url: ticketUrl });
                }
                if (invoiceUrl) {
                  AssetsDownloader({ url: invoiceUrl });
                }
              }

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
          <Text>We couldn&apos;t load the bookings (missing data).</Text>
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
            assets {
              ticketUrl
              invoiceUrl
            }
            ...BookingsListRow_node
          }
        }
      }
    }
  `,
);
