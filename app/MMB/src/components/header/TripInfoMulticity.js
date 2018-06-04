// @flow

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { SeparatorFullWidth } from '@kiwicom/mobile-navigation';
import idx from 'idx';

import TripCities from './TripCities';
import TripTimes from './TripTimes';
import type { TripInfoMulticity as TripInfoMulticityType } from './__generated__/TripInfoMulticity.graphql';

type Props = {|
  data: TripInfoMulticityType,
|};

function TripInfoMulticity(props: Props) {
  const trips = idx(props, _ => _.data.trips) || [];
  let separator = null;

  return trips.map((trip, index) => {
    const row = (
      <React.Fragment key={index}>
        {/* ONE_WAY because we are printing it for every leg (one way) */}
        {separator}
        <TripCities data={trip} type="ONE_WAY" />
        <TripTimes data={trip} />
      </React.Fragment>
    );

    separator = (
      <View style={styleSheet.separatorWrapper}>
        <SeparatorFullWidth />
      </View>
    );

    return row;
  });
}

const styleSheet = StyleSheet.create({
  separatorWrapper: {
    marginVertical: 10,
  },
});

export default createFragmentContainer(
  TripInfoMulticity,
  graphql`
    fragment TripInfoMulticity on BookingMulticity {
      trips {
        ...TripCities
        ...TripTimes
      }
    }
  `,
);
