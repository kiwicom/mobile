// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import idx from 'idx';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import ExploreAirportGroup from './ExploreAirportGroup';
import ExploreDestinationsGroup from './ExploreDestinationsGroup';
import type { ExploreBookingReturn as ExploreBookingReturnType } from './__generated__/ExploreBookingReturn.graphql';

type Props = {|
  +data: ExploreBookingReturnType,
|};

const ExploreBookingReturn = (props: Props) => {
  const inboundTrips = idx(props, _ => _.data.inbound);
  const outboundTrips = idx(props, _ => _.data.outbound);

  const inboundLegs = idx(props, _ => _.data.inbound.legs) || [];
  const outboundLegs = idx(props, _ => _.data.outbound.legs) || [];

  return (
    <ScrollView>
      <ExploreAirportGroup data={[...outboundLegs, ...inboundLegs]} />
      <ExploreDestinationsGroup data={[outboundTrips, inboundTrips]} />
    </ScrollView>
  );
};

export default createFragmentContainer(
  ExploreBookingReturn,
  graphql`
    fragment ExploreBookingReturn on BookingReturn {
      outbound {
        ...ExploreDestinationsGroup
        legs {
          ...ExploreAirportGroup
        }
      }
      inbound {
        ...ExploreDestinationsGroup
        legs {
          ...ExploreAirportGroup
        }
      }
    }
  `,
);
