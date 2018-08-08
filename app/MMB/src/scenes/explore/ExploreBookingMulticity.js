// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import idx from 'idx';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import ExploreDestinationsGroup from './ExploreDestinationsGroup';
import ExploreAirportGroup from './ExploreAirportGroup';
import type { ExploreBookingMulticity as ExploreBookingMulticityType } from './__generated__/ExploreBookingMulticity.graphql';

type Props = {|
  +data: ExploreBookingMulticityType,
|};

const ExploreBookingMulticity = (props: Props) => {
  const trips = idx(props, _ => _.data.trips) || [];
  const legs = trips.reduce((acc, curr) => {
    const legs = idx(curr, _ => _.legs) || [];
    return [...acc, ...legs];
  }, []);

  return (
    <ScrollView>
      <ExploreAirportGroup data={legs} />
      <ExploreDestinationsGroup data={trips} />
    </ScrollView>
  );
};

export default createFragmentContainer(
  ExploreBookingMulticity,
  graphql`
    fragment ExploreBookingMulticity on BookingMulticity {
      trips {
        ...ExploreDestinationsGroup
        legs {
          ...ExploreAirportGroup
        }
      }
    }
  `,
);
