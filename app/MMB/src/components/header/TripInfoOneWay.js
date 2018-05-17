// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import TripTimes from './TripTimes';
import type { TripInfoOneWay as TripInfoOneWayType } from './__generated__/TripInfoOneWay.graphql';

type Props = {|
  data: TripInfoOneWayType,
|};

function TripInfoOneWay(props: Props) {
  const trip = idx(props, _ => _.data.trip);

  return <TripTimes data={trip} />;
}

export default createFragmentContainer(
  TripInfoOneWay,
  graphql`
    fragment TripInfoOneWay on BookingOneWay {
      trip {
        ...TripTimes
      }
    }
  `,
);
