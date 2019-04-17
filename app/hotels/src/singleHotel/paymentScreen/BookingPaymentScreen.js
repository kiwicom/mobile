// @flow strict

import * as React from 'react';
import { Platform } from 'react-native';
import { Logger } from '@kiwicom/mobile-shared';
import { DateUtils, DeviceInfo } from '@kiwicom/mobile-localization';
import querystring from 'querystring';
import { graphql } from '@kiwicom/mobile-relay';

import { sanitizeDate } from '../../GraphQLSanitizers';
import { HotelsContext, type HotelsContextState } from '../../HotelsContext';
import type { BookingPaymentScreenQueryResponse } from './__generated__/BookingPaymentScreenQuery.graphql';
import PaymentWebView from './PaymentWebView';
import PaymentQueryRenderer from './PaymentQueryRenderer';

type Props = {|
  +roomConfig: $ReadOnlyArray<{|
    +roomId: string,
    +count: number,
  |}>,
|};

type CreateURIParams = {|
  +url: ?string,
  +checkin: Date | null,
  +checkout: Date | null,
  +currency: string,
  +version: string,
|};

export function createURI({
  checkin,
  checkout,
  version,
  currency,
  url,
}: CreateURIParams): ?string {
  if (url == null || checkin == null || checkout == null) {
    return null;
  }

  const checkinQuery = sanitizeDate(checkin);
  const intervalQuery = DateUtils.diffInDays(checkout, checkin);

  return `${url}&${querystring.stringify({
    checkin: checkinQuery,
    interval: intervalQuery,
    label: `kiwi-${Platform.OS}-react-${version}`,
    lang: DeviceInfo.getLanguage(),
    selected_currency: currency,
  })}`;
}

export function BookingPaymentScreen(props: Props) {
  const {
    checkin,
    checkout,
    currency,
    version,
    hotelId,
  }: HotelsContextState = React.useContext(HotelsContext);

  React.useEffect(() => {
    Logger.ancillaryDisplayed(
      Logger.Type.ANCILLARY_STEP_PAYMENT,
      Logger.Provider.ANCILLARY_PROVIDER_BOOKINGCOM,
    );
  }, []);

  function renderInner(renderProps: BookingPaymentScreenQueryResponse) {
    return (
      <PaymentWebView
        url={createURI({
          url: renderProps.hotelPaymentUrls?.bookingComPaymentUrl,
          checkin,
          checkout,
          currency,
          version,
        })}
      />
    );
  }

  return (
    <PaymentQueryRenderer
      render={renderInner}
      query={graphql`
        query BookingPaymentScreenQuery(
          $hotelId: ID
          $roomConfig: [RoomConfigInput]
        ) {
          hotelPaymentUrls(hotelId: $hotelId, roomConfig: $roomConfig) {
            bookingComPaymentUrl
          }
        }
      `}
      variables={{
        hotelId,
        roomConfig: props.roomConfig,
      }}
    />
  );
}

export default BookingPaymentScreen;
