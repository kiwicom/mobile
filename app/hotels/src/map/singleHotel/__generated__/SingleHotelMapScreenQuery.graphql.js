/**
 * @flow
 * @relayHash 2b47f6e9e03d2062d57007c2cce8aefc
 */

/* eslint-disable */

import type { ConcreteBatch } from 'relay-runtime';
export type SingleHotelMapScreenQueryResponse = {|
  +availableHotel: ?{|
    +hotel: ?{| |};
  |};
|};

/*
query SingleHotelMapScreenQuery(
  $search: AvailableHotelSearchInput!
  $options: AvailableHotelOptionsInput
) {
  availableHotel(search: $search, options: $options) {
    hotel {
      ...MapView_hotel
      id
    }
    ...AdditionalInfo
    id
  }
}

fragment MapView_hotel on Hotel {
  coordinates {
    lat
    lng
  }
}

fragment AdditionalInfo on HotelAvailability {
  ...HotelDetailPreview_availability
  hotel {
    address {
      ...Address_address
    }
    id
  }
}

fragment HotelDetailPreview_availability on HotelAvailability {
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

fragment Address_address on Address {
  street
  city
  zip
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
    "name": "SingleHotelMapScreenQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
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
                "kind": "FragmentSpread",
                "name": "MapView_hotel",
                "args": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "FragmentSpread",
            "name": "AdditionalInfo",
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
  "name": "SingleHotelMapScreenQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "search",
        "type": "AvailableHotelSearchInput!",
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
    "name": "SingleHotelMapScreenQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
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
  "text": "query SingleHotelMapScreenQuery(\n  $search: AvailableHotelSearchInput!\n  $options: AvailableHotelOptionsInput\n) {\n  availableHotel(search: $search, options: $options) {\n    hotel {\n      ...MapView_hotel\n      id\n    }\n    ...AdditionalInfo\n    id\n  }\n}\n\nfragment MapView_hotel on Hotel {\n  coordinates {\n    lat\n    lng\n  }\n}\n\nfragment AdditionalInfo on HotelAvailability {\n  ...HotelDetailPreview_availability\n  hotel {\n    address {\n      ...Address_address\n    }\n    id\n  }\n}\n\nfragment HotelDetailPreview_availability on HotelAvailability {\n  price {\n    amount\n    currency\n  }\n  hotel {\n    id\n    name\n    mainPhoto {\n      thumbnailUrl\n      id\n    }\n    rating {\n      stars\n    }\n    review {\n      score\n      description\n      count\n    }\n  }\n}\n\nfragment Address_address on Address {\n  street\n  city\n  zip\n}\n"
};

module.exports = node;
