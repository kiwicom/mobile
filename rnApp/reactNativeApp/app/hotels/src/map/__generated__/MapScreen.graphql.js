/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type MapScreen = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string;
    |};
  |}>;
|};


const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MapScreen",
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
            }
          ],
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "MapView",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "HotelSwipeList",
          "args": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HotelAvailabilityConnection"
};

module.exports = node;
