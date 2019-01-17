/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type InsuranceMenuItem$ref = any;
export type BookingStatus = "CANCELLED" | "CLOSED" | "CONFIRMED" | "DELETED" | "EXPIRED" | "IN_PROCESS" | "NEW" | "PENDING" | "REFUNDED" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type InsuranceMenuItemContainer$ref: FragmentReference;
export type InsuranceMenuItemContainer = {|
  +__typename: string,
  +status: ?BookingStatus,
  +passengers: ?$ReadOnlyArray<?{|
    +nationality: ?string
  |}>,
  +isPastBooking: ?boolean,
  +trip?: ?{|
    +$fragmentRefs: InsuranceMenuItem$ref
  |},
  +outbound?: ?{|
    +$fragmentRefs: InsuranceMenuItem$ref
  |},
  +trips?: ?$ReadOnlyArray<?{|
    +$fragmentRefs: InsuranceMenuItem$ref
  |}>,
  +$refType: InsuranceMenuItemContainer$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "InsuranceMenuItem",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "InsuranceMenuItemContainer",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__typename",
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
      "kind": "InlineFragment",
      "type": "BookingMulticity",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "trips",
          "storageKey": null,
          "args": null,
          "concreteType": "Trip",
          "plural": true,
          "selections": v0
        }
      ]
    },
    {
      "kind": "InlineFragment",
      "type": "BookingReturn",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "outbound",
          "storageKey": null,
          "args": null,
          "concreteType": "Trip",
          "plural": false,
          "selections": v0
        }
      ]
    },
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
          "selections": v0
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c9116e5f9baa3b77ce476c5694e461a9';
module.exports = node;
