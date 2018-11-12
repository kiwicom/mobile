// @flow

import * as React from 'react';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';

import HotelDetailScreen from './HotelDetailScreen';
import type { SingleHotelContainerQueryResponse } from './__generated__/SingleHotelContainerQuery.graphql';
import { sanitizeDate } from '../GraphQLSanitizers';
import {
  type RoomConfigurationType,
  withHotelsContext,
} from '../HotelsContext';
import SingleHotelContext, {
  type State as SingleHotelState,
} from '../navigation/singleHotel/SingleHotelContext';
import Stay22SingleHotel from './Stay22SingleHotel';

type PropsWithContext = {|
  ...Props,
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
  +currency: string,
  +getGuestCount: () => number,
|};

class SingleHotelContainerWithContext extends React.Component<Props> {
  renderInner = ({
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
      ...this.props,
    };

    if (apiProvider === 'booking') {
      return <SingleHotelContainer {...props} />;
    }
    return <Stay22SingleHotel {...props} />;
  };

  render() {
    return (
      <SingleHotelContext.Consumer>
        {this.renderInner}
      </SingleHotelContext.Consumer>
    );
  }
}

const select = ({ currency, getGuestCount }) => ({ currency, getGuestCount });

export default withHotelsContext(select)(SingleHotelContainerWithContext);
