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
  HotelsContext,
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

const renderInnerComponent = ({
  availableHotel,
}: SingleHotelMapScreenQueryResponse) => <SingleMap hotel={availableHotel} />;

function SingleHotelMapScreen(props: Props) {
  const {
    currency,
    roomsConfiguration,
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
      render={renderInnerComponent}
    />
  );
}

export default withNavigation(SingleHotelMapScreen);
