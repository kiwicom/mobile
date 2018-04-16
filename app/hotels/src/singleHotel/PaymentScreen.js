// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import { WebView, Logger } from '@kiwicom/mobile-shared';
import { DateFormatter } from '@kiwicom/mobile-localization';
import querystring from 'querystring';

import { sanitizeDate } from '../GraphQLSanitizers';
import hotelPackage from '../../package.json';

export type PaymentParameters = {|
  hotelId: number,
  checkin: Date,
  checkout: Date,
  rooms: Array<{|
    id: string,
    count: number, // how many rooms with this ID?
  |}>,
  affiliateId: string,
  language: string,
  currency: string,
|};

export default class PaymentScreen extends React.Component<PaymentParameters> {
  componentDidMount = () => {
    Logger.ancillaryDisplayed(Logger.Type.ANCILLARY_STEP_PAYMENT);
  };

  render = () => (
    <WebView
      source={{
        uri: createURI(this.props),
      }}
    />
  );
}

export function createURI(pp: PaymentParameters): string {
  const checkinQuery = sanitizeDate(pp.checkin);
  const intervalQuery = DateFormatter(pp.checkout.getTime()).diff(
    DateFormatter(pp.checkin.getTime()),
    'days',
  );

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
      label: `kiwi-${Platform.OS}-react-${hotelPackage.version}`,
      lang: pp.language,
      selected_currency: pp.currency,
    })
  );
}
