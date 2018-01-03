/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type BookNow_hotel = {|
  +originalId: ?string;
|};


const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BookNow_hotel",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "originalId",
      "storageKey": null
    }
  ],
  "type": "Hotel"
};

module.exports = node;
