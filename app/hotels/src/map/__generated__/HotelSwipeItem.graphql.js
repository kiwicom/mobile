/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type HotelSwipeItem = {|
  +price: ?{|
    +amount: ?number;
    +currency: ?string;
  |};
  +hotel: ?{|
    +name: ?string;
    +mainPhoto: ?{|
      +thumbnailUrl: ?string;
    |};
    +rating: ?{|
      +stars: ?number;
    |};
    +review: ?{|
      +score: ?number;
      +description: ?string;
      +count: ?number;
    |};
  |};
|};


const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HotelSwipeItem",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Price",
      "name": "price",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "amount",
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "currency",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Hotel",
      "name": "hotel",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "name",
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "HotelPhoto",
          "name": "mainPhoto",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "thumbnailUrl",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "HotelRating",
          "name": "rating",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "stars",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "HotelReview",
          "name": "review",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "score",
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "description",
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "count",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HotelAvailability"
};

module.exports = node;
