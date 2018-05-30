/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
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
  +visaInformation: ?{|
    +requiredIn: ?$ReadOnlyArray<?{|
      +name: ?string
    |}>,
    +warningIn: ?$ReadOnlyArray<?{|
      +name: ?string
    |}>,
  |},
  +$refType: Passenger_passenger$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }
];
return {
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
      "kind": "LinkedField",
      "alias": null,
      "name": "visaInformation",
      "storageKey": null,
      "args": null,
      "concreteType": "Visa",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "requiredIn",
          "storageKey": null,
          "args": null,
          "concreteType": "Location",
          "plural": true,
          "selections": v0
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "warningIn",
          "storageKey": null,
          "args": null,
          "concreteType": "Location",
          "plural": true,
          "selections": v0
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '716c048f169a8890e173d03b07ef1d92';
module.exports = node;
