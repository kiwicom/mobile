/**
 * @flow
 * @relayHash 0015529da418dcb662cc984626097b63
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HotelDetailScreen_availableHotel$ref = any;
export type Currency = "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BOV" | "BRL" | "BSD" | "BTN" | "BWP" | "BYN" | "BZD" | "CAD" | "CDF" | "CHE" | "CHF" | "CHW" | "CLF" | "CLP" | "CNY" | "COP" | "COU" | "CRC" | "CUC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MXV" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STN" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "USN" | "UYI" | "UYU" | "UZS" | "VEF" | "VND" | "VUV" | "WST" | "XAF" | "XAG" | "XAU" | "XBA" | "XBB" | "XBC" | "XBD" | "XCD" | "XDR" | "XOF" | "XPD" | "XPF" | "XPT" | "XSU" | "XTS" | "XUA" | "XXX" | "YER" | "ZAR" | "ZMW" | "ZWL" | "%future added value";
export type Stay22SingleHotelQueryVariables = {|
  id: string,
  guests: number,
  currency?: ?Currency,
  checkin: any,
  checkout: any,
|};
export type Stay22SingleHotelQueryResponse = {|
  +stay22HotelDetail: ?{|
    +paymentLink: ?string,
    +$fragmentRefs: HotelDetailScreen_availableHotel$ref,
  |}
|};
export type Stay22SingleHotelQuery = {|
  variables: Stay22SingleHotelQueryVariables,
  response: Stay22SingleHotelQueryResponse,
|};
*/


/*
query Stay22SingleHotelQuery(
  $id: ID!
  $guests: Int!
  $currency: Currency
  $checkin: Date!
  $checkout: Date!
) {
  stay22HotelDetail(id: $id, guests: $guests, currency: $currency, checkin: $checkin, checkout: $checkout) {
    ...HotelDetailScreen_availableHotel
    paymentLink
    id
  }
}

fragment HotelDetailScreen_availableHotel on HotelAvailabilityInterface {
  hotel {
    __typename
    ...Header_hotel
    ...HotelInformation_hotel
    id
  }
  availableRooms {
    __typename
    ...RoomList
    id
    incrementalPrice {
      amount
      currency
    }
  }
}

fragment Header_hotel on HotelInterface {
  name
  mainPhoto {
    highResUrl
    id
  }
  rating {
    stars
    categoryName
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

fragment HotelInformation_hotel on HotelInterface {
  ...Location_hotel
  ...Description_hotel
  ...HotelReview
}

fragment RoomList on HotelRoomAvailabilityInterface {
  id
  ...RoomRow_availableRoom
}

fragment RoomRow_availableRoom on HotelRoomAvailabilityInterface {
  id
  ...RoomBadges_availableRoom
  minimalPrice {
    amount
    currency
  }
  incrementalPrice {
    amount
    currency
  }
  room {
    __typename
    description {
      title
    }
    ...RoomRowTitle_room
    roomPhotos {
      highResUrl
      lowResUrl
      id
    }
    maxPersons
    ...BeddingInfo_room
    id
  }
}

fragment RoomBadges_availableRoom on HotelRoomAvailabilityInterface {
  isBreakfastIncluded
  isRefundable
}

fragment RoomRowTitle_room on HotelRoomInterface {
  description {
    title
  }
}

fragment BeddingInfo_room on HotelRoomInterface {
  maxPersons
  bedding {
    type
    amount
  }
}

fragment Location_hotel on HotelInterface {
  address {
    street
    city
  }
  coordinates {
    lat
    lng
  }
}

fragment Description_hotel on HotelInterface {
  summary
  ...Amenities
}

fragment HotelReview on HotelInterface {
  review {
    score
    count
  }
}

fragment Amenities on HotelInterface {
  amenities {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "guests",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "currency",
    "type": "Currency",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "checkin",
    "type": "Date!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "checkout",
    "type": "Date!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "checkin",
    "variableName": "checkin",
    "type": "Date!"
  },
  {
    "kind": "Variable",
    "name": "checkout",
    "variableName": "checkout",
    "type": "Date!"
  },
  {
    "kind": "Variable",
    "name": "currency",
    "variableName": "currency",
    "type": "Currency"
  },
  {
    "kind": "Variable",
    "name": "guests",
    "variableName": "guests",
    "type": "Int!"
  },
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "paymentLink",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "highResUrl",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lowResUrl",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "amount",
  "args": null,
  "storageKey": null
},
v9 = [
  v8,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "currency",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "Stay22SingleHotelQuery",
  "id": null,
  "text": "query Stay22SingleHotelQuery(\n  $id: ID!\n  $guests: Int!\n  $currency: Currency\n  $checkin: Date!\n  $checkout: Date!\n) {\n  stay22HotelDetail(id: $id, guests: $guests, currency: $currency, checkin: $checkin, checkout: $checkout) {\n    ...HotelDetailScreen_availableHotel\n    paymentLink\n    id\n  }\n}\n\nfragment HotelDetailScreen_availableHotel on HotelAvailabilityInterface {\n  hotel {\n    __typename\n    ...Header_hotel\n    ...HotelInformation_hotel\n    id\n  }\n  availableRooms {\n    __typename\n    ...RoomList\n    id\n    incrementalPrice {\n      amount\n      currency\n    }\n  }\n}\n\nfragment Header_hotel on HotelInterface {\n  name\n  mainPhoto {\n    highResUrl\n    id\n  }\n  rating {\n    stars\n    categoryName\n  }\n  photos {\n    edges {\n      node {\n        id\n        lowResUrl\n        highResUrl\n      }\n    }\n  }\n}\n\nfragment HotelInformation_hotel on HotelInterface {\n  ...Location_hotel\n  ...Description_hotel\n  ...HotelReview\n}\n\nfragment RoomList on HotelRoomAvailabilityInterface {\n  id\n  ...RoomRow_availableRoom\n}\n\nfragment RoomRow_availableRoom on HotelRoomAvailabilityInterface {\n  id\n  ...RoomBadges_availableRoom\n  minimalPrice {\n    amount\n    currency\n  }\n  incrementalPrice {\n    amount\n    currency\n  }\n  room {\n    __typename\n    description {\n      title\n    }\n    ...RoomRowTitle_room\n    roomPhotos {\n      highResUrl\n      lowResUrl\n      id\n    }\n    maxPersons\n    ...BeddingInfo_room\n    id\n  }\n}\n\nfragment RoomBadges_availableRoom on HotelRoomAvailabilityInterface {\n  isBreakfastIncluded\n  isRefundable\n}\n\nfragment RoomRowTitle_room on HotelRoomInterface {\n  description {\n    title\n  }\n}\n\nfragment BeddingInfo_room on HotelRoomInterface {\n  maxPersons\n  bedding {\n    type\n    amount\n  }\n}\n\nfragment Location_hotel on HotelInterface {\n  address {\n    street\n    city\n  }\n  coordinates {\n    lat\n    lng\n  }\n}\n\nfragment Description_hotel on HotelInterface {\n  summary\n  ...Amenities\n}\n\nfragment HotelReview on HotelInterface {\n  review {\n    score\n    count\n  }\n}\n\nfragment Amenities on HotelInterface {\n  amenities {\n    id\n    name\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "Stay22SingleHotelQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "stay22HotelDetail",
        "storageKey": null,
        "args": v1,
        "concreteType": "Stay22HotelDetail",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "HotelDetailScreen_availableHotel",
            "args": null
          },
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "Stay22SingleHotelQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "stay22HotelDetail",
        "storageKey": null,
        "args": v1,
        "concreteType": "Stay22HotelDetail",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "hotel",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              v3,
              v4,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "mainPhoto",
                "storageKey": null,
                "args": null,
                "concreteType": "HotelPhoto",
                "plural": false,
                "selections": [
                  v5,
                  v6
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "rating",
                "storageKey": null,
                "args": null,
                "concreteType": "HotelRating",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "stars",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "categoryName",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "photos",
                "storageKey": null,
                "args": null,
                "concreteType": "HotelPhotoConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "HotelPhotoEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "HotelPhoto",
                        "plural": false,
                        "selections": [
                          v6,
                          v7,
                          v5
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "address",
                "storageKey": null,
                "args": null,
                "concreteType": "Address",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "street",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "city",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "coordinates",
                "storageKey": null,
                "args": null,
                "concreteType": "Coordinates",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "lat",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "lng",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "summary",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "amenities",
                "storageKey": null,
                "args": null,
                "concreteType": "HotelAmenity",
                "plural": true,
                "selections": [
                  v6,
                  v4
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "review",
                "storageKey": null,
                "args": null,
                "concreteType": "HotelReview",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "score",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "count",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              v6
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "availableRooms",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              v3,
              v6,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isBreakfastIncluded",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isRefundable",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "minimalPrice",
                "storageKey": null,
                "args": null,
                "concreteType": "Price",
                "plural": false,
                "selections": v9
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "incrementalPrice",
                "storageKey": null,
                "args": null,
                "concreteType": "Price",
                "plural": true,
                "selections": v9
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "room",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                  v3,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "description",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "HotelRoomDescription",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "title",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "roomPhotos",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "HotelPhoto",
                    "plural": true,
                    "selections": [
                      v5,
                      v7,
                      v6
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "maxPersons",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "bedding",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "HotelRoomBedding",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "type",
                        "args": null,
                        "storageKey": null
                      },
                      v8
                    ]
                  },
                  v6
                ]
              }
            ]
          },
          v2,
          v6
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bbfb01d8bcca6bb433ffb9cfa9ff927b';
module.exports = node;
