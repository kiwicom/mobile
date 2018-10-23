/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type HotelDistance_hotel$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HotelTitle$ref: FragmentReference;
export type HotelTitle = {|
  +price: ?{|
    +amount: ?number,
    +currency: ?string,
  |},
  +name: ?string,
  +rating: ?{|
    +stars: ?number
  |},
  +$fragmentRefs: HotelDistance_hotel$ref,
  +$refType: HotelTitle$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "HotelTitle",
  "type": "AllHotelsInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "price",
      "storageKey": null,
      "args": null,
      "concreteType": "Price",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "amount",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "currency",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "HotelDistance_hotel",
      "args": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "rating",
      "storageKey": null,
      "args": null,
      "concreteType": "HotelRating",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "stars",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'fdfe0d752efbec0e942dea2e9f4b113a';
module.exports = node;
