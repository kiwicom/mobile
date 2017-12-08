// @flow

import * as React from 'react';
import { View, Text } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';
import { Large } from '@kiwicom/native-common';

import AllBookingsListRowError from './AllBookingsListRowError';
import AllBookingsAssetsDownloader from './AllBookingsAssetsDownloader';
import AllBookingsListNode from './AllBookingsListNode';

import type { AllBookingsList_bookings } from './__generated__/AllBookingsList_bookings.graphql';
import type { Navigation } from '../../types/Navigation';

type Props = {|
  bookings: AllBookingsList_bookings,
  navigation: Navigation,
|};

type State = {|
  loading: boolean,
|};

/**
 * Returns array in following format:
 *
 * [[futureTrip1, futureTrip1], [pastTrip1, pastTrip2]]
 *
 * Future (current) trips are trips with ARRIVAL in the future.
 */
export const filterEdges = (
  allEdges: $PropertyType<
    $NonMaybeType<$PropertyType<AllBookingsList_bookings, 'allBookings'>>,
    'edges',
  >,
) => {
  const filteredTrips = [[], []];
  allEdges &&
    allEdges.forEach(edge => {
      const arrivalLocalTime = idx(edge, _ => _.node.arrival.localTime);
      if (arrivalLocalTime) {
        if (new Date(arrivalLocalTime).getTime() >= Date.now()) {
          // future and current trips
          filteredTrips[0].push(edge);
        } else {
          // past trips
          filteredTrips[1].push(edge);
        }
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
              <AllBookingsListNode
                key={cursor}
                data={node}
                navigation={this.props.navigation}
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
            assets {
              ...AllBookingsAssetsDownloader
            }
            arrival {
              localTime
            }
            ...AllBookingsListNode
          }
        }
      }
    }
  `,
);
