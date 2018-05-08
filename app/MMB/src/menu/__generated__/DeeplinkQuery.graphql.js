/**
 * @flow
 * @relayHash d4e083b592e7a4b773a6c9e685982648
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DirectAccessURLValues = "ASSISTANCE" | "BAGS" | "CANCEL" | "CAR_RENTS" | "CHANGE_TRIP" | "EDIT_PASSENGERS" | "HOTELS" | "INSURANCE" | "MUSICAL_EQUIPMENT" | "PAYMENT" | "PENDING_SERVICES" | "PETS" | "REFUND" | "SEATING" | "SPORT_EQUIPMENT" | "TRAVEL_DOCUMENTS" | "VALIDATE_PAYMENT" | "%future added value";
export type DeeplinkQueryVariables = {|
  bookingId: string,
  deeplinkTo?: ?DirectAccessURLValues,
|};
export type DeeplinkQueryResponse = {|
  +booking: ?{|
    +directAccessURL: ?string
  |}
|};
*/


/*
query DeeplinkQuery(
  $bookingId: ID!
  $deeplinkTo: DirectAccessURLValues
) {
  booking(id: $bookingId) {
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
    "type": "ID!",
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
    "name": "id",
    "variableName": "bookingId",
    "type": "ID!"
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
  "text": "query DeeplinkQuery(\n  $bookingId: ID!\n  $deeplinkTo: DirectAccessURLValues\n) {\n  booking(id: $bookingId) {\n    directAccessURL(deeplinkTo: $deeplinkTo)\n    id\n  }\n}\n",
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
        "name": "booking",
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
    "name": "DeeplinkQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "booking",
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
(node/*: any*/).hash = '6463ac541f13f1fe3443f85c62924c3c';
module.exports = node;
