/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type HotelTitle$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AllHotelsSearchRow$ref: FragmentReference;
export type AllHotelsSearchRow = {|
  +hotelId: ?string,
  +mainPhoto: ?{|
    +highResUrl: ?string
  |},
  +review: ?{|
    +score: ?number
  |},
  +$fragmentRefs: HotelTitle$ref,
  +$refType: AllHotelsSearchRow$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AllHotelsSearchRow",
  "type": "AllHotelsInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "HotelTitle",
      "args": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hotelId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "mainPhoto",
      "storageKey": null,
      "args": null,
      "concreteType": "HotelPhoto",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "highResUrl",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "review",
      "storageKey": null,
      "args": null,
      "concreteType": "HotelReview",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "score",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'dff6415bc345a6620f40a0e07ab21069';
module.exports = node;
