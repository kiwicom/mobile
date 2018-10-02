/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Address_address$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AdditionalInfo$ref: FragmentReference;
export type AdditionalInfo = {|
  +price: ?{|
    +amount: ?number,
    +currency: ?string,
  |},
  +hotel: ?{|
    +address: ?{|
      +$fragmentRefs: Address_address$ref
    |},
    +review: ?{|
      +score: ?number
    |},
    +id: string,
    +name: ?string,
    +mainPhoto: ?{|
      +thumbnailUrl: ?string
    |},
    +rating: ?{|
      +stars: ?number
    |},
  |},
  +$refType: AdditionalInfo$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AdditionalInfo",
  "type": "HotelAvailability",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "hotel",
      "storageKey": null,
      "args": null,
      "concreteType": "Hotel",
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
          "name": "id",
          "args": null,
          "storageKey": null
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
(node/*: any*/).hash = 'fb58f5cd722f8df8339c3034d88558a6';
module.exports = node;
