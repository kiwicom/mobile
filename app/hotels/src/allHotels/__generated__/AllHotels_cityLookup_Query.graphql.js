/**
 * @flow
 * @relayHash 0a34ba081e1846d87d8646100bda4d0f
 */

/* eslint-disable */

import type { ConcreteBatch } from 'relay-runtime';
export type AllHotels_cityLookup_QueryResponse = {|
  +city: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string;
      |};
    |}>;
  |};
|};

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
    "name": "AllHotels_cityLookup_Query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "city",
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
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AllHotels_cityLookup_Query",
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
    "name": "AllHotels_cityLookup_Query",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "city",
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
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query AllHotels_cityLookup_Query(\n  $prefix: String!\n) {\n  city: hotelCities(prefix: $prefix, first: 1) {\n    edges {\n      node {\n        id\n      }\n    }\n  }\n}\n"
};

module.exports = node;
