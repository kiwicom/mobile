// @flow strict

import * as React from 'react';
import { graphql } from '@kiwicom/mobile-relay';

import HotelDetailScreen from './HotelDetailScreen';
import type { BookingComSingleHotelQueryResponse } from './__generated__/BookingComSingleHotelQuery.graphql';
import { sanitizeDate } from '../GraphQLSanitizers';
import { type RoomConfigurationType } from '../HotelsContext';
import SingleHotelSearch from './SingleHotelSearch';

type Props = {|
  +goBack: () => void,
  +currency: string,
  +guestCount: number,
  +hotelId: string,
  +checkin: Date,
  +checkout: Date,
  +roomsConfiguration: RoomConfigurationType,
|};

export default class BookingComSingleHotel extends React.Component<Props> {
  renderInnerComponent = ({
    availableHotel,
  }: BookingComSingleHotelQueryResponse) => (
    <HotelDetailScreen
      availableHotel={availableHotel}
      roomsConfiguration={this.props.roomsConfiguration}
      goBack={this.props.goBack}
    />
  );

  render() {
    return (
      <SingleHotelSearch
        onClose={this.props.goBack}
        query={graphql`
          query BookingComSingleHotelQuery(
            $search: AvailableHotelSearchInput!
            $options: AvailableHotelOptionsInput
          ) {
            availableHotel(search: $search, options: $options) {
              ... on HotelAvailabilityInterface {
                ...HotelDetailScreen_availableHotel
              }
            }
          }
        `}
        variables={{
          search: {
            hotelId: this.props.hotelId,
            roomsConfiguration: this.props.roomsConfiguration,
            checkin: sanitizeDate(this.props.checkin),
            checkout: sanitizeDate(this.props.checkout),
          },
          options: { currency: this.props.currency },
        }}
        render={this.renderInnerComponent}
      />
    );
  }
}
