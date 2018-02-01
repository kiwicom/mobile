/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type AllHotelsSearchList = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string;
    |};
  |}>;
  +stats: ?{|
    +priceMax: ?number;
    +priceMin: ?number;
  |};
|};


const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AllHotelsSearchList",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "HotelAvailabilityEdge",
      "name": "edges",
      "plural": true,
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
              "name": "AllHotelsSearchRow",
              "args": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "HotelAvailabilityStats",
      "name": "stats",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "priceMax",
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "priceMin",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HotelAvailabilityConnection"
};

module.exports = node;
