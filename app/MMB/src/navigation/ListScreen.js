// @flow

import * as React from 'react';
import { HeaderTitle } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';
import { AuthContext } from '@kiwicom/mobile-relay';

import Flights from '../scenes/list/Flights';
import Flight from '../scenes/list/Flight';

export default function ListScreen() {
  return (
    <AuthContext.Consumer>
      {({ accessToken, simpleToken, bookingId }) => {
        if (accessToken !== null) {
          return <Flights />;
        }
        if (simpleToken && bookingId) {
          return <Flight bookingId={bookingId} simpleToken={simpleToken} />;
        }
        return null;
      }}
    </AuthContext.Consumer>
  );
}

ListScreen.navigationOptions = () => ({
  headerTitle: (
    <HeaderTitle>
      <Translation id="mmb.my_bookings.title.bookings" />
    </HeaderTitle>
  ),
});
