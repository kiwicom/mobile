// @flow

import * as React from 'react';
import { HeaderTitle } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';

import Flights from '../scenes/list/Flights';

export default function ListScreen() {
  return <Flights />;
}

ListScreen.navigationOptions = () => ({
  headerTitle: (
    <HeaderTitle>
      <Translation id="mmb.my_bookings.title.bookings" />
    </HeaderTitle>
  ),
});
