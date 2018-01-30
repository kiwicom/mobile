/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type HotelSwipeList = $ReadOnlyArray<{|
  +node: ?{|
    +id: string;
    +hotel: ?{|
      +address: ?{| |};
    |};
  |};
|}>;


const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "HotelSwipeList",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "HotelAvailability",
      "name": "node",
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
          "kind": "FragmentSpread",
          "name": "HotelSwipeItem",
          "args": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "Hotel",
          "name": "hotel",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "Address",
              "name": "address",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "Address_address",
                  "args": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HotelAvailabilityEdge"
};

module.exports = node;
