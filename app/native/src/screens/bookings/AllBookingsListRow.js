// @flow

import * as React from 'react';
import { Text, View } from 'react-native';
import { graphql, createFragmentContainer } from 'react-relay';

import SimpleCard from '../../components/visual/cards/SimpleCard';
import RouteStop from '../../components/flights/RouteStop';

import type { AllBookingsListRow_node } from './__generated__/AllBookingsListRow_node.graphql';
import type { Navigation } from '../../types/Navigation';

type Props = {
  node: AllBookingsListRow_node,
  navigation: Navigation,
};

export function BookingListRowWithoutData({ node, navigation }: Props) {
  const { departure, arrival } = node;
  const { navigate } = navigation;
  return (
    <SimpleCard onPress={() => navigate('SingleBooking', { booking: node })}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column' }}>
          <Text>
            <RouteStop data={departure} /> &rarr; <RouteStop data={arrival} />
          </Text>
          {/* TODO: fix dates in GraphQL API (returns null because of backend 💩 API */}
        </View>
      </View>
    </SimpleCard>
  );
}

export default createFragmentContainer(
  BookingListRowWithoutData,
  graphql`
    fragment AllBookingsListRow_node on Booking {
      assets {
        ticketUrl
        invoiceUrl
      }
      departure {
        localTime
        ...RouteStop
      }
      arrival {
        localTime
        ...RouteStop
      }
    }
  `,
);
