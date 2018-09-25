/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type HotelReviewScore_hotel$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HotelDetailPreview_availability$ref: FragmentReference;
export type HotelDetailPreview_availability = {|
  +price: ?{|
    +amount: ?number,
    +currency: ?string,
  |},
  +hotel: ?{|
    +id: string,
    +name: ?string,
    +mainPhoto: ?{|
      +thumbnailUrl: ?string
    |},
    +rating: ?{|
      +stars: ?number
    |},
    +$fragmentRefs: HotelReviewScore_hotel$ref,
  |},
  +$refType: HotelDetailPreview_availability$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "HotelDetailPreview_availability",
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
          "kind": "FragmentSpread",
          "name": "HotelReviewScore_hotel",
          "args": null
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
(node/*: any*/).hash = 'f7e9077bb6cc45f9e9c9cd130eb48d2f';
module.exports = node;
