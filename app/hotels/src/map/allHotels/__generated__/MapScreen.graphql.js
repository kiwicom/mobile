/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type HotelSwipeList$ref = any;
type MapView$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MapScreen$ref: FragmentReference;
export type MapScreen = $ReadOnlyArray<{|
  +node: ?{|
    +id: string
  |},
  +$fragmentRefs: MapView$ref & HotelSwipeList$ref,
  +$refType: MapScreen$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MapScreen",
  "type": "AllHotelAvailabilityHotelEdge",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "node",
      "storageKey": null,
      "args": null,
      "concreteType": "AllHotelAvailabilityHotel",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        }
      ]
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
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3a319bc51783ede539706a348e4abc3c';
module.exports = node;
