/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type BookingType = "MULTICITY" | "ONE_WAY" | "RETURN" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripInfo$ref: FragmentReference;
export type TripInfo = {|
  +type: ?BookingType,
  +$refType: TripInfo$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TripInfo",
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
(node/*: any*/).hash = '0edac565bb0472626900f0c6b56217a3';
module.exports = node;
