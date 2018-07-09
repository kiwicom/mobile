// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import CityImageContainer from './cityImage/CityImageContainer';
import type { ReturnFlight_booking as ReturnFlightType } from './__generated__/ReturnFlight_booking.graphql';

type Props = {|
  imageUrl: string,
  type: string,
  booking: ReturnFlightType,
|};

const ReturnFlight = (props: Props) => (
  <CityImageContainer
    image={props.booking}
    arrival={idx(props.booking, _ => _.outbound.arrival)}
    departure={idx(props.booking, _ => _.outbound.departure)}
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
