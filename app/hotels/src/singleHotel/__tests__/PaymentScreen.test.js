// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import PaymentScreen, { createURI } from '../PaymentScreen';

const renderer = new ShallowRenderer();
const ONE_DAY = 8.64e7; // ms

jest.mock('../../../package.json', () => ({
  version: '1.0.0',
}));

it('creates correct URL', () => {
  expect(
    createURI({
      hotelId: 1,
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
      affiliateId: '123',
      language: 'en',
      currency: 'EUR',
    }),
  ).toMatchSnapshot();

  expect(
    createURI({
      hotelId: 2,
      checkin: new Date(2 * ONE_DAY),
      checkout: new Date(16 * ONE_DAY), // 14 days later
      rooms: [
        {
          id: '7709411_91461863_1_1_0',
          count: 5,
        },
      ],
      affiliateId: '321',
      language: 'cs',
      currency: 'JPY',
    }),
  ).toMatchSnapshot();

  expect(
    renderer.render(
      <PaymentScreen
        hotelId={2}
        checkin={new Date(2 * ONE_DAY)}
        checkout={new Date(16 * ONE_DAY)} // 14 days later
        rooms={[
          {
            id: '7709411_91461863_1_1_0',
            count: 5,
          },
        ]}
        affiliateId="321"
        language="cs"
        currency="JPY"
      />,
    ),
  ).toMatchSnapshot();
});
