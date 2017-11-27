/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type OverviewRow_node = {|
  +departure: ?{|
    +localTime: ?any;
  |};
  +arrival: ?{|
    +localTime: ?any;
  |};
|};


const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OverviewRow_node",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "RouteStop",
      "name": "departure",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "localTime",
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "RouteStop",
          "args": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "RouteStop",
      "name": "arrival",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "localTime",
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "RouteStop",
          "args": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Booking"
};

module.exports = node;
