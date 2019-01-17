/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type BookingStatus = "CANCELLED" | "CLOSED" | "CONFIRMED" | "DELETED" | "EXPIRED" | "IN_PROCESS" | "NEW" | "PENDING" | "REFUNDED" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type StatusBadge$ref: FragmentReference;
export type StatusBadge = {|
  +status: ?BookingStatus,
  +isPastBooking: ?boolean,
  +$refType: StatusBadge$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "StatusBadge",
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
(node/*: any*/).hash = 'd237827f3f443e28707f9edddd903206';
module.exports = node;
