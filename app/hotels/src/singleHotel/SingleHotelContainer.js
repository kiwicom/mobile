// @flow

import * as React from 'react';

import { type HotelsContextState, HotelsContext } from '../HotelsContext';
import Stay22SingleHotel from './Stay22SingleHotel';
import BookingComSingleHotel from './BookingComSingleHotel';

type Props = {|
  +goBack: () => void,
|};

const SingleHotelContainer = ({ goBack }: Props) => {
  const {
    currency,
    getGuestCount,
    checkin,
    checkout,
    roomsConfiguration,
    hotelId,
    apiProvider,
  }: HotelsContextState = React.useContext(HotelsContext);

  if (
    hotelId === '' ||
    checkin == null ||
    checkout == null ||
    roomsConfiguration == null
  ) {
    return null;
  }
  const props = {
    currency,
    getGuestCount,
    checkin,
    checkout,
    roomsConfiguration,
    hotelId,
    goBack,
  };
  if (apiProvider === 'stay22') {
    return <Stay22SingleHotel {...props} />;
  }
  return <BookingComSingleHotel {...props} />;
};

export default SingleHotelContainer;
