// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import CityImageContainer from './cityImage/CityImageContainer';
import type { OneWayFlight_booking as OneWayFlightType } from './__generated__/OneWayFlight_booking.graphql';

type Props = {|
  imageUrl: string,
  type: string,
  booking: OneWayFlightType,
|};

const OneWayFlight = (props: Props) => (
  <CityImageContainer
    image={props.booking}
    arrival={idx(props.booking, _ => _.trip.arrival)}
    departure={idx(props.booking, _ => _.trip.departure)}
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
