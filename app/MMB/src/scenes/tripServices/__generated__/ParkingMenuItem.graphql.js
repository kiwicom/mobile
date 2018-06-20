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
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "parking",
      "storageKey": null,
      "args": null,
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
(node/*: any*/).hash = '82e9bb44eeb965f6893bcad381cc19b5';
module.exports = node;
