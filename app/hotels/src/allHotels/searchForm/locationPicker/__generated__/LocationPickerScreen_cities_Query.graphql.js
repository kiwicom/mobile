/**
 * @flow
 * @relayHash afea8ca070d3c4750774d75ed9fb4162
 */

/* eslint-disable */

import type { ConcreteBatch } from 'relay-runtime';
export type LocationPickerScreen_cities_QueryResponse = {| |};

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
        __typename
        id
        name
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

const node: ConcreteBatch = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "prefix",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "LocationPickerScreen_cities_Query",
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
    ],
    "type": "RootQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "LocationPickerScreen_cities_Query",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "prefix",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "LocationPickerScreen_cities_Query",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
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
        "name": "hotelCities",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "HotelCityEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "HotelCity",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "name",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "endCursor",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
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
        "name": "hotelCities",
        "key": "SuggestionList_hotelCities",
        "filters": [
          "prefix"
        ]
      }
    ]
  },
  "text": "query LocationPickerScreen_cities_Query(\n  $prefix: String!\n) {\n  ...SuggestionList_data_3WHZd4\n}\n\nfragment SuggestionList_data_3WHZd4 on RootQuery {\n  hotelCities(prefix: $prefix, first: 50) {\n    edges {\n      node {\n        __typename\n        id\n        name\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
};

module.exports = node;
