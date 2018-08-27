/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FlightServicesMenuItem$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FlightServicesOneWay$ref: FragmentReference;
export type FlightServicesOneWay = {|
  +trip?: ?{|
    +$fragmentRefs: FlightServicesMenuItem$ref
  |},
  +$refType: FlightServicesOneWay$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FlightServicesOneWay",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "InlineFragment",
      "type": "BookingOneWay",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "trip",
          "storageKey": null,
          "args": null,
          "concreteType": "Trip",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "FlightServicesMenuItem",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'c89d669d71bba8dea2a97c1f26311fdb';
module.exports = node;
