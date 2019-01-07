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
  +address: ?{|
    +$fragmentRefs: Address_address$ref
  |},
  +$fragmentRefs: HotelSwipeItem$ref,
  +$refType: HotelSwipeList$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "HotelSwipeList",
  "type": "AllHotelsInterface",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
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
};
// prettier-ignore
(node/*: any*/).hash = 'edcc7343d4b5166e12038f6d0301b47f';
module.exports = node;
