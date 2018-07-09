// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/mobile-shared';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import TripCities from './TripCities';
import TripTimes from './TripTimes';
import ColorStrip from './ColorStrip';
import type { TripInfoOneWay as TripInfoOneWayType } from './__generated__/TripInfoOneWay.graphql';

type Props = {|
  data: TripInfoOneWayType,
|};

function TripInfoOneWay(props: Props) {
  const trip = idx(props, _ => _.data.trip);

  return (
    <View style={styles.row}>
      <ColorStrip />
      <View style={styles.column}>
        <TripCities data={trip} type="ONE_WAY" />
        <TripTimes data={trip} />
      </View>
    </View>
  );
}

export default createFragmentContainer(
  TripInfoOneWay,
  graphql`
    fragment TripInfoOneWay on BookingOneWay {
      trip {
        ...TripCities
        ...TripTimes
      }
    }
  `,
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  column: {
    padding: 10,
    flex: 1,
  },
});
