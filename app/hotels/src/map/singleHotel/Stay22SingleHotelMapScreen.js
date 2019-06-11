// @flow

import * as React from 'react';
import { graphql } from '@kiwicom/mobile-relay';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import { sanitizeDate } from '../../GraphQLSanitizers';
import { HotelsContext, type HotelsContextState } from '../../HotelsContext';
import type { Stay22SingleHotelMapScreenQueryResponse } from './__generated__/Stay22SingleHotelMapScreenQuery.graphql';
import SingleMap from './SingleMap';
import SingleMapQueryRenderer from './SingleMapQueryRenderer';

type Props = {|
  +navigation: NavigationType,
  +currency: string,
  +getGuestCount: () => number,
  +hotelId: string,
  +checkin: Date,
  +checkout: Date,
|};

const renderInner = (props: Stay22SingleHotelMapScreenQueryResponse) => (
  <SingleMap hotel={props.stay22HotelDetail} />
);

function Stay22SingleHotelMapScreen(props: Props) {
  const {
    guestCount,
    currency,
    hotelId,
    checkin,
    checkout,
  }: HotelsContextState = React.useContext(HotelsContext);

  function goBack() {
    props.navigation.goBack(null);
  }

  return (
    <SingleMapQueryRenderer
      onClose={goBack}
      query={graphql`
        query Stay22SingleHotelMapScreenQuery(
          $id: ID!
          $guests: Int!
          $currency: Currency
          $checkin: Date!
          $checkout: Date!
        ) {
          stay22HotelDetail(
            id: $id
            guests: $guests
            currency: $currency
            checkin: $checkin
            checkout: $checkout
          ) {
            ...SingleMap_hotel
          }
        }
      `}
      variables={{
        checkin: sanitizeDate(checkin),
        checkout: sanitizeDate(checkout),
        id: hotelId,
        guests: guestCount,
        currency,
      }}
      render={renderInner}
    />
  );
}

export default withNavigation(Stay22SingleHotelMapScreen);
