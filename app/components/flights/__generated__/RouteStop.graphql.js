/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type RouteStop = {|
  +airport: ?{| |};
|};


const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RouteStop",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Location",
      "name": "airport",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Airport",
          "args": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RouteStop"
};

module.exports = node;
