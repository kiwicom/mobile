// @flow strict

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';
import { Translation, DateUtils } from '@kiwicom/mobile-localization';
import idx from 'idx';

import ExploreText from '../ExploreText';
import type { BookingConfirmed as Booking } from './__generated__/BookingConfirmed.graphql';

type Props = {|
  +data: Booking,
|};

const BookingConfirmed = (props: Props) => {
  const departureTime = idx(props.data, _ => _.time);
  if (departureTime == null) {
    return null;
  }
  const daysLeft = DateUtils.diffInDays(
    new Date(departureTime),
    DateUtils.getUTCToday(),
  );

  return (
    <ExploreText
      city={idx(props.data, _ => _.airport.city.name)}
      title={<Translation id="mmb.main_menu.explore_city.prepare_for_trip" />}
      text={
        <Translation
          id="mmb.main_menu.explore_city.your_trip_in_days"
          values={{
            city: idx(props.data, _ => _.airport.city.name),
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
    fragment BookingConfirmed on RouteStop {
      time
      airport {
        city {
          name
        }
      }
    }
  `,
);
