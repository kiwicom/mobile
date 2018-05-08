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
    imageUrl={props.imageUrl}
    type={props.type}
    passengerCount={props.passengerCount}
    bookingId={idx(props.booking, _ => _.databaseId)}
    status={idx(props.booking, _ => _.status) || ''}
    departureCity={idx(props.booking, _ => _.start.airport.city.name) || ''}
    date={idx(props.booking, _ => _.start.time)}
    arrivalCity={idx(props.booking, _ => _.end.airport.city.name) || ''}
  />
);

export default createFragmentContainer(
  MulticityFlight,
  graphql`
    fragment MulticityFlight_booking on BookingMulticity {
      status
      databaseId
      end {
        airport {
          city {
            name
          }
        }
      }
      start {
        time
        airport {
          city {
            name
          }
        }
      }
    }
  `,
);
