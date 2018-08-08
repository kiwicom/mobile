// @flow strict

import * as React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { DateUtils } from '@kiwicom/mobile-localization';

import BookingConfirmed from './BookingConfirmed';
import type { ExploreVariant_trip } from './__generated__/ExploreVariant_trip.graphql';

type Props = {|
  +trip: ExploreVariant_trip,
|};

const ExploreVariant = (props: Props) => {
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
        departure {
          ...BookingConfirmed_departure
          time
        }
      }
    }
  `,
);
