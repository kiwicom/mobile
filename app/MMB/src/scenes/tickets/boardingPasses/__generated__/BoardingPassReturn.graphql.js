/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type BoardingPassReturn$ref: FragmentReference;
export type BoardingPassReturn = {|
  +outbound: ?{|
    +legs: ?$ReadOnlyArray<?{|
      +id: string,
      +departure: ?{|
        +airport: ?{|
          +city: ?{|
            +name: ?string
          |}
        |}
      |},
      +boardingPass: ?{|
        +boardingPassUrl: ?string
      |},
    |}>
  |},
  +$refType: BoardingPassReturn$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BoardingPassReturn",
  "type": "BookingReturn",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "outbound",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "legs",
          "storageKey": null,
          "args": null,
          "concreteType": "Leg",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "id",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "departure",
              "storageKey": null,
              "args": null,
              "concreteType": "RouteStop",
              "plural": false,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "airport",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "Location",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "LinkedField",
                      "alias": null,
                      "name": "city",
                      "storageKey": null,
                      "args": null,
                      "concreteType": "LocationArea",
                      "plural": false,
                      "selections": [
                        {
                          "kind": "ScalarField",
                          "alias": null,
                          "name": "name",
                          "args": null,
                          "storageKey": null
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "boardingPass",
              "storageKey": null,
              "args": null,
              "concreteType": "BoardingPass",
              "plural": false,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "boardingPassUrl",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '38dc6391e6fda38ac84b24b9da43296f';
module.exports = node;
