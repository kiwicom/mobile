/**
 * @flow
 * @relayHash 93ca77f66cd48df398728408858be5c1
 */

/* eslint-disable */

import type { ConcreteBatch } from 'relay-runtime';
export type AllHotelsMapQueryResponse = {|
  +allAvailableHotels: ?{| |};
|};

/*
query AllHotelsMapQuery(
  $search: HotelsSearchInput!
  $filter: HotelsFilterInput
) {
  allAvailableHotels(search: $search, filter: $filter) {
    ...MapScreen
  }
}

fragment MapScreen on HotelAvailabilityConnection {
  edges {
    node {
      id
    }
    ...MapView
    ...HotelSwipeList
  }
}

fragment MapView on HotelAvailabilityEdge {
  node {
    id
    price {
      ...PriceMarker
    }
    hotel {
      coordinates {
        lat
        lng
      }
      id
    }
  }
}

fragment HotelSwipeList on HotelAvailabilityEdge {
  node {
    id
    ...HotelSwipeItem
    hotel {
      address {
        ...Address
      }
      id
    }
  }
}

fragment HotelSwipeItem on HotelAvailability {
  price {
    amount
    currency
  }
  hotel {
    id
    name
    mainPhoto {
      thumbnailUrl
      id
    }
    rating {
      stars
    }
    review {
      score
      description
      count
    }
  }
}

fragment Address on Address {
  street
  city
  zip
}

fragment PriceMarker on Price {
  amount
  currency
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
        "type": "HotelsFilterInput",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AllHotelsMapQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "filter",
            "variableName": "filter",
            "type": "HotelsFilterInput"
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
            "name": "MapScreen",
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
  "name": "AllHotelsMapQuery",
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
        "type": "HotelsFilterInput",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "AllHotelsMapQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "filter",
            "variableName": "filter",
            "type": "HotelsFilterInput"
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
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "type": "HotelAvailabilityEdge",
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
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "Coordinates",
                            "name": "coordinates",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "lat",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "lng",
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
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "description",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "count",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "Address",
                            "name": "address",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "street",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "city",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "zip",
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query AllHotelsMapQuery(\n  $search: HotelsSearchInput!\n  $filter: HotelsFilterInput\n) {\n  allAvailableHotels(search: $search, filter: $filter) {\n    ...MapScreen\n  }\n}\n\nfragment MapScreen on HotelAvailabilityConnection {\n  edges {\n    node {\n      id\n    }\n    ...MapView\n    ...HotelSwipeList\n  }\n}\n\nfragment MapView on HotelAvailabilityEdge {\n  node {\n    id\n    price {\n      ...PriceMarker\n    }\n    hotel {\n      coordinates {\n        lat\n        lng\n      }\n      id\n    }\n  }\n}\n\nfragment HotelSwipeList on HotelAvailabilityEdge {\n  node {\n    id\n    ...HotelSwipeItem\n    hotel {\n      address {\n        ...Address\n      }\n      id\n    }\n  }\n}\n\nfragment HotelSwipeItem on HotelAvailability {\n  price {\n    amount\n    currency\n  }\n  hotel {\n    id\n    name\n    mainPhoto {\n      thumbnailUrl\n      id\n    }\n    rating {\n      stars\n    }\n    review {\n      score\n      description\n      count\n    }\n  }\n}\n\nfragment Address on Address {\n  street\n  city\n  zip\n}\n\nfragment PriceMarker on Price {\n  amount\n  currency\n}\n"
};

module.exports = node;
