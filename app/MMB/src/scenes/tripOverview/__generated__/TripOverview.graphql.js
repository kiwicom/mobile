/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type BookingType = "MULTICITY" | "ONE_WAY" | "RETURN" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripOverview$ref: FragmentReference;
export type TripOverview = {|
  +type: ?BookingType,
  +$refType: TripOverview$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TripOverview",
  "type": "Booking",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'bf02b0100fd77ef096f625fe6ac2cb0a';
module.exports = node;
