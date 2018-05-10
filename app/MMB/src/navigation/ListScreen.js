// @flow

import * as React from 'react';
import { HeaderTitle } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';

import Flights from '../list/Flights';

export default function ListScreen() {
  return <Flights />;
}

ListScreen.navigationOptions = () => ({
  title: (
    <HeaderTitle>
      <Translation id="mmb.my_bookings.title.bookings" />
    </HeaderTitle>
  ),
});
