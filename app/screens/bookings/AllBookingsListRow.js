// @flow

import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { graphql, createFragmentContainer } from 'react-relay';

import SimpleCard from '../../components/visual/cards/SimpleCard';
import Date from '../../components/visual/datetime/Date';
import RouteStop from '../../components/flights/RouteStop';

import type { AllBookingsListRow_node } from './__generated__/AllBookingsListRow_node.graphql';
import type { Navigation } from '../../types/Navigation';

type Props = {
  node: AllBookingsListRow_node,
  navigation: Navigation,
};

export function BookingListRowWithoutData({ node, navigation }: Props) {
  const { legs } = node;
  const { navigate } = navigation;
  if (legs) {
    return (
      <SimpleCard onPress={() => navigate('SingleBooking', { booking: node })}>
        {legs.map(leg => {
          if (leg) {
            const { id, departure, arrival, airline } = leg;
            return (
              <View key={id} style={{ flexDirection: 'row' }}>
                <Image
                  style={{ width: 25, height: 25 }}
                  source={{ uri: airline && airline.logoUrl }}
                />
                <View style={{ flexDirection: 'column' }}>
                  <Text>
                    <RouteStop data={departure} /> &rarr;{' '}
                    <RouteStop data={arrival} />
                  </Text>
                  <Text>
                    <Date dateTime={departure && departure.localTime} /> &rarr;{' '}
                    <Date dateTime={arrival && arrival.localTime} />
                  </Text>
                </View>
              </View>
            );
          } else {
            // TODO: log such an event?
            return <Text>Flight leg could not be loaded (missing data).</Text>;
          }
        })}
      </SimpleCard>
    );
  } else {
    // TODO: log such an event?
    return <Text>Flight legs could not be loaded (missing data).</Text>;
  }
}

export default createFragmentContainer(
  BookingListRowWithoutData,
  graphql`
    fragment AllBookingsListRow_node on Booking {
      assets {
        ticketUrl
        invoiceUrl
      }
      legs {
        id
        airline {
          name
          logoUrl
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
    }
  `,
);
