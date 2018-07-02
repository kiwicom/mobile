/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FlightFromTo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type OutboundFlights$ref: FragmentReference;
export type OutboundFlights = {|
  +outbound: ?{|
    +legs: ?$ReadOnlyArray<?{|
      +id: string,
      +$fragmentRefs: FlightFromTo$ref,
    |}>
  |},
  +$refType: OutboundFlights$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "OutboundFlights",
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
              "kind": "FragmentSpread",
              "name": "FlightFromTo",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '40e147f599679e03859f19829161fa65';
module.exports = node;
