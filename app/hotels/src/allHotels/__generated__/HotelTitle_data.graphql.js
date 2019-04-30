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
declare export opaque type HotelTitle_data$fragmentType: HotelTitle_data$ref;
export type HotelTitle_data = {|
  +money: ?{|
    +amount: ?string,
    +currencyId: ?string,
  |},
  +name: ?string,
  +rating: ?{|
    +stars: ?number
  |},
  +$fragmentRefs: HotelDistance_hotel$ref,
  +$refType: HotelTitle_data$ref,
|};
export type HotelTitle_data$data = HotelTitle_data;
export type HotelTitle_data$key = {
  +$data?: HotelTitle_data$data,
  +$fragmentRefs: HotelTitle_data$ref,
};
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
      "name": "money",
      "storageKey": null,
      "args": null,
      "concreteType": "Money",
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
          "name": "currencyId",
          "args": null,
          "storageKey": null
        }
      ]
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
    },
    {
      "kind": "FragmentSpread",
      "name": "HotelDistance_hotel",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '155f64344198c250209ce93f4605d1b8';
module.exports = node;
