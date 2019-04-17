// @flow

import React from 'react';
import { NativeModules } from 'react-native';
import { create } from 'react-test-renderer';
import { WebView } from '@kiwicom/mobile-shared';

import { PaymentWebView } from '../PaymentWebView';

it('logs ancillaryPurchased event', () => {
  jest.resetAllMocks();
  const wrapper = create(<PaymentWebView url="http://test.url" />);
  const webView = wrapper.root.findByType(WebView);

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

  webView.props.onNavigationStateChange(loadingDoneEvent);
  webView.props.onNavigationStateChange(badUrlEvent);
  webView.props.onNavigationStateChange(loadingEvent);

  expect(
    NativeModules.RNLoggingModule.ancillaryPurchased,
  ).toHaveBeenCalledTimes(1);
});
