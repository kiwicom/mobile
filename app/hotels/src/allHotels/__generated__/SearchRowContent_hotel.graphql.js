/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type HotelTitle_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SearchRowContent_hotel$ref: FragmentReference;
declare export opaque type SearchRowContent_hotel$fragmentType: SearchRowContent_hotel$ref;
export type SearchRowContent_hotel = {|
  +mainPhoto: ?{|
    +highResUrl: ?string,
    +lowResUrl: ?string,
  |},
  +review: ?{|
    +score: ?number
  |},
  +$fragmentRefs: HotelTitle_data$ref,
  +$refType: SearchRowContent_hotel$ref,
|};
export type SearchRowContent_hotel$data = SearchRowContent_hotel;
export type SearchRowContent_hotel$key = {
  +$data?: SearchRowContent_hotel$data,
  +$fragmentRefs: SearchRowContent_hotel$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SearchRowContent_hotel",
  "type": "AllHotelsInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
        },
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
    },
    {
      "kind": "FragmentSpread",
      "name": "HotelTitle_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '18c4d8d8c60dc7c188d1f3b7aba1a58d';
module.exports = node;
