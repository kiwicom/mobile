// @flow

import * as React from 'react';
import { Text, View } from 'react-native';
import { graphql, createFragmentContainer } from 'react-relay';

import SimpleCard from '../../components/visual/cards/SimpleCard';
import RouteStop from '../../components/flights/RouteStop';
import Date from '../../components/visual/datetime/Date';

import type { AllBookingsListRow_node } from './__generated__/AllBookingsListRow_node.graphql';
import type { Navigation } from '../../types/Navigation';

type Props = {
  node: AllBookingsListRow_node,
  navigation: Navigation,
  showSeparator: boolean,
};

export function BookingListRowWithoutData({
  node,
  navigation,
  showSeparator,
}: Props) {
  const { departure, arrival } = node;
  const { navigate } = navigation;
  return (
    <SimpleCard
      onPress={() => navigate('SingleBooking', { booking: node })}
      separator={showSeparator}
    >
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column' }}>
          <Text>
            <RouteStop data={departure} /> &rarr; <RouteStop data={arrival} />
          </Text>
          <Date dateTime={departure && departure.localTime} />
        </View>
      </View>
    </SimpleCard>
  );
}

export default createFragmentContainer(
  BookingListRowWithoutData,
  graphql`
    fragment AllBookingsListRow_node on Booking {
      departure {
        localTime
        ...RouteStop
      }
      arrival {
        ...RouteStop
      }
    }
  `,
);
