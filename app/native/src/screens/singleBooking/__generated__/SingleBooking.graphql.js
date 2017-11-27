/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type SingleBooking = {|
  +booking: ?{|
    +id: string;
    +status: ?"NEW" | "REFUNDED" | "PENDING" | "CONFIRMED" | "CANCELLED" | "DELETED" | "CLOSED" | "EXPIRED";
    +legs: ?$ReadOnlyArray<?{|
      +id: string;
      +departure: ?{|
        +localTime: ?any;
      |};
      +arrival: ?{|
        +localTime: ?any;
      |};
    |}>;
  |};
|};


const node: ConcreteFragment = {
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "bid",
      "type": "ID!",
      "defaultValue": null
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "SingleBooking",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "bid",
          "type": "ID!"
        }
      ],
      "concreteType": "Booking",
      "name": "booking",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "id",
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "status",
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "OverviewRow_node",
          "args": null
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
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "RootQuery"
};

module.exports = node;
