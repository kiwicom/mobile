// @flow

import * as React from 'react';
import { Platform, StatusBar } from 'react-native';
import {
  WebView,
  Logger,
  type WebViewStateChangeEvent,
  GeneralError,
} from '@kiwicom/mobile-shared';
import { DateUtils, Translation } from '@kiwicom/mobile-localization';
import querystring from 'querystring';
import { HeaderTitle } from '@kiwicom/mobile-navigation';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';
import idx from 'idx';

import { sanitizeDate } from '../GraphQLSanitizers';
import { withHotelsContext } from '../HotelsContext';
import type { PaymentScreenQueryResponse } from './__generated__/PaymentScreenQuery.graphql';

export type PaymentParameters = {|
  +hotelId: number,
  +checkin: Date,
  +checkout: Date,
  +rooms: Array<{|
    +id: string,
    +count: number, // how many rooms with this ID?
  |}>,
  +language: string,
  +currency: string,
  +version: string,
|};

export class PaymentScreen extends React.Component<PaymentParameters> {
  static navigationOptions = () => ({
    headerTitle: (
      <HeaderTitle>
        <Translation id="hotels.navigation.title.payment" />
      </HeaderTitle>
    ),
  });
  componentDidMount = () => {
    Logger.ancillaryDisplayed(Logger.Type.ANCILLARY_STEP_PAYMENT);
  };

  onNavigationStateChange = (event: WebViewStateChangeEvent) => {
    if (!event.loading && event.url.includes('booking.com/confirmation')) {
      Logger.ancillaryPurchased(Logger.Type.ANCILLARY_STEP_PAYMENT);
    }
  };

  renderInner = (props: PaymentScreenQueryResponse) => {
    const url = idx(props, _ => _.hotelPaymentUrls.bookingComPaymentUrl);
    if (url == null) {
      return (
        <GeneralError
          errorMessage={<Translation id="hotels.payment_screen.server_error" />}
        />
      );
    }
    return (
      <WebView
        source={{
          uri: createURI(this.props, url),
        }}
        onNavigationStateChange={this.onNavigationStateChange}
      />
    );
  };

  render = () => (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <PublicApiRenderer
        render={this.renderInner}
        query={graphql`
          query PaymentScreenQuery {
            hotelPaymentUrls {
              bookingComPaymentUrl
            }
          }
        `}
      />
    </React.Fragment>
  );
}

export default withHotelsContext(state => ({
  checkin: state.checkin,
  checkout: state.checkout,
  currency: state.currency,
  version: state.version,
}))(PaymentScreen);

export function createURI(pp: PaymentParameters, url: string): string {
  const checkinQuery = sanitizeDate(pp.checkin);
  const intervalQuery = DateUtils.diffInDays(pp.checkout, pp.checkin);

  const roomsQuery = pp.rooms.reduce((acc, curVal) => {
    acc[`nr_rooms_${curVal.id}`] = curVal.count;
    return acc;
  }, {});

  return `${url}&${querystring.stringify({
    hotel_id: pp.hotelId,
    checkin: checkinQuery,
    interval: intervalQuery,
    ...roomsQuery,
    label: `kiwi-${Platform.OS}-react-${pp.version}`,
    lang: pp.language,
    selected_currency: pp.currency,
  })}`;
}
