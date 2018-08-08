// @flow strict

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Translation, DateUtils } from '@kiwicom/mobile-localization';
import idx from 'idx';

import ExploreText from '../ExploreText';
import type { BookingConfirmed_arrival } from './__generated__/BookingConfirmed_arrival.graphql';
import type { BookingConfirmed_departure } from './__generated__/BookingConfirmed_departure.graphql';

type Props = {|
  +arrival: BookingConfirmed_arrival,
  +departure: BookingConfirmed_departure,
|};

const BookingConfirmed = (props: Props) => {
  const departureTime = idx(props.departure, _ => _.time);
  if (departureTime == null) {
    return null;
  }
  const daysLeft = DateUtils.diffInDays(
    new Date(departureTime),
    DateUtils.getUTCToday(),
  );

  return (
    <ExploreText
      city={idx(props.arrival, _ => _.airport.city.name)}
      title={<Translation id="mmb.main_menu.explore_city.prepare_for_trip" />}
      text={
        <Translation
          id="mmb.main_menu.explore_city.your_trip_in_days"
          values={{
            city: idx(props.arrival, _ => _.airport.city.name),
            days: daysLeft,
          }}
        />
      }
    />
  );
};

export default createFragmentContainer(
  BookingConfirmed,
  graphql`
    fragment BookingConfirmed_departure on RouteStop {
      time
    }
    fragment BookingConfirmed_arrival on RouteStop {
      airport {
        city {
          name
        }
      }
    }
  `,
);
