// @flow

import * as React from 'react';
import { HeaderTitle } from '@kiwicom/mobile-navigation';
import { Translation } from '@kiwicom/mobile-localization';

import FlightList from '../list/Flights';

type Props = {|
  accessToken: string,
|};

export default function MMBListScreen(props: Props) {
  return <FlightList accessToken={props.accessToken} />;
}

MMBListScreen.navigationOptions = () => ({
  title: (
    <HeaderTitle>
      <Translation id="mmb.my_bookings.title.bookings" />
    </HeaderTitle>
  ),
});
