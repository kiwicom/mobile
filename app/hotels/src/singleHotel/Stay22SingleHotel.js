// @flow strict

import * as React from 'react';
import { graphql } from '@kiwicom/mobile-relay';

import HotelDetailScreen from './HotelDetailScreen';
import { type RoomConfigurationType } from '../HotelsContext';
import { sanitizeDate } from '../GraphQLSanitizers';
import type { Stay22SingleHotelQueryResponse } from './__generated__/Stay22SingleHotelQuery.graphql';
import SingleHotelSearch from './SingleHotelSearch';

type Props = {|
  +goBack: () => void,
  +currency: string,
  +hotelId: string,
  +checkin: Date,
  +checkout: Date,
  +roomsConfiguration: RoomConfigurationType,
  +getGuestCount: () => number,
|};

export default class Stay22SingleHotel extends React.Component<Props> {
  renderInner = ({ stay22HotelDetail }: Stay22SingleHotelQueryResponse) => (
    <HotelDetailScreen
      availableHotel={stay22HotelDetail}
      roomsConfiguration={this.props.roomsConfiguration}
      goBack={this.props.goBack}
      paymentLink={stay22HotelDetail?.paymentLink}
    />
  );

  render() {
    const { currency, checkin, checkout, hotelId, goBack } = this.props;
    if (hotelId === '') {
      return null;
    }
    return (
      <SingleHotelSearch
        onClose={goBack}
        query={graphql`
          query Stay22SingleHotelQuery(
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
              ...HotelDetailScreen_availableHotel
              paymentLink
            }
          }
        `}
        variables={{
          id: hotelId,
          guests: this.props.getGuestCount(),
          checkin: sanitizeDate(checkin),
          checkout: sanitizeDate(checkout),
          currency,
        }}
        render={this.renderInner}
      />
    );
  }
}
