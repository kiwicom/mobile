// @flow

import * as React from 'react';
import { View, Text } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';

import BookingOverviewRow from '../../components/bookings/OverviewRow';
import AllBookingsListRowError from './AllBookingsListRowError';
import AllBookingsAssetsDownloader from './AllBookingsAssetsDownloader';
import Large from '../../components/visual/text/Large';

import type { AllBookingsList_bookings } from './__generated__/AllBookingsList_bookings.graphql';
import type { Navigation } from '../../types/Navigation';

type Props = {|
  bookings: AllBookingsList_bookings,
  navigation: Navigation,
|};

type State = {|
  loading: boolean,
|};

const filterEdges = allEdges => {
  const filteredTrips = [[], []];
  allEdges.forEach(edge => {
    const departureLocalTime = idx(edge, _ => _.node.departure.localTime);
    if (departureLocalTime) {
      if (new Date(departureLocalTime).getTime() >= Date.now()) {
        // future trips
        filteredTrips[0].push(edge);
      }
      filteredTrips[1].push(edge);
    }
  });
  return filteredTrips;
};

/**
 * Renders past and future trips. It automatically downloads all assets like
 * plane tickets and invoices for future trips (not for the past trips).
 */
export class AllBookingsListWithoutData extends React.Component<Props, State> {
  render = () => {
    const allEdges = idx(this.props, _ => _.bookings.allBookings.edges) || [];
    const [futureEdges, pastEdges] = filterEdges(allEdges);

    const title = titleString => (
      <View style={{ paddingTop: 25, paddingBottom: 10 }}>
        <Large>{titleString}</Large>
      </View>
    );

    const renderEdges = (edges, downloadAssets: boolean = false) => {
      const listLength = edges.length;
      return listLength > 0 ? (
        edges.map((edge, index) => {
          if (edge) {
            const { node, cursor } = edge;
            return [
              downloadAssets && (
                <AllBookingsAssetsDownloader
                  data={node && node.assets}
                  key="downloader"
                />
              ),
              <BookingOverviewRow
                node={node}
                key={cursor}
                onPress={() =>
                  this.props.navigation.navigate('SingleBooking', {
                    bookingId: node && node.id,
                    bookingDatabaseId: node && node.databaseId,
                  })
                }
                showSeparator={listLength !== index + 1} // everywhere except the last row in the list
              />,
            ];
          } else {
            return <AllBookingsListRowError />;
          }
        })
      ) : (
        <View style={{ paddingTop: 20, paddingBottom: 20 }}>
          <Text>No trips yet.</Text>
        </View>
      );
    };

    return (
      <View>
        {title('Future trips')}
        {renderEdges(futureEdges, true)}

        {title('Past trips')}
        {renderEdges(pastEdges)}
      </View>
    );
  };
}

export default createFragmentContainer(
  AllBookingsListWithoutData,
  graphql`
    fragment AllBookingsList_bookings on RootQuery {
      allBookings {
        edges {
          cursor
          node {
            id
            databaseId
            assets {
              ...AllBookingsAssetsDownloader
            }
            departure {
              localTime
            }
            ...OverviewRow_node
          }
        }
      }
    }
  `,
);
