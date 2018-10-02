/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Address_address$ref = any;
type HotelSwipeItem$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HotelSwipeList$ref: FragmentReference;
export type HotelSwipeList = $ReadOnlyArray<{|
  +node: ?{|
    +id: string,
    +address: ?{|
      +$fragmentRefs: Address_address$ref
    |},
    +$fragmentRefs: HotelSwipeItem$ref,
  |},
  +$refType: HotelSwipeList$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "HotelSwipeList",
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
        },
        {
          "kind": "FragmentSpread",
          "name": "HotelSwipeItem",
          "args": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "address",
          "storageKey": null,
          "args": null,
          "concreteType": "Address",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "Address_address",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ca4a5da16717692bf1b27d0efd68e473';
module.exports = node;
