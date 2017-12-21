/**
 * @flow
 * @relayHash ec4f06e3f309d6f5717f69ca8029e2d2
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
  allHotels: allAvailableHotels(search: $search) {
    ...AllHotelsSearchList
  }
}

fragment AllHotelsSearchList on HotelAvailabilityConnection {
  edges {
    node {
      id
      ...AllHotelsSearchRow
    }
  }
}

fragment AllHotelsSearchRow on HotelAvailability {
  id
  price {
    amount
    currency
  }
  hotel {
    name
    mainPhoto {
      thumbnailUrl
      id
    }
    rating {
      stars
    }
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
        "alias": "allHotels",
        "args": [
          {
            "kind": "Variable",
            "name": "search",
            "variableName": "search",
            "type": "HotelsSearchInput!"
          }
        ],
        "concreteType": "HotelAvailabilityConnection",
        "name": "allAvailableHotels",
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
        "alias": "allHotels",
        "args": [
          {
            "kind": "Variable",
            "name": "search",
            "variableName": "search",
            "type": "HotelsSearchInput!"
          }
        ],
        "concreteType": "HotelAvailabilityConnection",
        "name": "allAvailableHotels",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "HotelAvailabilityEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "HotelAvailability",
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
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Hotel",
                    "name": "hotel",
                    "plural": false,
                    "selections": [
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
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "HotelRating",
                        "name": "rating",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "stars",
                            "storageKey": null
                          }
                        ],
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
  "text": "query AllHotelsSearchQuery(\n  $search: HotelsSearchInput!\n) {\n  allHotels: allAvailableHotels(search: $search) {\n    ...AllHotelsSearchList\n  }\n}\n\nfragment AllHotelsSearchList on HotelAvailabilityConnection {\n  edges {\n    node {\n      id\n      ...AllHotelsSearchRow\n    }\n  }\n}\n\nfragment AllHotelsSearchRow on HotelAvailability {\n  id\n  price {\n    amount\n    currency\n  }\n  hotel {\n    name\n    mainPhoto {\n      thumbnailUrl\n      id\n    }\n    rating {\n      stars\n    }\n    id\n  }\n}\n"
};

module.exports = node;
