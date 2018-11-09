// @flow strict

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';

import CityImageContainer from './cityImage/CityImageContainer';
import type { OneWayFlight_booking as OneWayFlightType } from './__generated__/OneWayFlight_booking.graphql';

type Props = {|
  +imageUrl: string,
  +type: string,
  +booking: OneWayFlightType,
|};

const OneWayFlight = (props: Props) => (
  <CityImageContainer
    image={props.booking}
    arrival={props.booking.trip?.arrival}
    departure={props.booking.trip?.departure}
    type="ONE_WAY"
  />
);

export default createFragmentContainer(
  OneWayFlight,
  graphql`
    fragment OneWayFlight_booking on BookingOneWay {
      ...CityImageContainer_image
      trip {
        departure {
          ...CityImageContainer_departure
        }
        arrival {
          ...CityImageContainer_arrival
        }
      }
    }
  `,
);
