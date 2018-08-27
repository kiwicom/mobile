/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type VehicleType = "AIRCRAFT" | "BUS" | "TRAIN" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type FlightServicesMenuItem$ref: FragmentReference;
export type FlightServicesMenuItem = $ReadOnlyArray<{|
  +legs: ?$ReadOnlyArray<?{|
    +type: ?VehicleType
  |}>,
  +$refType: FlightServicesMenuItem$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FlightServicesMenuItem",
  "type": "Trip",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
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
          "name": "type",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b12ee34656662e8c5373be67ee0799eb';
module.exports = node;
