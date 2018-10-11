/**
 * @flow
 * @relayHash 56f593c8d329e4cca80af045a0d5b313
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HotelDetailScreen_availableHotel$ref = any;
export type Currency = "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BTC" | "BTN" | "BWP" | "BYN" | "BYR" | "BZD" | "CAD" | "CDF" | "CHF" | "CLF" | "CLP" | "CNY" | "COP" | "CRC" | "CUC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EEK" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GGP" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "IMP" | "INR" | "IQD" | "IRR" | "ISK" | "JEP" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LTL" | "LVL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRO" | "MTL" | "MUR" | "MVR" | "MWK" | "MXN" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "QUN" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "STD" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "UYU" | "UZS" | "VEF" | "VND" | "VUV" | "WST" | "XAF" | "XAG" | "XAU" | "XCD" | "XDR" | "XOF" | "XPD" | "XPF" | "XPT" | "YER" | "ZAR" | "ZMK" | "ZMW" | "ZWL" | "%future added value";
export type Language = "ar" | "bg" | "ca" | "cs" | "da" | "de" | "el" | "en" | "engb" | "enus" | "es" | "esar" | "et" | "fi" | "fr" | "he" | "hr" | "hu" | "id" | "is" | "it" | "ja" | "ko" | "lt" | "lv" | "ms" | "nl" | "no" | "pl" | "pt" | "ptbr" | "ptpt" | "ro" | "ru" | "sk" | "sl" | "sr" | "sv" | "th" | "tl" | "tr" | "uk" | "vi" | "zh" | "zhcn" | "zhtw" | "%future added value";
export type OrderBy = "DISTANCE" | "POPULARITY" | "PRICE" | "RANKING" | "REVIEW_SCORE" | "STARS" | "%future added value";
export type AvailableHotelSearchInput = {
  hotelId: string,
  checkin: any,
  checkout: any,
  roomsConfiguration: $ReadOnlyArray<RoomsConfiguration>,
  language?: ?Language,
};
export type RoomsConfiguration = {
  adultsCount: number,
  children?: ?$ReadOnlyArray<?RoomsChildrenConfiguration>,
};
export type RoomsChildrenConfiguration = {
  age?: ?number
};
export type AvailableHotelOptionsInput = {
  currency?: ?Currency,
  orderBy?: ?OrderBy,
};
export type SingleHotelContainerQueryVariables = {|
  search: AvailableHotelSearchInput,
  options?: ?AvailableHotelOptionsInput,
|};
export type SingleHotelContainerQueryResponse = {|
  +availableHotel: ?{|
    +$fragmentRefs: HotelDetailScreen_availableHotel$ref
  |}
|};
export type SingleHotelContainerQuery = {|
  variables: SingleHotelContainerQueryVariables,
  response: SingleHotelContainerQueryResponse,
|};
*/


/*
query SingleHotelContainerQuery(
  $search: AvailableHotelSearchInput!
  $options: AvailableHotelOptionsInput
) {
  availableHotel(search: $search, options: $options) {
    ...HotelDetailScreen_availableHotel
    id
  }
}

fragment HotelDetailScreen_availableHotel on HotelAvailability {
  hotel {
    ...Header_hotel
    ...BookNow_hotel
    ...HotelInformation_hotel
    id
  }
  availableRooms {
    ...RoomList
    originalId
    incrementalPrice {
      amount
      currency
    }
    id
  }
}

fragment Header_hotel on Hotel {
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

fragment BookNow_hotel on Hotel {
  originalId
}

fragment HotelInformation_hotel on Hotel {
  ...Location_hotel
  ...Description_hotel
  ...HotelReview
}

fragment RoomList on HotelRoomAvailability {
  id
  ...RoomRow_availableRoom
}

fragment RoomRow_availableRoom on HotelRoomAvailability {
  originalId
  ...RoomBadges_availableRoom
  room {
    description {
      title
    }
    ...RoomRowTitle_room
    photos {
      edges {
        node {
          highResUrl
          lowResUrl
          id
        }
      }
    }
    maxPersons
    ...BeddingInfo_room
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

fragment RoomBadges_availableRoom on HotelRoomAvailability {
  isBreakfastIncluded
  isRefundable
}

fragment RoomRowTitle_room on HotelRoom {
  description {
    title
  }
}

fragment BeddingInfo_room on HotelRoom {
  maxPersons
  bedding {
    type
    amount
  }
}

fragment Location_hotel on Hotel {
  address {
    street
    city
  }
  coordinates {
    lat
    lng
  }
}

fragment Description_hotel on Hotel {
  summary
  facilities {
    ...Facilities_facilities
  }
}

fragment HotelReview on Hotel {
  review {
    score
    count
  }
}

fragment Facilities_facilities on HotelFacilityConnection {
  edges {
    node {
      id
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
v1 = [
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lowResUrl",
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
  "name": "originalId",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "amount",
  "args": null,
  "storageKey": null
},
v8 = [
  v7,
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
  "name": "SingleHotelContainerQuery",
  "id": null,
  "text": "query SingleHotelContainerQuery(\n  $search: AvailableHotelSearchInput!\n  $options: AvailableHotelOptionsInput\n) {\n  availableHotel(search: $search, options: $options) {\n    ...HotelDetailScreen_availableHotel\n    id\n  }\n}\n\nfragment HotelDetailScreen_availableHotel on HotelAvailability {\n  hotel {\n    ...Header_hotel\n    ...BookNow_hotel\n    ...HotelInformation_hotel\n    id\n  }\n  availableRooms {\n    ...RoomList\n    originalId\n    incrementalPrice {\n      amount\n      currency\n    }\n    id\n  }\n}\n\nfragment Header_hotel on Hotel {\n  name\n  mainPhoto {\n    highResUrl\n    id\n  }\n  rating {\n    stars\n    categoryName\n  }\n  photos {\n    edges {\n      node {\n        id\n        lowResUrl\n        highResUrl\n      }\n    }\n  }\n}\n\nfragment BookNow_hotel on Hotel {\n  originalId\n}\n\nfragment HotelInformation_hotel on Hotel {\n  ...Location_hotel\n  ...Description_hotel\n  ...HotelReview\n}\n\nfragment RoomList on HotelRoomAvailability {\n  id\n  ...RoomRow_availableRoom\n}\n\nfragment RoomRow_availableRoom on HotelRoomAvailability {\n  originalId\n  ...RoomBadges_availableRoom\n  room {\n    description {\n      title\n    }\n    ...RoomRowTitle_room\n    photos {\n      edges {\n        node {\n          highResUrl\n          lowResUrl\n          id\n        }\n      }\n    }\n    maxPersons\n    ...BeddingInfo_room\n    id\n  }\n  minimalPrice {\n    amount\n    currency\n  }\n  incrementalPrice {\n    amount\n    currency\n  }\n}\n\nfragment RoomBadges_availableRoom on HotelRoomAvailability {\n  isBreakfastIncluded\n  isRefundable\n}\n\nfragment RoomRowTitle_room on HotelRoom {\n  description {\n    title\n  }\n}\n\nfragment BeddingInfo_room on HotelRoom {\n  maxPersons\n  bedding {\n    type\n    amount\n  }\n}\n\nfragment Location_hotel on Hotel {\n  address {\n    street\n    city\n  }\n  coordinates {\n    lat\n    lng\n  }\n}\n\nfragment Description_hotel on Hotel {\n  summary\n  facilities {\n    ...Facilities_facilities\n  }\n}\n\nfragment HotelReview on Hotel {\n  review {\n    score\n    count\n  }\n}\n\nfragment Facilities_facilities on HotelFacilityConnection {\n  edges {\n    node {\n      id\n      name\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SingleHotelContainerQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "availableHotel",
        "storageKey": null,
        "args": v1,
        "concreteType": "HotelAvailability",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "HotelDetailScreen_availableHotel",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SingleHotelContainerQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "availableHotel",
        "storageKey": null,
        "args": v1,
        "concreteType": "HotelAvailability",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "hotel",
            "storageKey": null,
            "args": null,
            "concreteType": "Hotel",
            "plural": false,
            "selections": [
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
              v2,
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
                          v3,
                          v4,
                          v5
                        ]
                      }
                    ]
                  }
                ]
              },
              v6,
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
                  v3
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
                "name": "facilities",
                "storageKey": null,
                "args": null,
                "concreteType": "HotelFacilityConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "HotelFacilityEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "HotelFacility",
                        "plural": false,
                        "selections": [
                          v3,
                          v2
                        ]
                      }
                    ]
                  }
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
              v3
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "availableRooms",
            "storageKey": null,
            "args": null,
            "concreteType": "HotelRoomAvailability",
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
                "name": "room",
                "storageKey": null,
                "args": null,
                "concreteType": "HotelRoom",
                "plural": false,
                "selections": [
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
                    "name": "photos",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "HotelRoomPhotoConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "HotelRoomPhotoEdge",
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
                              v5,
                              v4,
                              v3
                            ]
                          }
                        ]
                      }
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
                      v7
                    ]
                  },
                  v3
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "minimalPrice",
                "storageKey": null,
                "args": null,
                "concreteType": "Price",
                "plural": false,
                "selections": v8
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "incrementalPrice",
                "storageKey": null,
                "args": null,
                "concreteType": "Price",
                "plural": true,
                "selections": v8
              }
            ]
          },
          v3
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '85c76b6710966d8513435705447d45fa';
module.exports = node;
