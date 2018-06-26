// @flow

import countBookingPrice from '../countBookingPrice';

const availableRooms = [
  // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
  {
    originalId: 'aaa',
    incrementalPrice: [
      {
        amount: 500,
        currency: 'EUR',
      },
      {
        amount: 1000,
        currency: 'EUR',
      },
    ],
  },
  // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
  {
    originalId: 'bbb',
    incrementalPrice: [
      {
        amount: 333,
        currency: 'EUR',
      },
      {
        amount: 666,
        currency: 'EUR',
      },
    ],
  },
];

it('returns null when availableRooms are not provided', () => {
  expect(countBookingPrice(null, { aaa: 1 })).toBe(null);
  expect(countBookingPrice(undefined, { aaa: 1 })).toBe(null);
});

it('returns null when no room is selected', () => {
  expect(countBookingPrice(availableRooms, {})).toBe(null);
  expect(
    countBookingPrice(availableRooms, {
      aaa: 0,
      bbb: 0,
    }),
  ).toBe(null);
});

it('returns sum of selected rooms', () => {
  expect(
    countBookingPrice(availableRooms, {
      aaa: 2,
      bbb: 1,
    }),
  ).toEqual({
    amount: 1333,
    currency: 'EUR',
  });
});

it('takes a currency from the first selected room', () => {
  const czechRooms = [
    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    {
      originalId: 'aaa',
      incrementalPrice: [],
    },
    // $FlowRelayIssue: https://github.com/facebook/relay/issues/2394
    {
      originalId: 'bbb',
      incrementalPrice: [
        {
          amount: 123,
          currency: 'CZK',
        },
      ],
    },
  ];
  expect(countBookingPrice(czechRooms, { bbb: 1 })).toEqual({
    amount: 123,
    currency: 'CZK',
  });
});
