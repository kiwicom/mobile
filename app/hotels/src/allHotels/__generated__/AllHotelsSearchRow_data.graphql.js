/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type HotelTitle_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AllHotelsSearchRow_data$ref: FragmentReference;
export type AllHotelsSearchRow_data = {|
  +hotelId: ?string,
  +mainPhoto: ?{|
    +highResUrl: ?string,
    +lowResUrl: ?string,
  |},
  +review: ?{|
    +score: ?number
  |},
  +$fragmentRefs: HotelTitle_data$ref,
  +$refType: AllHotelsSearchRow_data$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "AllHotelsSearchRow_data",
  "type": "AllHotelsInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "HotelTitle_data",
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '68131eab1938ecfec1a0a121b85585c4';
module.exports = node;
