// @flow strict

import * as React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { DateUtils } from '@kiwicom/mobile-localization';

import BookingConfirmed from './BookingConfirmed';
import PriorToDeparture from './PriorToDeparture';
import IsFlying from './IsFlying';
import type { ExploreVariant_trip } from './__generated__/ExploreVariant_trip.graphql';

type Props = {|
  +trip: ExploreVariant_trip,
|};

export const ExploreVariant = (props: Props) => {
  const legs = idx(props.trip, _ => _.legs) || [];
  const rawDate = idx(props.trip, _ => _.departure.time);

  if (rawDate == null) {
    return null;
  }

  const hoursToFlight = DateUtils.diffInHours(
    new Date(rawDate),
    DateUtils.getUTCNow(),
  );

  if (hoursToFlight > 8) {
    return (
      <BookingConfirmed
        departure={idx(props.trip, _ => _.legs[0].departure)}
        arrival={idx(props.trip, _ => _.arrival)}
      />
    );
  }
  if (hoursToFlight > 0) {
    return <PriorToDeparture data={idx(props.trip, _ => _.legs[0])} />;
  }

  const isFlyingLeg = legs.find(leg => {
    const legDeparture = new Date(idx(leg, _ => _.departure.time) || 0);
    const legArrival = new Date(idx(leg, _ => _.arrival.time) || 0);

    return (
      legDeparture >= DateUtils.getUTCNow() &&
      legArrival > DateUtils.getUTCNow()
    );
  });

  if (isFlyingLeg) {
    return <IsFlying data={idx(isFlyingLeg, _ => _.arrival)} />;
  }

  return null;
};

export default createFragmentContainer(
  ExploreVariant,
  graphql`
    fragment ExploreVariant_trip on Trip {
      departure {
        time
      }
      arrival {
        ...BookingConfirmed_arrival
      }
      legs {
        ...PriorToDeparture
        departure {
          ...BookingConfirmed_departure
          time
        }
        arrival {
          ...IsFlying
          time
        }
      }
    }
  `,
);
