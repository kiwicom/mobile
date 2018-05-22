/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type VisaInformation_visa$ref = any;
export type InsuranceType = "NONE" | "TRAVEL_BASIC" | "TRAVEL_PLUS" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type Passenger_passenger$ref: FragmentReference;
export type Passenger_passenger = {|
  +fullName: ?string,
  +title: ?string,
  +birthday: ?any,
  +nationality: ?string,
  +travelDocument: ?{|
    +idNumber: ?string
  |},
  +insuranceType: ?InsuranceType,
  +$fragmentRefs: VisaInformation_visa$ref,
  +$refType: Passenger_passenger$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Passenger_passenger",
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
      "name": "nationality",
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
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "insuranceType",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "VisaInformation_visa",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b2093f050c07c992a8849e420b204ea4';
module.exports = node;
