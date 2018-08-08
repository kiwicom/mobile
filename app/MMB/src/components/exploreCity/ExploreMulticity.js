// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';
import { DateUtils } from '@kiwicom/mobile-localization';

import ExploreVariant from './exploreVariants/ExploreVariant';
import type { ExploreMulticity as BookingType } from './__generated__/ExploreMulticity.graphql';

type Props = {|
  +data: BookingType,
|};

const ExploreMulticity = (props: Props) => {
  const trips = idx(props.data, _ => _.trips) || [];
  const tripHasStarted =
    DateUtils.getUTCNow() > new Date(idx(trips, _ => _[0].departure.time) || 0);
  let trip;

  if (!tripHasStarted) {
    trip = trips[0];
  }

  if (trip == null) {
    return null;
  }

  return <ExploreVariant trip={trip} />;
};

export default createFragmentContainer(
  ExploreMulticity,
  graphql`
    fragment ExploreMulticity on BookingInterface {
      ... on BookingMulticity {
        trips {
          arrival {
            time
          }
          departure {
            time
          }
          ...ExploreVariant_trip
        }
      }
    }
  `,
);
