// @flow

import * as React from 'react';
import { View, Text } from 'react-native';
import { createFragmentContainer, graphql } from 'react-relay';
import idx from 'idx';

import AllBookingsListRow from './AllBookingsListRow';
import AllBookingsListRowError from './AllBookingsListRowError';
import AllBookingsAssetsDownloader from './AllBookingsAssetsDownloader';

import type { AllBookingsList_bookings } from './__generated__/AllBookingsList_bookings.graphql';
import type { Navigation } from '../../types/Navigation';

type Props = {
  bookings: AllBookingsList_bookings,
  navigation: Navigation,
};

type State = {
  loading: boolean,
};

export class AllBookingsListWithoutData extends React.Component<Props, State> {
  render = () => {
    const edges = idx(this.props, _ => _.bookings.allBookings.edges);
    return (
      <View>
        {edges ? (
          edges.map(edge => {
            if (edge) {
              const { node, cursor } = edge;

              return [
                <AllBookingsAssetsDownloader
                  data={node && node.assets}
                  key="downloader"
                />,
                <AllBookingsListRow
                  node={node}
                  key={cursor}
                  navigation={this.props.navigation}
                />,
              ];
            } else {
              return <AllBookingsListRowError />;
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
            departure {
              localTime
              ...RouteStop
            }
            arrival {
              localTime
              ...RouteStop
            }
            ...AllBookingsListRow_node
          }
        }
      }
    }
  `,
);
