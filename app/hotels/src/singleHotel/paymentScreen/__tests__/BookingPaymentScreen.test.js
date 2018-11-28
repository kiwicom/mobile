// @flow

import { BookingPaymentScreen } from '../BookingPaymentScreen';

const ONE_DAY = 8.64e7; // ms

it('creates correct URL', () => {
  expect(
    new BookingPaymentScreen({
      hotelId: '1',
      checkin: new Date(ONE_DAY),
      checkout: new Date(3 * ONE_DAY), // 2 days later
      roomConfig: [
        {
          roomId: '7709411_91461863_1_1_0',
          count: 1,
        },
        {
          roomId: '7709404_91461863_0_1_0',
          count: 2,
        },
      ],
      currency: 'EUR',
      version: 'rn-test',
    }).createURI('http://test.url.lol'),
  ).toMatchSnapshot();

  expect(
    new BookingPaymentScreen({
      hotelId: '2',
      checkin: new Date(2 * ONE_DAY),
      checkout: new Date(16 * ONE_DAY), // 14 days later
      roomConfig: [
        {
          roomId: '7709411_91461863_1_1_0',
          count: 5,
        },
      ],
      currency: 'JPY',
      version: 'rn-test',
    }).createURI('http://test.url.lol'),
  ).toMatchSnapshot();
});
