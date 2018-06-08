/**
 * @flow
 * @relayHash 137c38d6f687ee8755930a3fa8dd3245
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FlightServicesMenuGroup_bookedServices$ref = any;
export type FlightServicesQueryVariables = {|
  id: string
|};
export type FlightServicesQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: FlightServicesMenuGroup_bookedServices$ref
  |}
|};
*/


/*
query FlightServicesQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on BookingInterface {
      ...FlightServicesMenuGroup_bookedServices
    }
    id
  }
}

fragment FlightServicesMenuGroup_bookedServices on BookingInterface {
  databaseId
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
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FlightServicesQuery",
  "id": null,
  "text": "query FlightServicesQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on BookingInterface {\n      ...FlightServicesMenuGroup_bookedServices\n    }\n    id\n  }\n}\n\nfragment FlightServicesMenuGroup_bookedServices on BookingInterface {\n  databaseId\n  bookedServices {\n    category\n    status\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FlightServicesQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
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
    "name": "FlightServicesQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
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
(node/*: any*/).hash = 'bc9f19f55d9a7046fe2af0134778d356';
module.exports = node;
