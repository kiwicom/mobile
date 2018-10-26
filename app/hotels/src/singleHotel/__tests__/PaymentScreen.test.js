// @flow

import { NativeModules } from 'react-native';

import { PaymentScreen, createURI } from '../PaymentScreen';

const ONE_DAY = 8.64e7; // ms

jest.mock('../../../package.json', () => ({
  version: '1.0.0',
}));

it('creates correct URL', () => {
  expect(
    createURI(
      {
        hotelId: '1',
        checkin: new Date(ONE_DAY),
        checkout: new Date(3 * ONE_DAY), // 2 days later
        rooms: [
          {
            id: '7709411_91461863_1_1_0',
            count: 1,
          },
          {
            id: '7709404_91461863_0_1_0',
            count: 2,
          },
        ],
        language: 'en',
        currency: 'EUR',
        version: 'rn-test',
      },
      'http://test.url.lol',
    ),
  ).toMatchSnapshot();

  expect(
    createURI(
      {
        hotelId: '2',
        checkin: new Date(2 * ONE_DAY),
        checkout: new Date(16 * ONE_DAY), // 14 days later
        rooms: [
          {
            id: '7709411_91461863_1_1_0',
            count: 5,
          },
        ],
        language: 'cs',
        currency: 'JPY',
        version: 'rn-test',
      },
      'http://test.url.lol',
    ),
  ).toMatchSnapshot();
});

it('logs ancillaryPurchased event', () => {
  jest.resetAllMocks();
  // $FlowExpectedError: We don't need props for this test
  const Component = new PaymentScreen({});
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
