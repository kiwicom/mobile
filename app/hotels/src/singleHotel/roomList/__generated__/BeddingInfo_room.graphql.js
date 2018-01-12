/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type BeddingInfo_room = {|
  +type: ?string;
  +maxPersons: ?number;
  +bedding: ?$ReadOnlyArray<?{|
    +type: ?string;
    +amount: ?number;
  |}>;
|};


const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BeddingInfo_room",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "type",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "maxPersons",
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "HotelRoomBedding",
      "name": "bedding",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "type",
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "amount",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HotelRoom"
};

module.exports = node;
