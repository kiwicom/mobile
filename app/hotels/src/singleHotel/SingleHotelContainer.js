// @flow

import * as React from 'react';

import {
  type RoomConfigurationType,
  type ApiProvider,
  type HotelsContextState,
  withHotelsContext,
} from '../HotelsContext';
import Stay22SingleHotel from './Stay22SingleHotel';
import BookingComSingleHotel from './BookingComSingleHotel';

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

const SingleHotelContainer = ({ apiProvider, ...rest }: PropsWithContext) => {
  if (rest.hotelId === '') {
    return null;
  }
  if (apiProvider === 'stay22') {
    return <Stay22SingleHotel {...rest} />;
  }
  return <BookingComSingleHotel {...rest} />;
};

const select = ({
  currency,
  getGuestCount,
  checkin,
  checkout,
  roomsConfiguration,
  hotelId,
  apiProvider,
}: HotelsContextState) => ({
  currency,
  getGuestCount,
  checkin,
  checkout,
  roomsConfiguration,
  hotelId,
  apiProvider,
});

export default withHotelsContext(select)(SingleHotelContainer);
