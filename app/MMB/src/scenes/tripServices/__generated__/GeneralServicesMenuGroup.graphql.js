/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type InsuranceMenuItemContainer$ref = any;
export type BookingStatus = "CANCELLED" | "CLOSED" | "CONFIRMED" | "DELETED" | "EXPIRED" | "NEW" | "PENDING" | "REFUNDED" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type GeneralServicesMenuGroup$ref: FragmentReference;
export type GeneralServicesMenuGroup = {|
  +status: ?BookingStatus,
  +passengers: ?$ReadOnlyArray<?{|
    +nationality: ?string
  |}>,
  +isPastBooking: ?boolean,
  +$fragmentRefs: InsuranceMenuItemContainer$ref,
  +$refType: GeneralServicesMenuGroup$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "GeneralServicesMenuGroup",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "passengers",
      "storageKey": null,
      "args": null,
      "concreteType": "Passenger",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "nationality",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isPastBooking",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "InsuranceMenuItemContainer",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd3e40c47d763e6a0145af8d0e9f31579';
module.exports = node;
