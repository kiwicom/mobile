// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import {
  WebView,
  GeneralError,
  type WebViewStateChangeEvent,
  Logger,
  Translation,
} from '@kiwicom/mobile-shared';

import {
  withHotelsContext,
  type HotelsContextState,
  type ApiProvider,
} from '../../HotelsContext';

type Props = {|
  +url: ?string,
  +apiProvider: ApiProvider,
|};

export class PaymentWebView extends React.Component<Props> {
  onNavigationStateChange = (event: WebViewStateChangeEvent) => {
    /**
     * Still we are only being redirected to booking.com for payment.
     * If that will change in the future, we might pass this url as a prop from parent component
     */
    if (!event.loading && event.url.includes('booking.com/confirmation')) {
      const {
        ANCILLARY_PROVIDER_BOOKINGCOM,
        ANCILLARY_PROVIDER_STAY22,
      } = Logger.Provider;

      Logger.ancillaryPurchased(
        Logger.Type.ANCILLARY_STEP_PAYMENT,
        this.props.apiProvider === 'booking'
          ? ANCILLARY_PROVIDER_BOOKINGCOM
          : ANCILLARY_PROVIDER_STAY22,
      );
    }
  };

  render() {
    if (this.props.url == null) {
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
            uri: this.props.url,
          }}
          onNavigationStateChange={this.onNavigationStateChange}
        />
      </React.Fragment>
    );
  }
}

const select = ({ apiProvider }: HotelsContextState) => ({ apiProvider });

export default withHotelsContext(select)(PaymentWebView);
