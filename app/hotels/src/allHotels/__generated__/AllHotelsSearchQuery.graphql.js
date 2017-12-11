/**
 * @flow
 * @relayHash 1965c0b886027961fc4445d3ace89b8e
 */

/* eslint-disable */

import type { ConcreteBatch } from 'relay-runtime';
export type AllHotelsSearchQueryResponse = {|
  +allHotels: ?{| |};
|};

/*
query AllHotelsSearchQuery(
  $search: HotelsSearchInput!
) {
  allHotels(search: $search) {
    ...AllHotelsSearchList
  }
}

fragment AllHotelsSearchList on HotelConnection {
  edges {
    node {
      id
      ...AllHotelsSearchRow
    }
  }
}

fragment AllHotelsSearchRow on Hotel {
  id
  price {
    amount
    currency
  }
}
*/

const node: ConcreteBatch = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "search",
        "type": "HotelsSearchInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AllHotelsSearchQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "search",
            "variableName": "search",
            "type": "HotelsSearchInput!"
          }
        ],
        "concreteType": "HotelConnection",
        "name": "allHotels",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "AllHotelsSearchList",
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
  "name": "AllHotelsSearchQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "search",
        "type": "HotelsSearchInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "AllHotelsSearchQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "search",
            "variableName": "search",
            "type": "HotelsSearchInput!"
          }
        ],
        "concreteType": "HotelConnection",
        "name": "allHotels",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "HotelEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Hotel",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Price",
                    "name": "price",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "amount",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "currency",
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
        "storageKey": null
      }
    ]
  },
  "text": "query AllHotelsSearchQuery(\n  $search: HotelsSearchInput!\n) {\n  allHotels(search: $search) {\n    ...AllHotelsSearchList\n  }\n}\n\nfragment AllHotelsSearchList on HotelConnection {\n  edges {\n    node {\n      id\n      ...AllHotelsSearchRow\n    }\n  }\n}\n\nfragment AllHotelsSearchRow on Hotel {\n  id\n  price {\n    amount\n    currency\n  }\n}\n"
};

module.exports = node;
