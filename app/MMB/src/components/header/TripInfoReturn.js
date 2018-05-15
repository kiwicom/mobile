// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import RouteStop from './RouteStop';
import type { TripInfoReturn as TripInfoReturnType } from './__generated__/TripInfoReturn.graphql';

type Props = {|
  data: TripInfoReturnType,
|};

function TripInfoReturn(props: Props) {
  const data = idx(props, _ => _.data);
  const outbound = idx(data, _ => _.outbound);
  const inbound = idx(data, _ => _.inbound);

  return (
    <React.Fragment>
      <RouteStop data={outbound && outbound.departure} />
      <RouteStop data={outbound && outbound.arrival} />

      <RouteStop data={inbound && inbound.departure} />
      <RouteStop data={inbound && inbound.arrival} />
    </React.Fragment>
  );
}

export default createFragmentContainer(
  TripInfoReturn,
  graphql`
    fragment TripInfoReturn on BookingReturn {
      outbound {
        departure {
          ...RouteStop
        }
        arrival {
          ...RouteStop
        }
      }

      inbound {
        departure {
          ...RouteStop
        }
        arrival {
          ...RouteStop
        }
      }
    }
  `,
);
