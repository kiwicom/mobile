/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type HotelDistance_hotel$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HotelTitle_data$ref: FragmentReference;
export type HotelTitle_data = {|
  +price: ?{|
    +amount: ?number,
    +currency: ?string,
  |},
  +name: ?string,
  +rating: ?{|
    +stars: ?number
  |},
  +$fragmentRefs: HotelDistance_hotel$ref,
  +$refType: HotelTitle_data$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "HotelTitle_data",
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
(node/*: any*/).hash = 'd40f231d8da5898af8a9b388b951cd14';
module.exports = node;
