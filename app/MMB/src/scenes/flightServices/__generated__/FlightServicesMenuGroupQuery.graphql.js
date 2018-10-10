/**
 * @flow
 * @relayHash 46df2e8fd8a4ae0bcaa9b56fd4c047ea
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FlightServicesMenuGroup_bookedServices$ref = any;
export type FlightServicesMenuGroupQueryVariables = {|
  id: number,
  authToken: string,
|};
export type FlightServicesMenuGroupQueryResponse = {|
  +singleBooking: ?{|
    +$fragmentRefs: FlightServicesMenuGroup_bookedServices$ref
  |}
|};
export type FlightServicesMenuGroupQuery = {|
  variables: FlightServicesMenuGroupQueryVariables,
  response: FlightServicesMenuGroupQueryResponse,
|};
*/


/*
query FlightServicesMenuGroupQuery(
  $id: Int!
  $authToken: String!
) {
  singleBooking(id: $id, authToken: $authToken) {
    __typename
    ...FlightServicesMenuGroup_bookedServices
    id
  }
}

fragment FlightServicesMenuGroup_bookedServices on BookingInterface {
  databaseId
  authToken
  bookedServices {
    category
    status
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "authToken",
    "type": "String!",
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
    "variableName": "id",
    "type": "Int!"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FlightServicesMenuGroupQuery",
  "id": null,
  "text": "query FlightServicesMenuGroupQuery(\n  $id: Int!\n  $authToken: String!\n) {\n  singleBooking(id: $id, authToken: $authToken) {\n    __typename\n    ...FlightServicesMenuGroup_bookedServices\n    id\n  }\n}\n\nfragment FlightServicesMenuGroup_bookedServices on BookingInterface {\n  databaseId\n  authToken\n  bookedServices {\n    category\n    status\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FlightServicesMenuGroupQuery",
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
          {
            "kind": "FragmentSpread",
            "name": "FlightServicesMenuGroup_bookedServices",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FlightServicesMenuGroupQuery",
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
          },
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
(node/*: any*/).hash = '8240d50cc2e0483f2b747a491542e00e';
module.exports = node;
