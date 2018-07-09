// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import CityImageContainer from './cityImage/CityImageContainer';
import type { MulticityFlight_booking as MulticityFlightType } from './__generated__/MulticityFlight_booking.graphql';

type Props = {|
  imageUrl: string,
  type: string,
  booking: MulticityFlightType,
|};

const MulticityFlight = (props: Props) => (
  <CityImageContainer
    image={props.booking}
    arrival={idx(props.booking, _ => _.end)}
    departure={idx(props.booking, _ => _.start)}
    type="MULTICITY"
  />
);

export default createFragmentContainer(
  MulticityFlight,
  graphql`
    fragment MulticityFlight_booking on BookingMulticity {
      ...CityImageContainer_image
      end {
        ...CityImageContainer_arrival
      }
      start {
        ...CityImageContainer_departure
      }
    }
  `,
);
