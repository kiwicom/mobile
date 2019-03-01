// @flow

import * as React from 'react';
import { graphql } from '@kiwicom/mobile-relay';
import {
  withNavigation,
  type NavigationType,
} from '@kiwicom/mobile-navigation';

import type { AvailableHotelSearchInput } from '../../singleHotel/AvailableHotelSearchInput';
import type { SingleHotelMapScreenQueryResponse } from './__generated__/SingleHotelMapScreenQuery.graphql';
import { sanitizeDate } from '../../GraphQLSanitizers';
import SingleMap from './SingleMap';
import {
  withHotelsContext,
  type RoomConfigurationType,
  type HotelsContextState,
} from '../../HotelsContext';
import SingleMapQueryRenderer from './SingleMapQueryRenderer';

type Props = {|
  +currency: string,
  +search: AvailableHotelSearchInput,
  +navigation: NavigationType,
  +roomsConfiguration: RoomConfigurationType,
  +hotelId: string,
  +checkin: Date,
  +checkout: Date,
|};

class SingleHotelMapScreen extends React.Component<Props> {
  goBack = () => {
    this.props.navigation.goBack(null);
  };

  renderInnerComponent = ({
    availableHotel,
  }: SingleHotelMapScreenQueryResponse) => <SingleMap hotel={availableHotel} />;

  render() {
    const {
      currency,
      roomsConfiguration,
      checkin,
      checkout,
      hotelId,
    } = this.props;
    return (
      <SingleMapQueryRenderer
        onClose={this.goBack}
        query={graphql`
          query SingleHotelMapScreenQuery(
            $search: AvailableHotelSearchInput!
            $options: AvailableHotelOptionsInput
          ) {
            availableHotel(search: $search, options: $options) {
              ...SingleMap_hotel
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

const select = ({
  currency,
  roomsConfiguration,
  hotelId,
  checkin,
  checkout,
}: HotelsContextState) => ({
  currency,
  roomsConfiguration,
  hotelId,
  checkin,
  checkout,
});

export default withHotelsContext(select)(withNavigation(SingleHotelMapScreen));
