/**
 * @flow
 * @relayHash 5b226bb53c0138bbdb5cc990c4c85794
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PassengerInput = {
  passengerId: number,
  documentExpiry?: ?any,
  documentNumber: string,
};
export type UpdatePassengerMutationVariables = {|
  id: string,
  passengers: $ReadOnlyArray<PassengerInput>,
  simpleToken: string,
|};
export type UpdatePassengerMutationResponse = {|
  +updatePassenger: ?{|
    +success: ?boolean
  |}
|};
*/


/*
mutation UpdatePassengerMutation(
  $id: ID!
  $passengers: [PassengerInput!]!
  $simpleToken: String!
) {
  updatePassenger(id: $id, passengers: $passengers, simpleToken: $simpleToken) {
    success
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
    "type": "[PassengerInput!]!",
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
    "kind": "LinkedField",
    "alias": null,
    "name": "updatePassenger",
    "storageKey": null,
    "args": [
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
        "type": "[PassengerInput!]!"
      },
      {
        "kind": "Variable",
        "name": "simpleToken",
        "variableName": "simpleToken",
        "type": "String"
      }
    ],
    "concreteType": "UpdatePassenger",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "success",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UpdatePassengerMutation",
  "id": null,
  "text": "mutation UpdatePassengerMutation(\n  $id: ID!\n  $passengers: [PassengerInput!]!\n  $simpleToken: String!\n) {\n  updatePassenger(id: $id, passengers: $passengers, simpleToken: $simpleToken) {\n    success\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdatePassengerMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdatePassengerMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6e3b9dbd9a0186b24dcf8b5a07796a73';
module.exports = node;
