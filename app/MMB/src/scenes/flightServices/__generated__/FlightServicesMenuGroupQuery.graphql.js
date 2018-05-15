/**
 * @flow
 * @relayHash bdb946b18c770add72aaba2eb7951e76
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FlightServicesMenuGroup_bookedServices$ref = any;
export type FlightServicesMenuGroupQueryVariables = {|
  id: string
|};
export type FlightServicesMenuGroupQueryResponse = {|
  +booking: ?{|
    +$fragmentRefs: FlightServicesMenuGroup_bookedServices$ref
  |}
|};
*/


/*
query FlightServicesMenuGroupQuery(
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
  "name": "FlightServicesMenuGroupQuery",
  "id": null,
  "text": "query FlightServicesMenuGroupQuery(\n  $id: ID!\n) {\n  booking(id: $id) {\n    ...FlightServicesMenuGroup_bookedServices\n    id\n  }\n}\n\nfragment FlightServicesMenuGroup_bookedServices on Booking {\n  databaseId\n  bookedServices {\n    category\n    status\n  }\n}\n",
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
    "name": "FlightServicesMenuGroupQuery",
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
(node/*: any*/).hash = '6143f722411592a15d2fbb3c82e13678';
module.exports = node;
