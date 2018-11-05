// @flow

import * as React from 'react';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';

import HotelDetailScreen from './HotelDetailScreen';
import type { SingleHotelContainerQueryResponse } from './__generated__/SingleHotelContainerQuery.graphql';
import { sanitizeDate } from '../GraphQLSanitizers';
import HotelsContext, {
  type RoomConfigurationType,
  type State as HotelsState,
} from '../HotelsContext';
import SingleHotelContext, {
  type State as SingleHotelState,
} from '../navigation/singleHotel/SingleHotelContext';
import Stay22SingleHotel from './Stay22SingleHotel';

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
              ... on HotelAvailabilityInterface {
                ...HotelDetailScreen_availableHotel
              }
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

export default class SingleHotelContainerWithContext extends React.Component<
  Props,
> {
  renderHotelsContext = ({ currency, getGuestCount }: HotelsState) => (
    <SingleHotelContext.Consumer>
      {this.renderSingleHotelsContext(currency, getGuestCount)}
    </SingleHotelContext.Consumer>
  );

  renderSingleHotelsContext = (
    currency: $PropertyType<HotelsState, 'currency'>,
    getGuestCount: $PropertyType<HotelsState, 'getGuestCount'>,
  ) => ({
    checkin,
    checkout,
    roomsConfiguration,
    hotelId,
    apiProvider,
  }: SingleHotelState) => {
    const props = {
      checkin,
      checkout,
      roomsConfiguration,
      hotelId,
      currency,
      ...this.props,
    };
    if (apiProvider === 'booking') {
      return <SingleHotelContainer {...props} />;
    }
    return <Stay22SingleHotel {...props} getGuestCount={getGuestCount} />;
  };

  render() {
    return (
      <HotelsContext.Consumer>
        {this.renderHotelsContext}
      </HotelsContext.Consumer>
    );
  }
}
