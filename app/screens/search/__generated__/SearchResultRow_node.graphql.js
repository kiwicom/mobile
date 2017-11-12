// @flow
/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type SearchResultRow_node = {|
  +duration: ?number;
  +price: ?{| |};
  +departure: ?{|
    +localTime: ?any;
  |};
  +arrival: ?{|
    +localTime: ?any;
  |};
  +legs: ?$ReadOnlyArray<?{|
    +id: string;
    +airline: ?{| |};
  |}>;
|};


const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchResultRow_node",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "duration",
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Price",
      "name": "price",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Price",
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
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Leg",
      "name": "legs",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "Airline",
          "name": "airline",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "AirlineLogo",
              "args": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Flight"
};

module.exports = node;
