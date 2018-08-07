// @flow strict

import * as React from 'react';
import idx from 'idx';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import { DateUtils } from '@kiwicom/mobile-localization';

import BookingConfirmed from './BookingConfirmed';
import type { ExploreVariant as BookingType } from './__generated__/ExploreVariant.graphql';

type Props = {|
  +data: BookingType,
|};

const ExploreVariant = (props: Props) => {
  const rawDate = idx(props.data, _ => _.departure.time);

  if (rawDate == null) {
    return null;
  }

  const hoursToFlight = DateUtils.diffInHours(
    new Date(rawDate),
    DateUtils.getUTCNow(),
  );

  if (hoursToFlight > 8) {
    return <BookingConfirmed data={idx(props.data, _ => _.departure)} />;
  }
  return null;
};

export default createFragmentContainer(
  ExploreVariant,
  graphql`
    fragment ExploreVariant on Trip {
      departure {
        ...BookingConfirmed
        time
      }
    }
  `,
);
