/**
 * @flow
 * @relayHash 05cf807031f08a3410b390bc6237a47c
 */

/* eslint-disable */

import type { ConcreteBatch } from 'relay-runtime';
export type singleHotelQueryResponse = {|
  +availableHotel: ?{| |};
|};

/*
query singleHotelQuery(
  $search: AvailableHotelSearchInput!
) {
  availableHotel(search: $search) {
    ...HotelDetailScreen_availableHotel
    id
  }
}

fragment HotelDetailScreen_availableHotel on HotelAvailability {
  hotel {
    ...HeaderContainer_hotel
    ...LocationContainer_hotel
    ...DescriptionContainer_hotel
    id
  }
  availableRooms {
    ...RoomList
    id
  }
}

fragment HeaderContainer_hotel on Hotel {
  name
  mainPhoto {
    highResUrl
    id
  }
  rating {
    stars
    categoryName
  }
  review {
    score
    description
  }
  photos {
    edges {
      node {
        id
        lowResUrl
        highResUrl
      }
    }
  }
}

fragment LocationContainer_hotel on Hotel {
  address {
    street
    city
  }
  coordinates {
    lat
    lng
  }
}

fragment DescriptionContainer_hotel on Hotel {
  facilities {
    edges {
      node {
        name
        id
      }
    }
  }
}

fragment RoomList on HotelRoomAvailability {
  id
  ...RoomRowContainer_availableRoom
}

fragment RoomRowContainer_availableRoom on HotelRoomAvailability {
  room {
    description {
      title
      text
    }
    type
    bedding {
      type
      amount
    }
    photos {
      edges {
        node {
          thumbnailUrl
          id
        }
      }
    }
    id
  }
  minimalPrice {
    amount
    currency
  }
  incrementalPrice {
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
        "type": "AvailableHotelSearchInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "singleHotelQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "search",
            "variableName": "search",
            "type": "AvailableHotelSearchInput!"
          }
        ],
        "concreteType": "HotelAvailability",
        "name": "availableHotel",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "HotelDetailScreen_availableHotel",
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
  "name": "singleHotelQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "search",
        "type": "AvailableHotelSearchInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "singleHotelQuery",
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
            "type": "AvailableHotelSearchInput!"
          }
        ],
        "concreteType": "HotelAvailability",
        "name": "availableHotel",
        "plural": false,
        "selections": [
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
                    "name": "highResUrl",
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
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "categoryName",
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
                  }
                ],
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "HotelPhotoConnection",
                "name": "photos",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "HotelPhotoEdge",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "HotelPhoto",
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
                            "name": "lowResUrl",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "highResUrl",
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
                  }
                ],
                "storageKey": null
              },
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
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "HotelFacilityConnection",
                "name": "facilities",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "HotelFacilityEdge",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "HotelFacility",
                        "name": "node",
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
            "concreteType": "HotelRoomAvailability",
            "name": "availableRooms",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "InlineFragment",
                "type": "HotelRoomAvailability",
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "HotelRoom",
                    "name": "room",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "HotelRoomDescription",
                        "name": "description",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "title",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "text",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "type",
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "HotelRoomBedding",
                        "name": "bedding",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "type",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "amount",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "HotelRoomPhotoConnection",
                        "name": "photos",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": null,
                            "concreteType": "HotelRoomPhotoEdge",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "HotelPhoto",
                                "name": "node",
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
                    "concreteType": "Price",
                    "name": "minimalPrice",
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
                    "concreteType": "Price",
                    "name": "incrementalPrice",
                    "plural": true,
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
                ]
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
    ]
  },
  "text": "query singleHotelQuery(\n  $search: AvailableHotelSearchInput!\n) {\n  availableHotel(search: $search) {\n    ...HotelDetailScreen_availableHotel\n    id\n  }\n}\n\nfragment HotelDetailScreen_availableHotel on HotelAvailability {\n  hotel {\n    ...HeaderContainer_hotel\n    ...LocationContainer_hotel\n    ...DescriptionContainer_hotel\n    id\n  }\n  availableRooms {\n    ...RoomList\n    id\n  }\n}\n\nfragment HeaderContainer_hotel on Hotel {\n  name\n  mainPhoto {\n    highResUrl\n    id\n  }\n  rating {\n    stars\n    categoryName\n  }\n  review {\n    score\n    description\n  }\n  photos {\n    edges {\n      node {\n        id\n        lowResUrl\n        highResUrl\n      }\n    }\n  }\n}\n\nfragment LocationContainer_hotel on Hotel {\n  address {\n    street\n    city\n  }\n  coordinates {\n    lat\n    lng\n  }\n}\n\nfragment DescriptionContainer_hotel on Hotel {\n  facilities {\n    edges {\n      node {\n        name\n        id\n      }\n    }\n  }\n}\n\nfragment RoomList on HotelRoomAvailability {\n  id\n  ...RoomRowContainer_availableRoom\n}\n\nfragment RoomRowContainer_availableRoom on HotelRoomAvailability {\n  room {\n    description {\n      title\n      text\n    }\n    type\n    bedding {\n      type\n      amount\n    }\n    photos {\n      edges {\n        node {\n          thumbnailUrl\n          id\n        }\n      }\n    }\n    id\n  }\n  minimalPrice {\n    amount\n    currency\n  }\n  incrementalPrice {\n    amount\n    currency\n  }\n}\n"
};

module.exports = node;
