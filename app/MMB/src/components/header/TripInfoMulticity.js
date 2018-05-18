// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import TripCities from './TripCities';
import TripTimes from './TripTimes';
import type { TripInfoMulticity as TripInfoMulticityType } from './__generated__/TripInfoMulticity.graphql';

type Props = {|
  data: TripInfoMulticityType,
|};

function TripInfoMulticity(props: Props) {
  const trips = idx(props, _ => _.data.trips) || [];

  return trips.map((trip, index) => (
    <React.Fragment key={index}>
      {/* ONE_WAY because we are printing it for every leg (one way) */}
      <TripCities data={trip} type="ONE_WAY" />
      <TripTimes data={trip} />
    </React.Fragment>
  ));
}

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
