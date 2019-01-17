/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type BookingStatus = "CANCELLED" | "CLOSED" | "CONFIRMED" | "DELETED" | "EXPIRED" | "IN_PROCESS" | "NEW" | "PENDING" | "REFUNDED" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type StatusBarIcon$ref: FragmentReference;
export type StatusBarIcon = {|
  +status: ?BookingStatus,
  +isPastBooking: ?boolean,
  +$refType: StatusBarIcon$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "StatusBarIcon",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "status",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isPastBooking",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ac5a2db7c2fabdd8308f5d5aa579db07';
module.exports = node;
