/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type HotelReview_data$ref: FragmentReference;
declare export opaque type HotelReview_data$fragmentType: HotelReview_data$ref;
export type HotelReview_data = {|
  +review: ?{|
    +score: ?number,
    +count: ?number,
  |},
  +$refType: HotelReview_data$ref,
|};
export type HotelReview_data$data = HotelReview_data;
export type HotelReview_data$key = {
  +$data?: HotelReview_data$data,
  +$fragmentRefs: HotelReview_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "HotelReview_data",
  "type": "HotelInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
(node/*: any*/).hash = '9b8f55ee151945f508d005f482385b3a';
module.exports = node;
