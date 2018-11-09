// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import CityImageContainer from './cityImage/CityImageContainer';
import type { ReturnFlight_booking as ReturnFlightType } from './__generated__/ReturnFlight_booking.graphql';

type Props = {|
  +imageUrl: string,
  +type: string,
  +booking: ReturnFlightType,
|};

const ReturnFlight = (props: Props) => (
  <CityImageContainer
    image={props.booking}
    arrival={props.booking.outbound?.arrival}
    departure={props.booking.outbound?.departure}
    type="RETURN"
  />
);

export default createFragmentContainer(
  ReturnFlight,
  graphql`
    fragment ReturnFlight_booking on BookingReturn {
      ...CityImageContainer_image
      outbound {
        arrival {
          ...CityImageContainer_arrival
        }
        departure {
          ...CityImageContainer_departure
        }
      }
    }
  `,
);
