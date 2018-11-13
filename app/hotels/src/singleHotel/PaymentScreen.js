// @flow

import * as React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import {
  WebView,
  Logger,
  type WebViewStateChangeEvent,
  GeneralError,
} from '@kiwicom/mobile-shared';
import { DateUtils, Translation } from '@kiwicom/mobile-localization';
import querystring from 'querystring';
import { HeaderTitle, type NavigationType } from '@kiwicom/mobile-navigation';
import { graphql, PublicApiRenderer } from '@kiwicom/mobile-relay';
import { HeaderBackButton } from 'react-navigation';
import { defaultTokens } from '@kiwicom/mobile-orbit';

import { sanitizeDate } from '../GraphQLSanitizers';
import { withHotelsContext } from '../HotelsContext';
import type { PaymentScreenQueryResponse } from './__generated__/PaymentScreenQuery.graphql';

export type PaymentParameters = {|
  +hotelId: string,
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
  static navigationOptions = ({
    navigation,
  }: {
    navigation: NavigationType,
  }) => {
    function goBack() {
      navigation.goBack(null);
    }
    return {
      headerTitle: (
        <HeaderTitle>
          <Translation id="hotels.navigation.title.payment" />
        </HeaderTitle>
      ),
      headerLeft: (
        <HeaderBackButton
          onPress={goBack}
          tintColor={defaultTokens.paletteProductNormal}
        />
      ),
    };
  };

  componentDidMount = () => {
    Logger.ancillaryDisplayed(
      Logger.Type.ANCILLARY_STEP_PAYMENT,
      Logger.Provider.ANCILLARY_PROVIDER_BOOKINGCOM,
    );
  };

  onNavigationStateChange = (event: WebViewStateChangeEvent) => {
    if (!event.loading && event.url.includes('booking.com/confirmation')) {
      Logger.ancillaryPurchased(
        Logger.Type.ANCILLARY_STEP_PAYMENT,
        Logger.Provider.ANCILLARY_PROVIDER_BOOKINGCOM,
      );
    }
  };

  getRoomConfig = () =>
    this.props.rooms.map(room => ({
      roomId: room.id,
      count: room.count,
    }));

  renderInner = (props: PaymentScreenQueryResponse) => {
    const url = props.hotelPaymentUrls?.bookingComPaymentUrl;
    if (url == null) {
      return (
        <GeneralError
          errorMessage={<Translation id="hotels.payment_screen.server_error" />}
        />
      );
    }
    return (
      <React.Fragment>
        <View testID="paymentScreenSingleHotel" />
        <WebView
          source={{
            uri: createURI(this.props, url),
          }}
          onNavigationStateChange={this.onNavigationStateChange}
        />
      </React.Fragment>
    );
  };

  render = () => (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <PublicApiRenderer
        render={this.renderInner}
        query={graphql`
          query PaymentScreenQuery(
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
          roomConfig: this.getRoomConfig(),
        }}
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

  return `${url}&${querystring.stringify({
    checkin: checkinQuery,
    interval: intervalQuery,
    label: `kiwi-${Platform.OS}-react-${pp.version}`,
    lang: pp.language,
    selected_currency: pp.currency,
  })}`;
}
