// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import TripTimes from './TripTimes';
import type { TripInfoMulticity as TripInfoMulticityType } from './__generated__/TripInfoMulticity.graphql';

type Props = {|
  data: TripInfoMulticityType,
|};

function TripInfoMulticity(props: Props) {
  const trips = idx(props, _ => _.data.trips) || [];

  return trips.map((trip, index) => <TripTimes key={index} data={trip} />);
}

export default createFragmentContainer(
  TripInfoMulticity,
  graphql`
    fragment TripInfoMulticity on BookingMulticity {
      trips {
        ...TripTimes
      }
    }
  `,
);
