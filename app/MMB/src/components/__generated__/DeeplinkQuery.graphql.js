/**
 * @flow
 * @relayHash 79a58b1013d0a2c96c78c8547d7f16d4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DirectAccessURLValues = "ASSISTANCE" | "BAGS" | "CANCEL" | "CAR_RENTS" | "CHANGE_TRIP" | "EDIT_PASSENGERS" | "HOTELS" | "INSURANCE" | "MUSICAL_EQUIPMENT" | "PAYMENT" | "PENDING_SERVICES" | "PETS" | "REFUND" | "SEATING" | "SPORT_EQUIPMENT" | "TRAVEL_DOCUMENTS" | "VALIDATE_PAYMENT" | "%future added value";
export type DeeplinkQueryVariables = {|
  bookingId: number,
  authToken: string,
  deeplinkTo?: ?DirectAccessURLValues,
|};
export type DeeplinkQueryResponse = {|
  +singleBooking: ?{|
    +directAccessURL: ?string
  |}
|};
export type DeeplinkQuery = {|
  variables: DeeplinkQueryVariables,
  response: DeeplinkQueryResponse,
|};
*/


/*
query DeeplinkQuery(
  $bookingId: Int!
  $authToken: String!
  $deeplinkTo: DirectAccessURLValues
) {
  singleBooking(id: $bookingId, authToken: $authToken) {
    __typename
    directAccessURL(deeplinkTo: $deeplinkTo)
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "bookingId",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "authToken",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "deeplinkTo",
    "type": "DirectAccessURLValues",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "authToken",
    "variableName": "authToken",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "bookingId",
    "type": "Int!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "directAccessURL",
  "args": [
    {
      "kind": "Variable",
      "name": "deeplinkTo",
      "variableName": "deeplinkTo",
      "type": "DirectAccessURLValues"
    }
  ],
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "DeeplinkQuery",
  "id": null,
  "text": "query DeeplinkQuery(\n  $bookingId: Int!\n  $authToken: String!\n  $deeplinkTo: DirectAccessURLValues\n) {\n  singleBooking(id: $bookingId, authToken: $authToken) {\n    __typename\n    directAccessURL(deeplinkTo: $deeplinkTo)\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeeplinkQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "singleBooking",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DeeplinkQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "singleBooking",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
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
(node/*: any*/).hash = 'c857d0c9c2945f331315f52f26fcf929';
module.exports = node;
