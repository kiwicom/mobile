/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type BookingsListRow_node = {|
  +legs: ?$ReadOnlyArray<?{|
    +id: ?string;
    +airline: ?{|
      +name: ?string;
      +logoUrl: ?string;
    |};
    +departure: ?{|
      +localTime: ?any;
    |};
    +arrival: ?{|
      +localTime: ?any;
    |};
  |}>;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "BookingsListRow_node",
  "selections": [
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
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "name",
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "logoUrl",
              "storageKey": null
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Booking"
};

module.exports = fragment;
