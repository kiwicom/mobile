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
  +id: string,
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
};
// prettier-ignore
(node/*: any*/).hash = 'cb46f8f5202f299aea65538ce0d9c6cf';
module.exports = node;
