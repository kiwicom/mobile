/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type HotelReviewScore_hotel$ref = any;
type HotelTitle$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AllHotelsSearchRow$ref: FragmentReference;
export type AllHotelsSearchRow = {|
  +hotel: ?{|
    +id: string,
    +mainPhoto: ?{|
      +lowResUrl: ?string
    |},
    +$fragmentRefs: HotelReviewScore_hotel$ref,
  |},
  +$fragmentRefs: HotelTitle$ref,
  +$refType: AllHotelsSearchRow$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AllHotelsSearchRow",
  "type": "HotelAvailability",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "HotelTitle",
      "args": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "hotel",
      "storageKey": null,
      "args": null,
      "concreteType": "Hotel",
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
              "name": "lowResUrl",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "FragmentSpread",
          "name": "HotelReviewScore_hotel",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '496e31541877dc1edf949b5b6c5a869a';
module.exports = node;
