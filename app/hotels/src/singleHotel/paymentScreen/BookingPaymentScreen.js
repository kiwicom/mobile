// @flow strict

import * as React from 'react';
import { Platform, StatusBar } from 'react-native';
import { Logger } from '@kiwicom/mobile-shared';
import { DateUtils, DeviceInfo } from '@kiwicom/mobile-localization';
import querystring from 'querystring';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';

import { sanitizeDate } from '../../GraphQLSanitizers';
import { withHotelsContext } from '../../HotelsContext';
import type { BookingPaymentScreenQueryResponse } from './__generated__/BookingPaymentScreenQuery.graphql';
import PaymentWebView from './PaymentWebView';

type Props = {|
  +hotelId: string,
  +checkin: Date,
  +checkout: Date,
  +currency: string,
  +version: string,
  +roomConfig: $ReadOnlyArray<{|
    +roomId: string,
    +count: number,
  |}>,
|};

export class BookingPaymentScreen extends React.Component<Props> {
  componentDidMount() {
    Logger.ancillaryDisplayed(
      Logger.Type.ANCILLARY_STEP_PAYMENT,
      Logger.Provider.ANCILLARY_PROVIDER_BOOKINGCOM,
    );
  }

  createURI = (url: ?string): ?string => {
    if (url == null) {
      return null;
    }

    const checkinQuery = sanitizeDate(this.props.checkin);
    const intervalQuery = DateUtils.diffInDays(
      this.props.checkout,
      this.props.checkin,
    );

    return `${url}&${querystring.stringify({
      checkin: checkinQuery,
      interval: intervalQuery,
      label: `kiwi-${Platform.OS}-react-${this.props.version}`,
      lang: DeviceInfo.getLanguage(),
      selected_currency: this.props.currency,
    })}`;
  };

  renderInner = (props: BookingPaymentScreenQueryResponse) => (
    <PaymentWebView
      url={this.createURI(props.hotelPaymentUrls?.bookingComPaymentUrl)}
    />
  );

  render() {
    return (
      <React.Fragment>
        <StatusBar barStyle="dark-content" />
        <PublicApiRenderer
          render={this.renderInner}
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
            hotelId: this.props.hotelId,
            roomConfig: this.props.roomConfig,
          }}
        />
      </React.Fragment>
    );
  }
}

export default withHotelsContext(state => ({
  checkin: state.checkin,
  checkout: state.checkout,
  currency: state.currency,
  version: state.version,
  hotelId: state.hotelId,
}))(BookingPaymentScreen);
