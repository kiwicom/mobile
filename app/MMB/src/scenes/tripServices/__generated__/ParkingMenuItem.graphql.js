/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ParkingMenuItem$ref: FragmentReference;
export type ParkingMenuItem = {|
  +parking: ?{|
    +whitelabelURL: ?string
  |},
  +$refType: ParkingMenuItem$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ParkingMenuItem",
  "type": "WhitelabeledServices",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "departureTime",
      "type": "DateTime!",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "arrivalTime",
      "type": "DateTime!",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "parking",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "fromDate",
          "variableName": "departureTime",
          "type": "DateTime!"
        },
        {
          "kind": "Variable",
          "name": "toDate",
          "variableName": "arrivalTime",
          "type": "DateTime!"
        }
      ],
      "concreteType": "ParkingService",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "whitelabelURL",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b97fd398cd900a682de7cfe712264018';
module.exports = node;
