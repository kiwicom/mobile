/**
 * @flow
 * @relayHash 41ee35dc6cac420e3097cf7b8c01a5f0
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
  +booking: ?{|
    +$fragmentRefs: FlightServicesMenuGroup_bookedServices$ref
  |}
|};
*/


/*
query FlightServicesQuery(
  $id: ID!
) {
  booking(id: $id) {
    ...FlightServicesMenuGroup_bookedServices
    id
  }
}

fragment FlightServicesMenuGroup_bookedServices on Booking {
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
  "text": "query FlightServicesQuery(\n  $id: ID!\n) {\n  booking(id: $id) {\n    ...FlightServicesMenuGroup_bookedServices\n    id\n  }\n}\n\nfragment FlightServicesMenuGroup_bookedServices on Booking {\n  databaseId\n  bookedServices {\n    category\n    status\n  }\n}\n",
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
        "name": "booking",
        "storageKey": null,
        "args": v1,
        "concreteType": "Booking",
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
        "name": "booking",
        "storageKey": null,
        "args": v1,
        "concreteType": "Booking",
        "plural": false,
        "selections": [
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
(node/*: any*/).hash = 'd5a7ed23a1d07f1cc27e950f3c8cceb4';
module.exports = node;
