// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/mobile-relay';

import Location from './location/Location';
import Description from './description/Description';
import HotelReview from './HotelReview';
import type { HotelInformation_hotel as HotelType } from './__generated__/HotelInformation_hotel.graphql';

type Props = {|
  +hotel: ?HotelType,
|};

const HotelInformation = (props: Props) => (
  <React.Fragment>
    <Location hotel={props.hotel} />
    <Description hotel={props.hotel} />
    <HotelReview data={props.hotel} />
  </React.Fragment>
);

export default createFragmentContainer(
  HotelInformation,
  graphql`
    fragment HotelInformation_hotel on HotelInterface {
      ...Location_hotel
      ...Description_hotel
      ...HotelReview
    }
  `,
);
