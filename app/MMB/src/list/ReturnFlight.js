// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import idx from 'idx';

import CityImage from './cityImage/CityImage';
import type { ReturnFlight_booking as ReturnFlightType } from './__generated__/ReturnFlight_booking.graphql';

type Props = {|
  imageUrl: string,
  type: string,
  passengerCount: number,
  booking: ReturnFlightType,
|};

const ReturnFlight = (props: Props) => (
  <CityImage
    arrival={idx(props.booking, _ => _.outbound.arrival)}
    departure={idx(props.booking, _ => _.outbound.departure)}
    imageUrl={props.imageUrl}
    type={props.type}
    passengerCount={props.passengerCount}
    bookingId={idx(props.booking, _ => _.databaseId)}
    status={idx(props.booking, _ => _.status) || ''}
  />
);

export default createFragmentContainer(
  ReturnFlight,
  graphql`
    fragment ReturnFlight_booking on BookingReturn {
      status
      databaseId
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
