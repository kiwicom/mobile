// @flow

import { RoomSummary } from '../RoomSummary';

const room = {
  availableRooms: [
    {
      id: '1',
      selectedCount: 2,
      incrementalPriceWithExtraCharges: [
        {
          price: {
            currency: 'EUR',
            amount: 5,
          },
        },
        {
          price: {
            currency: 'EUR',
            amount: 20,
          },
        },
      ],
      room: {
        maxPersons: 2,
      },
    },
    {
      id: '2',
      selectedCount: 1,
      incrementalPriceWithExtraCharges: [
        {
          price: {
            currency: 'EUR',
            amount: 5,
          },
        },
      ],
      room: {
        maxPersons: 2,
      },
    },
    {
      id: '3',
      incrementalPriceWithExtraCharges: [
        {
          price: {
            currency: 'EUR',
            amount: 5,
          },
        },
      ],
      room: {
        maxPersons: 2,
      },
    },
  ],
};

describe('calculateSelectedData', () => {
  it('calculates data correctly', () => {
    // $FlowExpectedError: passing just props needed to run test
    const Component = new RoomSummary({ room });

    const test = Component.calculateSelectedData();
    expect(test).toEqual({
      amount: 25,
      currency: 'EUR',
      maxPersons: 6,
      numberOfRooms: 3,
    });
  });
});
