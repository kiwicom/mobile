/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type SingleBooking_booking = {|
  +booking: ?{|
    +id: string;
    +status: ?"NEW" | "REFUNDED" | "PENDING" | "CONFIRMED" | "CANCELLED" | "DELETED" | "CLOSED" | "EXPIRED";
  |};
|};


const node: ConcreteFragment = {
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
  "name": "SingleBooking_booking",
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
  ],
  "type": "RootQuery"
};

module.exports = node;
