// @flow

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet } from '@kiwicom/mobile-shared';

import Location from './Location';
import TravelTypeIcon from '../TravelTypeIcon';
import type { TripCities as TripCitiesType } from './__generated__/TripCities.graphql';

type Props = {|
  data: TripCitiesType,
  type: 'RETURN' | 'ONE_WAY', // MULTICITY doesn't make sense here
|};

function TripCities({ data, type }: Props) {
  const departure = data.departure;
  const arrival = data.arrival;

  return (
    <View style={styleSheet.row}>
      <View style={styleSheet.departureLocation}>
        <Location data={departure} />
      </View>

      <TravelTypeIcon type={type} style={styleSheet.icon} />

      <View style={styleSheet.arrivalLocation}>
        <Location data={arrival} />
      </View>
    </View>
  );
}

export default createFragmentContainer(
  TripCities,
  graphql`
    fragment TripCities on Trip {
      departure {
        ...Location
      }
      arrival {
        ...Location
      }
    }
  `,
);

const styleSheet = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  departureLocation: {
    flex: 1,
  },
  icon: {
    fontSize: 14,
  },
  arrivalLocation: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
