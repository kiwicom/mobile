// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';
import { DateUtils } from '@kiwicom/mobile-localization';

import ExploreText from './ExploreText';
import type { ExploreMulticity as BookingType } from './__generated__/ExploreMulticity.graphql';

type Props = {|
  +data: BookingType,
|};

const ExploreMulticity = (props: Props) => {
  const trips = idx(props.data, _ => _.trips) || [];
  const date = new Date(idx(props.data, _ => _.trips[0].departure.time) || 0);
  const daysLeft = DateUtils.diffInDays(date, DateUtils.getUTCToday());
  const index = trips.findIndex(
    trip =>
      new Date(idx(trip, _ => _.departure.time) || 0) > DateUtils.getUTCToday(),
  );
  const trip = idx(props.data, _ => _.trips[daysLeft > 0 ? 0 : index - 1]);

  return <ExploreText data={trip} />;
};

export default createFragmentContainer(
  ExploreMulticity,
  graphql`
    fragment ExploreMulticity on BookingInterface {
      ... on BookingMulticity {
        trips {
          departure {
            time
          }
          ...ExploreText
        }
      }
    }
  `,
);
