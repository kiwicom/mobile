// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import idx from 'idx';

import CityImage from './cityImage/CityImage';
import type { MulticityFlight_booking as MulticityFlightType } from './__generated__/MulticityFlight_booking.graphql';

type Props = {|
  imageUrl: string,
  type: string,
  passengerCount: number,
  booking: MulticityFlightType,
|};

const MulticityFlight = (props: Props) => (
  <CityImage
    arrival={idx(props.booking, _ => _.end)}
    departure={idx(props.booking, _ => _.start)}
    imageUrl={props.imageUrl}
    type={props.type}
    passengerCount={props.passengerCount}
    bookingId={idx(props.booking, _ => _.databaseId)}
    status={idx(props.booking, _ => _.status) || ''}
  />
);

export default createFragmentContainer(
  MulticityFlight,
  graphql`
    fragment MulticityFlight_booking on BookingMulticity {
      status
      databaseId
      end {
        ...CityImage_arrival
      }
      start {
        ...CityImage_departure
      }
    }
  `,
);
