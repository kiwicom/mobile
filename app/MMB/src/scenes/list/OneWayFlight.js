// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import CityImage from './cityImage/CityImage';
import type { OneWayFlight_booking as OneWayFlightType } from './__generated__/OneWayFlight_booking.graphql';

type Props = {|
  imageUrl: string,
  type: string,
  booking: OneWayFlightType,
  id: string,
|};

const OneWayFlight = (props: Props) => (
  <CityImage
    image={props.booking}
    arrival={idx(props.booking, _ => _.trip.arrival)}
    departure={idx(props.booking, _ => _.trip.departure)}
    type="ONE_WAY"
    id={props.id}
  />
);

export default createFragmentContainer(
  OneWayFlight,
  graphql`
    fragment OneWayFlight_booking on BookingOneWay {
      ...CityImage_image
      trip {
        departure {
          ...CityImage_departure
        }
        arrival {
          ...CityImage_arrival
        }
      }
    }
  `,
);
