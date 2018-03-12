/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type HotelInformation_hotel = {| |};


const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HotelInformation_hotel",
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Location_hotel",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Description_hotel",
      "args": null
    }
  ],
  "type": "Hotel"
};

module.exports = node;
