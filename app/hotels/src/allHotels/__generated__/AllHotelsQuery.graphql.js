/**
 * @flow
 * @relayHash ef474d82a78206722181529e1f20df60
 */

/* eslint-disable */

import type { ConcreteBatch } from 'relay-runtime';
export type AllHotelsQueryResponse = {|
  +city: ?{| |};
|};

/*
query AllHotelsQuery(
  $prefix: String!
) {
  city: hotelCities(prefix: $prefix, first: 1) {
    ...AllHotelsSearch
  }
}

fragment AllHotelsSearch on HotelCityConnection {
  edges {
    node {
      id
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
    "name": "AllHotelsQuery",
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
            "kind": "FragmentSpread",
            "name": "AllHotelsSearch",
            "args": null
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
  "name": "AllHotelsQuery",
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
    "name": "AllHotelsQuery",
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
  "text": "query AllHotelsQuery(\n  $prefix: String!\n) {\n  city: hotelCities(prefix: $prefix, first: 1) {\n    ...AllHotelsSearch\n  }\n}\n\nfragment AllHotelsSearch on HotelCityConnection {\n  edges {\n    node {\n      id\n    }\n  }\n}\n"
};

module.exports = node;
