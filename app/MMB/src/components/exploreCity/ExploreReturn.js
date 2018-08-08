// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';
import { DateUtils } from '@kiwicom/mobile-localization';

import ExploreVariant from './exploreVariants/ExploreVariant';
import type { ExploreReturn as BookingType } from './__generated__/ExploreReturn.graphql';

type Props = {|
  +data: BookingType,
|};

const ExploreReturn = (props: Props) => {
  const outboundArrival = idx(props.data, _ => _.outbound.arrival.time);
  if (outboundArrival == null) {
    return null;
  }
  const outboundArrivalDate = new Date(outboundArrival);
  const outboundTravelled = DateUtils.getUTCNow() > outboundArrivalDate;

  const trip = outboundTravelled
    ? idx(props.data, _ => _.inbound)
    : idx(props.data, _ => _.outbound);

  return <ExploreVariant trip={trip} />;
};

export default createFragmentContainer(
  ExploreReturn,
  graphql`
    fragment ExploreReturn on BookingInterface {
      ... on BookingReturn {
        outbound {
          ...ExploreVariant_trip
          arrival {
            time
          }
        }
        inbound {
          ...ExploreVariant_trip
        }
      }
    }
  `,
);
