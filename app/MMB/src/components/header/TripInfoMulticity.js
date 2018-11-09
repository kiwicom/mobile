// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { StyleSheet, Color } from '@kiwicom/mobile-shared';
import { SeparatorFullWidth } from '@kiwicom/mobile-navigation';
import last from 'lodash/last';

import ColorStrip from './ColorStrip';
import TripCities from './TripCities';
import TripTimes from './TripTimes';
import type { TripInfoMulticity as TripInfoMulticityType } from './__generated__/TripInfoMulticity.graphql';

type Props = {|
  data: TripInfoMulticityType,
|};

function TripInfoMulticity(props: Props) {
  const trips = props.data.trips ?? [];

  return trips.map((trip, index) => {
    const color = Color.tripColorCodes[index] ?? last(Color.tripColorCodes);
    const row = (
      <View style={styleSheet.row} key={index}>
        <ColorStrip color={color} />
        <View style={styleSheet.separatorWrapper}>
          <View style={styleSheet.itemContainer}>
            {/* ONE_WAY because we are printing it for every leg (one way) */}
            <TripCities data={trip} type="ONE_WAY" />
            <TripTimes data={trip} />
          </View>

          <View style={styleSheet.separatorWrapper}>
            <SeparatorFullWidth />
          </View>
        </View>
      </View>
    );

    return row;
  });
}

const styleSheet = StyleSheet.create({
  separatorWrapper: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  itemContainer: {
    flex: 1,
    padding: 10,
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
