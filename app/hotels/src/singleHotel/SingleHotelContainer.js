// @flow

import * as React from 'react';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';

import HotelDetailScreen from './HotelDetailScreen';
import type { SingleHotelContainerQueryResponse } from './__generated__/SingleHotelContainerQuery.graphql';
import { sanitizeDate } from '../GraphQLSanitizers';
import HotelsContext, { type RoomConfigurationType } from '../HotelsContext';
import SingleHotelContext from '../navigation/singleHotel/SingleHotelContext';

type PropsWithContext = {|
  ...Props,
  +currency: string,
  +hotelId: string,
  +checkin: Date,
  +checkout: Date,
  +roomsConfiguration: RoomConfigurationType,
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
    const {
      currency,
      checkin,
      checkout,
      roomsConfiguration,
      hotelId,
    } = this.props;
    if (hotelId === '') {
      return null;
    }
    return (
      <PublicApiRenderer
        query={graphql`
          query SingleHotelContainerQuery(
            $search: AvailableHotelSearchInput!
            $options: AvailableHotelOptionsInput
          ) {
            availableHotel(search: $search, options: $options) {
              ...HotelDetailScreen_availableHotel
            }
          }
        `}
        variables={{
          search: {
            hotelId,
            roomsConfiguration,
            checkin: sanitizeDate(checkin),
            checkout: sanitizeDate(checkout),
          },
          options: { currency },
        }}
        render={this.renderInnerComponent}
      />
    );
  }
}

type Props = {|
  +goBack: () => void,
|};

export default function SingleHotelContainerWithContext(props: Props) {
  return (
    <SingleHotelContext.Consumer>
      {({ checkin, checkout, roomsConfiguration, hotelId }) => (
        <HotelsContext.Consumer>
          {({ currency }) => (
            <SingleHotelContainer
              currency={currency}
              hotelId={hotelId}
              checkin={checkin}
              checkout={checkout}
              roomsConfiguration={roomsConfiguration}
              {...props}
            />
          )}
        </HotelsContext.Consumer>
      )}
    </SingleHotelContext.Consumer>
  );
}
