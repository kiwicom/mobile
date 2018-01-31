/**
 * @flow
 * @relayHash ab02be83d325e9a7a84852d1cf48cf14
 */

/* eslint-disable */

import type { ConcreteBatch } from 'relay-runtime';
export type AllHotelsSearchQueryResponse = {|
  +allHotels: ?{| |};
|};

/*
query AllHotelsSearchQuery(
  $search: HotelsSearchInput!
  $filter: HotelsFilterInput!
  $options: AvailableHotelOptionsInput
) {
  allHotels: allAvailableHotels(search: $search, filter: $filter, options: $options) {
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
  ...HotelTitle
  hotel {
    id
    mainPhoto {
      thumbnailUrl
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
            "name": "filter",
            "variableName": "filter",
            "type": "HotelsFilterInput"
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
            "name": "filter",
            "variableName": "filter",
            "type": "HotelsFilterInput"
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query AllHotelsSearchQuery(\n  $search: HotelsSearchInput!\n  $filter: HotelsFilterInput!\n  $options: AvailableHotelOptionsInput\n) {\n  allHotels: allAvailableHotels(search: $search, filter: $filter, options: $options) {\n    ...AllHotelsSearchList\n  }\n}\n\nfragment AllHotelsSearchList on HotelAvailabilityConnection {\n  edges {\n    node {\n      id\n      ...AllHotelsSearchRow\n    }\n  }\n}\n\nfragment AllHotelsSearchRow on HotelAvailability {\n  ...HotelTitle\n  hotel {\n    id\n    mainPhoto {\n      thumbnailUrl\n      id\n    }\n    ...HotelReviewScore_hotel\n  }\n}\n\nfragment HotelTitle on HotelAvailability {\n  price {\n    amount\n    currency\n  }\n  hotel {\n    ...HotelDistance_hotel\n    name\n    rating {\n      stars\n    }\n    id\n  }\n}\n\nfragment HotelReviewScore_hotel on Hotel {\n  review {\n    score\n  }\n}\n\nfragment HotelDistance_hotel on Hotel {\n  distanceFromCenter\n}\n"
};

module.exports = node;
