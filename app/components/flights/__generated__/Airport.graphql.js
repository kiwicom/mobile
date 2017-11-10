// @flow
/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type Airport = {|
  +locationId: ?string;
  +city: ?{|
    +name: ?string;
  |};
|};


export const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Airport",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "locationId",
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "LocationArea",
      "name": "city",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Location"
};
