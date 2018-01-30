/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type HotelSwipeItem = {|
  +hotel: ?{|
    +id: string;
  |};
|};


const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HotelSwipeItem",
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "HotelDetailPreview_availability",
      "args": null
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
          "name": "id",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HotelAvailability"
};

module.exports = node;
