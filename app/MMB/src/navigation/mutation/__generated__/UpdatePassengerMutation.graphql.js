/**
 * @flow
 * @relayHash 017b96c58f9612d50b4e82e5556f4872
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
) {
  updatePassenger(id: $id, passengers: $passengers) {
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
  "text": "mutation UpdatePassengerMutation(\n  $id: ID!\n  $passengers: [PassengerInput!]!\n) {\n  updatePassenger(id: $id, passengers: $passengers) {\n    success\n  }\n}\n",
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
(node/*: any*/).hash = '1e156e67a56e2b828b5f3312d5a4a2b3';
module.exports = node;
