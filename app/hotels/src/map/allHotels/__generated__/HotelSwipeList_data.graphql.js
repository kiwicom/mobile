/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Address_address$ref = any;
type HotelSwipeItem_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HotelSwipeList_data$ref: FragmentReference;
export type HotelSwipeList_data = $ReadOnlyArray<{|
  +address: ?{|
    +$fragmentRefs: Address_address$ref
  |},
  +$fragmentRefs: HotelSwipeItem_data$ref,
  +$refType: HotelSwipeList_data$ref,
|}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "HotelSwipeList_data",
  "type": "AllHotelsInterface",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "HotelSwipeItem_data",
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
(node/*: any*/).hash = '214c25e1d55d84e3e71abcbd92d97590';
module.exports = node;
