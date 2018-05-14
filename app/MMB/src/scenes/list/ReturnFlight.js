// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import CityImage from './cityImage/CityImage';
import type { ReturnFlight_booking as ReturnFlightType } from './__generated__/ReturnFlight_booking.graphql';

type Props = {|
  imageUrl: string,
  type: string,
  booking: ReturnFlightType,
|};

const ReturnFlight = (props: Props) => (
  <CityImage
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
      ...CityImage_image
      outbound {
        arrival {
          ...CityImage_arrival
        }
        departure {
          ...CityImage_departure
        }
      }
    }
  `,
);
