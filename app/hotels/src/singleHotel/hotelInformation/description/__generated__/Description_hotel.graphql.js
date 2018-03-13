/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type Description_hotel = {|
  +summary: ?string;
  +facilities: ?{| |};
|};


const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Description_hotel",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "summary",
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "HotelFacilityConnection",
      "name": "facilities",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Facilities_facilities",
          "args": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Hotel"
};

module.exports = node;
