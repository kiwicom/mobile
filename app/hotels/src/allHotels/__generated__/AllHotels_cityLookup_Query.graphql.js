/**
 * @flow
 * @relayHash b77093cfb5584f47c5df8a8f9e468f20
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AllHotels_cityLookup_QueryVariables = {|
  prefix: string,
|};
export type AllHotels_cityLookup_QueryResponse = {|
  +city: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
      |},
    |}>,
  |},
|};
*/


/*
query AllHotels_cityLookup_Query(
  $prefix: String!
) {
  city: hotelCities(prefix: $prefix, first: 1) {
    edges {
      node {
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "prefix",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": "city",
    "name": "hotelCities",
    "storageKey": null,
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 1,
        "type": "Int"
      },
      {
        "kind": "Variable",
        "name": "prefix",
        "variableName": "prefix",
        "type": "String"
      }
    ],
    "concreteType": "HotelCityConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "HotelCityEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "HotelCity",
            "plural": false,
            "selections": [
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
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AllHotels_cityLookup_Query",
  "id": null,
  "text": "query AllHotels_cityLookup_Query(\n  $prefix: String!\n) {\n  city: hotelCities(prefix: $prefix, first: 1) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AllHotels_cityLookup_Query",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "AllHotels_cityLookup_Query",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = '81a181ab2d4659a1f1011bf3a3017802';
module.exports = node;
