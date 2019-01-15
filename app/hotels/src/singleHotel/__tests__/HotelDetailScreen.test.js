// @flow

import { HotelDetailScreen } from '../HotelDetailScreen';

const $fragmentRefs: any = null;
const availableRooms = [
  {
    $fragmentRefs,
    id: 'aaa',
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
  {
    $fragmentRefs,
    id: 'bbb',
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

const getComponent = (availableRooms, selected) => {
  // $FlowExpectedError: Passing just props needed to perform test
  return new HotelDetailScreen({
    availableHotel: {
      availableRooms,
    },
    selected,
  });
};

describe('countBookingPrice', () => {
  it('returns null when availableRooms are not provided', () => {
    const NullComponent = getComponent(null, { aaa: 1 });

    const UndefinedComponent = getComponent(null, { aaa: 1 });

    expect(NullComponent.countBookingPrice()).toBe(null);
    expect(UndefinedComponent.countBookingPrice()).toBe(null);
  });

  it('returns null when no room is selected', () => {
    const ComponentA = getComponent(availableRooms, {});
    const ComponentB = getComponent(availableRooms, { aaa: 0, bbb: 0 });

    expect(ComponentA.countBookingPrice()).toBe(null);
    expect(ComponentB.countBookingPrice()).toBe(null);
  });

  it('returns sum of selected rooms', () => {
    const Component = getComponent(availableRooms, { aaa: 2, bbb: 1 });

    expect(Component.countBookingPrice()).toEqual({
      amount: 1333,
      currency: 'EUR',
    });
  });

  it('takes a currency from the first selected room', () => {
    const czechRooms = [
      {
        $fragmentRefs,
        id: 'aaa',
        incrementalPrice: [],
      },
      {
        $fragmentRefs,
        id: 'bbb',
        incrementalPrice: [
          {
            amount: 123,
            currency: 'CZK',
          },
        ],
      },
    ];
    const Component = getComponent(czechRooms, { bbb: 1 });

    expect(Component.countBookingPrice()).toEqual({
      amount: 123,
      currency: 'CZK',
    });
  });
});
