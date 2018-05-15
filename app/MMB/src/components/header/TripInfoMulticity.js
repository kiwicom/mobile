// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import RouteStop from './RouteStop';
import type { TripInfoMulticity as TripInfoMulticityType } from './__generated__/TripInfoMulticity.graphql';

type Props = {|
  data: TripInfoMulticityType,
|};

function TripInfoMulticity(props: Props) {
  const trips = idx(props, _ => _.data.trips) || [];

  return trips.map((trip, index) => (
    <React.Fragment key={index}>
      <RouteStop data={trip && trip.departure} />
      <RouteStop data={trip && trip.arrival} />
    </React.Fragment>
  ));
}

export default createFragmentContainer(
  TripInfoMulticity,
  graphql`
    fragment TripInfoMulticity on BookingMulticity {
      trips {
        departure {
          ...RouteStop
        }
        arrival {
          ...RouteStop
        }
      }
    }
  `,
);
