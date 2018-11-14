// @flow

import { NativeModules } from 'react-native';

import { PaymentWebView } from '../PaymentWebView';

it('logs ancillaryPurchased event', () => {
  jest.resetAllMocks();
  // $FlowExpectedError: We don't need props for this test
  const Component = new PaymentWebView({});
  const loadingEvent = {
    loading: true,
    url: 'https://secure.booking.com/confirmation-en-gb.com',
  };

  const loadingDoneEvent = {
    loading: false,
    url: 'https://secure.booking.com/confirmation-en-gb.com',
  };

  const badUrlEvent = {
    loading: false,
    url: 'https://secure.booking.com/book.html',
  };

  Component.onNavigationStateChange(loadingDoneEvent);
  Component.onNavigationStateChange(badUrlEvent);
  Component.onNavigationStateChange(loadingEvent);

  expect(
    NativeModules.RNLoggingModule.ancillaryPurchased,
  ).toHaveBeenCalledTimes(1);
});
