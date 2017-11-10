// @flow
/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type Price = {|
  +amount: ?number;
  +currency: ?string;
|};


export const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Price",
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
  "type": "Price"
};
