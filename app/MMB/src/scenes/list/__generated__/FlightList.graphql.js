/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type MulticityFlight_booking$ref = any;
type OneWayFlight_booking$ref = any;
type ReturnFlight_booking$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FlightList$ref: FragmentReference;
export type FlightList = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string,
      +__typename: string,
      +$fragmentRefs: OneWayFlight_booking$ref & ReturnFlight_booking$ref & MulticityFlight_booking$ref,
    |}
  |}>,
  +$refType: FlightList$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FlightList",
  "type": "BookingInterfaceConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "BookingInterfaceEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": null,
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "id",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "__typename",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "InlineFragment",
              "type": "BookingMulticity",
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "MulticityFlight_booking",
                  "args": null
                }
              ]
            },
            {
              "kind": "InlineFragment",
              "type": "BookingReturn",
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "ReturnFlight_booking",
                  "args": null
                }
              ]
            },
            {
              "kind": "InlineFragment",
              "type": "BookingOneWay",
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "OneWayFlight_booking",
                  "args": null
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
(node/*: any*/).hash = '2d027f561873167755bdf34fcb39262a';
module.exports = node;
