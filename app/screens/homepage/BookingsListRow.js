// @flow

import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { graphql, createFragmentContainer } from 'react-relay';

import SimpleCard from '../../components/visual/cards/SimpleCard';
import Date from '../../components/visual/datetime/Date';
import RouteStop from '../search/RouteStop';

import type { BookingsListRow_node } from './__generated__/BookingsListRow_node.graphql';
import type { Navigation } from '../../types/Navigation';

type Props = {
  node: BookingsListRow_node,
  navigation: Navigation,
};

export function BookingListRowWithoutData({ node, navigation }: Props) {
  const { legs } = node;
  const { navigate } = navigation;
  if (legs) {
    return (
      <SimpleCard onPress={() => navigate('Booking')}>
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
          }
        })}
      </SimpleCard>
    );
  } else {
    // TODO: log such an event?
  }
}

export default createFragmentContainer(
  BookingListRowWithoutData,
  graphql`
    fragment BookingsListRow_node on Booking {
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
