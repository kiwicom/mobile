/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CityImage_arrival$ref = any;
type CityImage_departure$ref = any;
export type BookingStatus = "CANCELLED" | "CLOSED" | "CONFIRMED" | "DELETED" | "EXPIRED" | "NEW" | "PENDING" | "REFUNDED" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type MulticityFlight_booking$ref: FragmentReference;
export type MulticityFlight_booking = {|
  +status: ?BookingStatus,
  +databaseId: ?number,
  +end: ?{|
    +$fragmentRefs: CityImage_arrival$ref
  |},
  +start: ?{|
    +$fragmentRefs: CityImage_departure$ref
  |},
  +$refType: MulticityFlight_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MulticityFlight_booking",
  "type": "BookingMulticity",
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
      "name": "databaseId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "end",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "CityImage_arrival",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "start",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "CityImage_departure",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '31cb75e73edef623df1791cb71514ef4';
module.exports = node;
