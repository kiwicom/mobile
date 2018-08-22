/**
 * @flow
 * @relayHash a97dc2bc341f0b6d3932df0a454af20f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type InsuranceType = "NONE" | "TRAVEL_BASIC" | "TRAVEL_PLUS" | "%future added value";
export type PassengerInsuranceInput = {
  passengerId: number,
  insuranceType?: ?InsuranceType,
};
export type RefundInsuranceMutationVariables = {|
  id: string,
  passengers: $ReadOnlyArray<PassengerInsuranceInput>,
  simpleToken: string,
|};
export type RefundInsuranceMutationResponse = {|
  +refundInsurance: ?{|
    +passengers: ?$ReadOnlyArray<?{|
      +databaseId: ?number,
      +insuranceType: ?InsuranceType,
    |}>
  |}
|};
export type RefundInsuranceMutation = {|
  variables: RefundInsuranceMutationVariables,
  response: RefundInsuranceMutationResponse,
|};
*/


/*
mutation RefundInsuranceMutation(
  $id: ID!
  $passengers: [PassengerInsuranceInput!]!
  $simpleToken: String!
) {
  refundInsurance(id: $id, passengers: $passengers, simpleToken: $simpleToken) {
    passengers {
      databaseId
      insuranceType
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "passengers",
    "type": "[PassengerInsuranceInput!]!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "simpleToken",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  },
  {
    "kind": "Variable",
    "name": "passengers",
    "variableName": "passengers",
    "type": "[PassengerInsuranceInput!]!"
  },
  {
    "kind": "Variable",
    "name": "simpleToken",
    "variableName": "simpleToken",
    "type": "String!"
  }
],
v2 = {
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
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "RefundInsuranceMutation",
  "id": null,
  "text": "mutation RefundInsuranceMutation(\n  $id: ID!\n  $passengers: [PassengerInsuranceInput!]!\n  $simpleToken: String!\n) {\n  refundInsurance(id: $id, passengers: $passengers, simpleToken: $simpleToken) {\n    passengers {\n      databaseId\n      insuranceType\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "RefundInsuranceMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "refundInsurance",
        "storageKey": null,
        "args": v1,
        "concreteType": "Booking",
        "plural": false,
        "selections": [
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "RefundInsuranceMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "refundInsurance",
        "storageKey": null,
        "args": v1,
        "concreteType": "Booking",
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'daf4f7209b098293a2775148e70dd5f6';
module.exports = node;
