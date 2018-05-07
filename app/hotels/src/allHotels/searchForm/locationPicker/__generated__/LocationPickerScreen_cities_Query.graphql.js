/**
 * @flow
 * @relayHash db9d1ea9df5960becd95a56eefbd0f9c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SuggestionList_data$ref = any;
export type LocationPickerScreen_cities_QueryVariables = {|
  prefix: string
|};
export type LocationPickerScreen_cities_QueryResponse = {|
  +$fragmentRefs: SuggestionList_data$ref
|};
*/


/*
query LocationPickerScreen_cities_Query(
  $prefix: String!
) {
  ...SuggestionList_data_3WHZd4
}

fragment SuggestionList_data_3WHZd4 on RootQuery {
  hotelCities(prefix: $prefix, first: 50) {
    edges {
      node {
        id
        name
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
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
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "LocationPickerScreen_cities_Query",
  "id": null,
  "text": "query LocationPickerScreen_cities_Query(\n  $prefix: String!\n) {\n  ...SuggestionList_data_3WHZd4\n}\n\nfragment SuggestionList_data_3WHZd4 on RootQuery {\n  hotelCities(prefix: $prefix, first: 50) {\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "LocationPickerScreen_cities_Query",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "SuggestionList_data",
        "args": [
          {
            "kind": "Variable",
            "name": "prefix",
            "variableName": "prefix",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LocationPickerScreen_cities_Query",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "hotelCities",
        "storageKey": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 50,
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
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "hotelCities",
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 50,
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "prefix",
            "variableName": "prefix",
            "type": "String"
          }
        ],
        "handle": "connection",
        "key": "SuggestionList_hotelCities",
        "filters": [
          "prefix"
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1eb719b4c2b6d8157c0f806579c2c99e';
module.exports = node;
