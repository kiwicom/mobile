// @flow strict

import * as React from 'react';
import {
  WebView,
  GeneralError,
  type WebViewStateChangeEvent,
  Logger,
  Translation,
} from '@kiwicom/mobile-shared';

import { HotelsContext, type HotelsContextState } from '../../HotelsContext';

type Props = {|
  +url: ?string,
|};

export function PaymentWebView(props: Props) {
  const { apiProvider }: HotelsContextState = React.useContext(HotelsContext);

  function onNavigationStateChange(event: WebViewStateChangeEvent) {
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
        apiProvider === 'booking'
          ? ANCILLARY_PROVIDER_BOOKINGCOM
          : ANCILLARY_PROVIDER_STAY22,
      );
    }
  }

  if (props.url == null) {
    return (
      <GeneralError
        errorMessage={<Translation id="hotels.payment_screen.server_error" />}
      />
    );
  }
  return (
    <WebView
      source={{
        uri: props.url,
      }}
      onNavigationStateChange={onNavigationStateChange}
      testID="paymentScreenSingleHotel"
    />
  );
}

export default PaymentWebView;
