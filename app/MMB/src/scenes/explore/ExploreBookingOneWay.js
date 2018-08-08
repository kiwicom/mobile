// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import idx from 'idx';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import ExploreDestinationsGroup from './ExploreDestinationsGroup';
import ExploreAirportGroup from './ExploreAirportGroup';
import type { ExploreBookingOneWay as ExploreBookingOneWayType } from './__generated__/ExploreBookingOneWay.graphql';

type Props = {|
  +data: ExploreBookingOneWayType,
|};

const ExploreBookingOneWay = (props: Props) => {
  const trip = idx(props.data, _ => _.trip);
  return (
    <ScrollView>
      <ExploreAirportGroup data={idx(props.data, _ => _.trip.legs)} />
      <ExploreDestinationsGroup data={[trip]} />
    </ScrollView>
  );
};

export default createFragmentContainer(
  ExploreBookingOneWay,
  graphql`
    fragment ExploreBookingOneWay on BookingOneWay {
      trip {
        ...ExploreDestinationsGroup
        legs {
          ...ExploreAirportGroup
        }
      }
    }
  `,
);
