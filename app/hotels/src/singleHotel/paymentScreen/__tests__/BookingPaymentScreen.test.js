// @flow

import { createURI } from '../BookingPaymentScreen';

const ONE_DAY = 8.64e7; // ms

it('creates correct URL', () => {
  expect(
    createURI({
      url: 'http://test.url.lol',
      checkin: new Date(ONE_DAY),
      checkout: new Date(3 * ONE_DAY), // 2 days later
      currency: 'EUR',
      version: 'rn-test',
    }),
  ).toMatchInlineSnapshot(
    `"http://test.url.lol&checkin=1970-01-02&interval=2&label=kiwi-ios-react-rn-test&lang=en&selected_currency=EUR"`,
  );

  expect(
    createURI({
      url: 'http://test.url.lol',
      checkin: new Date(2 * ONE_DAY),
      checkout: new Date(16 * ONE_DAY), // 14 days later
      currency: 'EUR',
      version: 'rn-test',
    }),
  ).toMatchInlineSnapshot(
    `"http://test.url.lol&checkin=1970-01-03&interval=14&label=kiwi-ios-react-rn-test&lang=en&selected_currency=EUR"`,
  );
});
