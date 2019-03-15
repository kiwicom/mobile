/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Address_address$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AdditionalInfo_data$ref: FragmentReference;
export type AdditionalInfo_data = {|
  +total: ?{|
    +amount: ?string,
    +currencyId: ?string,
  |},
  +hotel: ?{|
    +address: ?{|
      +$fragmentRefs: Address_address$ref
    |},
    +review: ?{|
      +score: ?number
    |},
    +name: ?string,
    +mainPhoto: ?{|
      +thumbnailUrl: ?string
    |},
    +rating: ?{|
      +stars: ?number
    |},
  |},
  +$refType: AdditionalInfo_data$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "AdditionalInfo_data",
  "type": "HotelAvailabilityInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "total",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "hotel",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [
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
          "kind": "ScalarField",
          "alias": null,
          "name": "name",
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
              "name": "thumbnailUrl",
              "args": null,
              "storageKey": null
            }
          ]
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'af1360fd2e63efb83e05aacb1aa9fa9f';
module.exports = node;
