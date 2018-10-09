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
  +databaseId: ?number,
  +authToken: ?string,
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
      "name": "databaseId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "authToken",
      "args": null,
      "storageKey": null
    },
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
(node/*: any*/).hash = '4f09be7f3be6a16acb643c1e359bdc9e';
module.exports = node;
