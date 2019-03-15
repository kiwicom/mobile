// @flow

import { RoomSummary } from '../RoomSummary';

const room = {
  availableRooms: [
    {
      id: '1',
      selectedCount: 2,
      incrementalPriceWithExtraCharges: [
        {
          total: {
            currencyId: 'EUR',
            amount: '1196',
          },
          extraCharges: [
            {
              excluded: true,
              amount: '0',
              name: 'City tax',
              chargeAmount: '1.21',
              type: 'CITYTAX',
            },
            {
              excluded: false,
              amount: '108.73',
              name: 'VAT',
              chargeAmount: '10',
              type: 'VAT',
            },
          ],
        },
        {
          total: {
            currencyId: 'EUR',
            amount: '2181.81',
          },
          extraCharges: [
            {
              excluded: true,
              amount: '0',
              name: 'City tax',
              chargeAmount: '1.21',
              type: 'CITYTAX',
            },
            {
              excluded: false,
              amount: '218.19',
              name: 'VAT',
              chargeAmount: '10',
              type: 'VAT',
            },
          ],
        },
      ],
      room: {
        description: {
          title: 'Basic Single Room',
        },
        maxPersons: 1,
      },
    },
    {
      id: '2',
      selectedCount: 1,
      incrementalPriceWithExtraCharges: [
        {
          total: {
            amount: '1196',
            currency: 'EUR',
          },
          extraCharges: [
            {
              excluded: true,
              amount: '0',
              name: 'City tax',
              chargeAmount: '1.21',
              type: 'CITYTAX',
            },
            {
              excluded: false,
              amount: '108.73',
              name: 'VAT',
              chargeAmount: '10',
              type: 'VAT',
            },
          ],
        },
      ],
      room: {
        description: {
          title: 'Basic Double Room',
        },
        maxPersons: 2,
      },
    },
    {
      id: '3',
      incrementalPriceWithExtraCharges: [
        {
          total: {
            amount: '1196',
            currency: 'EUR',
          },
          extraCharges: [
            {
              excluded: true,
              amount: '0',
              name: 'City tax',
              chargeAmount: '1.21',
              type: 'CITYTAX',
            },
            {
              excluded: false,
              amount: '108.73',
              name: 'VAT',
              chargeAmount: '10',
              type: 'VAT',
            },
          ],
        },
      ],
      room: {
        description: {
          title: 'Basic triple Room',
        },
        maxPersons: 3,
      },
    },
  ],
};

describe('calculateSelectedData', () => {
  it('calculates data correctly', () => {
    // $FlowExpectedError: passing just props needed to run test
    const Component = new RoomSummary({ room });

    const test = Component.calculateSelectedData();
    expect(test).toMatchInlineSnapshot(`
Object {
  "bruttoPrice": 3377.81,
  "currency": "EUR",
  "extraCharges": Array [
    Object {
      "amount": 326.92,
      "name": "10% VAT",
      "type": "VAT",
    },
  ],
  "selectedRooms": Array [
    Object {
      "count": 2,
      "id": "1",
      "nettoPrice": 1963.62,
      "title": "Basic Single Room",
    },
    Object {
      "count": 1,
      "id": "2",
      "nettoPrice": 1087.27,
      "title": "Basic Double Room",
    },
  ],
}
`);
  });
});
