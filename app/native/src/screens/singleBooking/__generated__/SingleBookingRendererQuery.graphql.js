/**
 * @flow
 * @relayHash 5ba11d72ce3f7ce62f367ac80ca25e63
 */

/* eslint-disable */

import type { ConcreteBatch } from 'relay-runtime';
export type SingleBookingRendererQueryResponse = {| |};

/*
query SingleBookingRendererQuery(
  $bid: ID!
) {
  ...SingleBooking_booking_1NggX5
}

fragment SingleBooking_booking_1NggX5 on RootQuery {
  booking(id: $bid) {
    id
    status
  }
}
*/

const node: ConcreteBatch = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "bid",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SingleBookingRendererQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "SingleBooking_booking",
        "args": [
          {
            "kind": "Variable",
            "name": "bid",
            "variableName": "bid",
            "type": null
          }
        ]
      }
    ],
    "type": "RootQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "SingleBookingRendererQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "bid",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "SingleBookingRendererQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "bid",
            "type": "ID!"
          }
        ],
        "concreteType": "Booking",
        "name": "booking",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "status",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query SingleBookingRendererQuery(\n  $bid: ID!\n) {\n  ...SingleBooking_booking_1NggX5\n}\n\nfragment SingleBooking_booking_1NggX5 on RootQuery {\n  booking(id: $bid) {\n    id\n    status\n  }\n}\n"
};

module.exports = node;
