/**
 * @flow
 * @relayHash 88fd7893cd2d92f635a186372e87f476
 */

/* eslint-disable */

import type { ConcreteBatch } from 'relay-runtime';
export type AllHotelsSearchListQueryResponse = {| |};

/*
query AllHotelsSearchListQuery(
  $search: HotelsSearchInput!
  $filter: HotelsFilterInput!
  $options: AvailableHotelOptionsInput
  $after: String
  $first: Int
) {
  ...AllHotelsSearchList_data
}

fragment AllHotelsSearchList_data on RootQuery {
  allAvailableHotels(search: $search, filter: $filter, options: $options, first: $first, after: $after) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        __typename
        id
        ...AllHotelsSearchRow
      }
      cursor
    }
    stats {
      priceMax
      priceMin
    }
  }
}

fragment AllHotelsSearchRow on HotelAvailability {
  ...HotelTitle
  hotel {
    id
    mainPhoto {
      lowResUrl
      id
    }
    ...HotelReviewScore_hotel
  }
}

fragment HotelTitle on HotelAvailability {
  price {
    amount
    currency
  }
  hotel {
    ...HotelDistance_hotel
    name
    rating {
      stars
    }
    id
  }
}

fragment HotelReviewScore_hotel on Hotel {
  review {
    score
  }
}

fragment HotelDistance_hotel on Hotel {
  distanceFromCenter
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
      },
      {
        "kind": "LocalArgument",
        "name": "filter",
        "type": "HotelsFilterInput!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "options",
        "type": "AvailableHotelOptionsInput",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "after",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "first",
        "type": "Int",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AllHotelsSearchListQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "AllHotelsSearchList_data",
        "args": null
      }
    ],
    "type": "RootQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AllHotelsSearchListQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "search",
        "type": "HotelsSearchInput!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "filter",
        "type": "HotelsFilterInput!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "options",
        "type": "AvailableHotelOptionsInput",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "after",
        "type": "String",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "first",
        "type": "Int",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "AllHotelsSearchListQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "filter",
            "variableName": "filter",
            "type": "HotelsFilterInput"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "first",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "options",
            "variableName": "options",
            "type": "AvailableHotelOptionsInput"
          },
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
            "concreteType": "PageInfo",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "hasNextPage",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "hasPreviousPage",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "startCursor",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "endCursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
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
                        "name": "distanceFromCenter",
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
                            "name": "lowResUrl",
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
                        "concreteType": "HotelReview",
                        "name": "review",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "score",
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
            "concreteType": "HotelAvailabilityStats",
            "name": "stats",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "priceMax",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "priceMin",
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
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "filter",
            "variableName": "filter",
            "type": "HotelsFilterInput"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "first",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "options",
            "variableName": "options",
            "type": "AvailableHotelOptionsInput"
          },
          {
            "kind": "Variable",
            "name": "search",
            "variableName": "search",
            "type": "HotelsSearchInput!"
          }
        ],
        "handle": "connection",
        "name": "allAvailableHotels",
        "key": "AllHotels_allAvailableHotels",
        "filters": [
          "search",
          "filter",
          "options"
        ]
      }
    ]
  },
  "text": "query AllHotelsSearchListQuery(\n  $search: HotelsSearchInput!\n  $filter: HotelsFilterInput!\n  $options: AvailableHotelOptionsInput\n  $after: String\n  $first: Int\n) {\n  ...AllHotelsSearchList_data\n}\n\nfragment AllHotelsSearchList_data on RootQuery {\n  allAvailableHotels(search: $search, filter: $filter, options: $options, first: $first, after: $after) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        __typename\n        id\n        ...AllHotelsSearchRow\n      }\n      cursor\n    }\n    stats {\n      priceMax\n      priceMin\n    }\n  }\n}\n\nfragment AllHotelsSearchRow on HotelAvailability {\n  ...HotelTitle\n  hotel {\n    id\n    mainPhoto {\n      lowResUrl\n      id\n    }\n    ...HotelReviewScore_hotel\n  }\n}\n\nfragment HotelTitle on HotelAvailability {\n  price {\n    amount\n    currency\n  }\n  hotel {\n    ...HotelDistance_hotel\n    name\n    rating {\n      stars\n    }\n    id\n  }\n}\n\nfragment HotelReviewScore_hotel on Hotel {\n  review {\n    score\n  }\n}\n\nfragment HotelDistance_hotel on Hotel {\n  distanceFromCenter\n}\n"
};

module.exports = node;
