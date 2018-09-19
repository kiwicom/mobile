/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type HotelReviewScore_hotel$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HotelReview$ref: FragmentReference;
export type HotelReview = {|
  +review: ?{|
    +score: ?number,
    +count: ?number,
  |},
  +$fragmentRefs: HotelReviewScore_hotel$ref,
  +$refType: HotelReview$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "HotelReview",
  "type": "Hotel",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "HotelReviewScore_hotel",
      "args": null
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
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "count",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '566d898a8069db61943a8b7e6f753a4e';
module.exports = node;
