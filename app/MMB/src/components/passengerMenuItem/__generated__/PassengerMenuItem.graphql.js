/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type InsuranceType = "NONE" | "TRAVEL_BASIC" | "TRAVEL_PLUS" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type PassengerMenuItem$ref: FragmentReference;
export type PassengerMenuItem = {|
  +fullName: ?string,
  +title: ?string,
  +birthday: ?any,
  +databaseId: ?number,
  +insuranceType: ?InsuranceType,
  +travelDocument: ?{|
    +idNumber: ?string,
    +expiration: ?any,
  |},
  +$refType: PassengerMenuItem$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "PassengerMenuItem",
  "type": "Passenger",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "fullName",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "birthday",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "insuranceType",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "travelDocument",
      "storageKey": null,
      "args": null,
      "concreteType": "TravelDocument",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "idNumber",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "expiration",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '2f67496b5de92e890d9079aa07249511';
module.exports = node;
