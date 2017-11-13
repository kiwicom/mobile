// @flow

import * as React from 'react';
import { View, Text } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';

import BookingListRow from './AllBookingsListRow';
import BookingListRowError from './AllBookingsListRowError';
import AssetsDownloader from '../../services/assets/AssetsDownloader';

import type { AllBookingsList_bookings } from './__generated__/AllBookingsList_bookings.graphql';
import type { Navigation } from '../../types/Navigation';

type Props = {
  bookings: AllBookingsList_bookings,
  navigation: Navigation,
};

type State = {
  loading: boolean,
};

export class BookingsListWithoutData extends React.Component<Props, State> {
  render = () => {
    const edges = idx(this.props, _ => _.bookings.allBookings.edges);
    return (
      <View>
        {edges ? (
          edges.map(edge => {
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
    fragment AllBookingsList_bookings on RootQuery {
      allBookings {
        edges {
          cursor
          node {
            assets {
              ticketUrl
              invoiceUrl
            }
            ...AllBookingsListRow_node
          }
        }
      }
    }
  `,
);
