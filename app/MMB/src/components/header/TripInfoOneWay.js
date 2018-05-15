// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import RouteStop from './RouteStop';
import type { TripInfoOneWay as TripInfoOneWayType } from './__generated__/TripInfoOneWay.graphql';

type Props = {|
  data: TripInfoOneWayType,
|};

function TripInfoOneWay(props: Props) {
  const trip = idx(props, _ => _.data.trip);

  return (
    <React.Fragment>
      <RouteStop data={trip && trip.departure} />
      <RouteStop data={trip && trip.arrival} />
    </React.Fragment>
  );
}

export default createFragmentContainer(
  TripInfoOneWay,
  graphql`
    fragment TripInfoOneWay on BookingOneWay {
      trip {
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
