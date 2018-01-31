/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type HotelDistance_hotel = {|
  +distanceFromCenter: ?number;
|};


const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HotelDistance_hotel",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "distanceFromCenter",
      "storageKey": null
    }
  ],
  "type": "Hotel"
};

module.exports = node;
