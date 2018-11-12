// @flow

import * as React from 'react';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';

import HotelDetailScreen from './HotelDetailScreen';
import type { SingleHotelContainerQueryResponse } from './__generated__/SingleHotelContainerQuery.graphql';
import { sanitizeDate } from '../GraphQLSanitizers';
import {
  type RoomConfigurationType,
  type ApiProvider,
  withHotelsContext,
} from '../HotelsContext';
import Stay22SingleHotel from './Stay22SingleHotel';

type PropsWithContext = {|
  +goBack: () => void,
  +currency: string,
  +getGuestCount: () => number,
  +hotelId: string,
  +checkin: Date,
  +checkout: Date,
  +roomsConfiguration: RoomConfigurationType,
  +apiProvider: ApiProvider,
|};

class SingleHotelContainer extends React.Component<PropsWithContext> {
  renderInnerComponent = ({
    availableHotel,
  }: SingleHotelContainerQueryResponse) => (
    <HotelDetailScreen
      availableHotel={availableHotel}
      roomsConfiguration={this.props.roomsConfiguration}
      goBack={this.props.goBack}
    />
  );

  render() {
    const { apiProvider, ...rest } = this.props;
    if (this.props.hotelId === '') {
      return null;
    }
    if (apiProvider === 'stay22') {
      return <Stay22SingleHotel {...rest} />;
    }
    return (
      <PublicApiRenderer
        query={graphql`
          query SingleHotelContainerQuery(
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

const select = ({
  currency,
  getGuestCount,
  checkin,
  checkout,
  roomsConfiguration,
  hotelId,
  apiProvider,
}) => ({
  currency,
  getGuestCount,
  checkin,
  checkout,
  roomsConfiguration,
  hotelId,
  apiProvider,
});

export default withHotelsContext(select)(SingleHotelContainer);
