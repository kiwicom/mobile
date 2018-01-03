/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type BookNow_availableRooms = $ReadOnlyArray<{|
  +originalId: ?string;
  +incrementalPrice: ?$ReadOnlyArray<?{|
    +amount: ?number;
    +currency: ?string;
  |}>;
|}>;


const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "BookNow_availableRooms",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "originalId",
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Price",
      "name": "incrementalPrice",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "amount",
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "currency",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HotelRoomAvailability"
};

module.exports = node;
