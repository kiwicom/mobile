/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type BookedServiceCategory = "ALLOCATED_SEATING" | "BAGS" | "EXTRAS_BAGS" | "EXTRAS_CHANGE_FLIGHT" | "EXTRAS_OTHER" | "EXTRAS_PASSENGER_DETAILS_CHANGE" | "FLIGHTS" | "MEALS_ON_BOARD" | "MUSICAL_EQUIPMENT" | "PRICE_CHANGE" | "SPECIAL_ASSISTANCE" | "SPORTS_EQUIPMENT" | "TRAVELLING_WITH_PETS" | "UPDATE_INSURANCES" | "%future added value";
export type BookedServiceStatus = "CLOSED" | "CONFIRMED" | "OPEN" | "PENDING" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type FlightServicesMenuGroup_bookedServices$ref: FragmentReference;
export type FlightServicesMenuGroup_bookedServices = {|
  +databaseId: ?number,
  +authToken: ?string,
  +bookedServices: ?$ReadOnlyArray<?{|
    +category: ?BookedServiceCategory,
    +status: ?BookedServiceStatus,
  |}>,
  +$refType: FlightServicesMenuGroup_bookedServices$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FlightServicesMenuGroup_bookedServices",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "bookedServices",
      "storageKey": null,
      "args": null,
      "concreteType": "BookedService",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "category",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "status",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '4ff3cd58dd3b13f21228b9b484c2e9f9';
module.exports = node;
