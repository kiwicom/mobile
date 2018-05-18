// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import TripCities from './TripCities';
import TripTimes from './TripTimes';
import type { TripInfoOneWay as TripInfoOneWayType } from './__generated__/TripInfoOneWay.graphql';

type Props = {|
  data: TripInfoOneWayType,
|};

function TripInfoOneWay(props: Props) {
  const trip = idx(props, _ => _.data.trip);

  return (
    <React.Fragment>
      <TripCities data={trip} type="ONE_WAY" />
      <TripTimes data={trip} />;
    </React.Fragment>
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
