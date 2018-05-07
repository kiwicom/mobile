// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import idx from 'idx';

import CityImage from './CityImage';
import type { OneWayFlight_booking as OneWayFlightType } from './__generated__/OneWayFlight_booking.graphql';

type Props = {|
  imageUrl: string,
  type: string,
  passengerCount: number,
  booking: OneWayFlightType,
|};

const OneWayFlight = (props: Props) => (
  <CityImage
    imageUrl={props.imageUrl}
    type={props.type}
    passengerCount={props.passengerCount}
    bookingId={idx(props.booking, _ => _.databaseId)}
    status={idx(props.booking, _ => _.status) || ''}
    departureCity={
      idx(props.booking, _ => _.trip.departure.airport.city.name) || ''
    }
    date={idx(props.booking, _ => _.trip.departure.time)}
    arrivalCity={
      idx(props.booking, _ => _.trip.arrival.airport.city.name) || ''
    }
  />
);

export default createFragmentContainer(
  OneWayFlight,
  graphql`
    fragment OneWayFlight_booking on BookingOneWay {
      databaseId
      status
      trip {
        departure {
          time
          airport {
            city {
              name
            }
          }
        }
        arrival {
          airport {
            city {
              name
            }
          }
        }
      }
    }
  `,
);
