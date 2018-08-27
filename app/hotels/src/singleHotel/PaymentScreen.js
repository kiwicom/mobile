// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import {
  WebView,
  Logger,
  type WebViewStateChangeEvent,
} from '@kiwicom/mobile-shared';
import { DateUtils } from '@kiwicom/mobile-localization';
import querystring from 'querystring';

import { sanitizeDate } from '../GraphQLSanitizers';
import { withHotelsContext } from '../HotelsContext';

export type PaymentParameters = {|
  +hotelId: number,
  +checkin: Date,
  +checkout: Date,
  +rooms: Array<{|
    +id: string,
    +count: number, // how many rooms with this ID?
  |}>,
  +affiliateId: string,
  +language: string,
  +currency: string,
  +version: string,
|};

export class PaymentScreen extends React.Component<PaymentParameters> {
  componentDidMount = () => {
    Logger.ancillaryDisplayed(Logger.Type.ANCILLARY_STEP_PAYMENT);
  };

  onNavigationStateChange = (event: WebViewStateChangeEvent) => {
    if (!event.loading && event.url.includes('booking.com/confirmation')) {
      Logger.ancillaryPurchased(Logger.Type.ANCILLARY_STEP_PAYMENT);
    }
  };

  render = () => (
    <WebView
      source={{
        uri: createURI(this.props),
      }}
      onNavigationStateChange={this.onNavigationStateChange}
    />
  );
}

export default withHotelsContext(state => ({
  checkin: state.checkin,
  checkout: state.checkout,
  currency: state.currency,
  version: state.version,
}))(PaymentScreen);

export function createURI(pp: PaymentParameters): string {
  const checkinQuery = sanitizeDate(pp.checkin);
  const intervalQuery = DateUtils.diffInDays(pp.checkout, pp.checkin);

  const roomsQuery = pp.rooms.reduce((acc, curVal) => {
    acc[`nr_rooms_${curVal.id}`] = curVal.count;
    return acc;
  }, {});

  return (
    'https://secure.booking.com/book.html?' +
    querystring.stringify({
      from_source: 'hotel',
      hostname: 'hotels.kiwi.com',
      hotel_id: pp.hotelId,
      stage: 1, // 0 - room selection, 1 - address editing, 2 - final overview
      checkin: checkinQuery,
      interval: intervalQuery,
      children_extrabeds: '', // ???
      ...roomsQuery,
      rt_pos_selected: '', // ???
      aid: pp.affiliateId,
      label: `kiwi-${Platform.OS}-react-${pp.version}`,
      lang: pp.language,
      selected_currency: pp.currency,
    })
  );
}
