// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet, Duration } from '@kiwicom/mobile-shared';

import DateTime from './DateTime';
import type { TripTimes as TripTimesType } from './__generated__/TripTimes.graphql';

type Props = {|
  data: TripTimesType,
|};

function TripTimes({ data }: Props) {
  const departure = data.departure;
  const arrival = data.arrival;

  return (
    <View style={styleSheet.row}>
      <View style={styleSheet.departure}>
        <DateTime data={departure} />
      </View>

      <View style={styleSheet.duration}>
        <Duration duration={data.duration} />
      </View>

      <View style={styleSheet.arrival}>
        <DateTime data={arrival} />
      </View>
    </View>
  );
}

export default createFragmentContainer(
  TripTimes,
  graphql`
    fragment TripTimes on Trip {
      duration
      departure {
        ...DateTime
      }
      arrival {
        ...DateTime
      }
    }
  `,
);

const styleSheet = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  departure: {
    flex: 1,
  },
  duration: {
    alignSelf: 'flex-end',
  },
  arrival: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
