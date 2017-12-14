/**
 * @flow
 * @relayHash d6ccd2bcfb65d6f5a855166fefee2f26
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
  name
  price {
    amount
    currency
  }
  mainPhoto {
    thumbnailUrl
    id
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
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "name",
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
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "HotelPhoto",
                    "name": "mainPhoto",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "thumbnailUrl",
                        "storageKey": null
                      },
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
        "storageKey": null
      }
    ]
  },
  "text": "query AllHotelsSearchQuery(\n  $search: HotelsSearchInput!\n) {\n  allHotels(search: $search) {\n    ...AllHotelsSearchList\n  }\n}\n\nfragment AllHotelsSearchList on HotelConnection {\n  edges {\n    node {\n      id\n      ...AllHotelsSearchRow\n    }\n  }\n}\n\nfragment AllHotelsSearchRow on Hotel {\n  id\n  name\n  price {\n    amount\n    currency\n  }\n  mainPhoto {\n    thumbnailUrl\n    id\n  }\n}\n"
};

module.exports = node;
