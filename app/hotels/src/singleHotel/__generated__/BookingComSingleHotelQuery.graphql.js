/**
 * @flow
 * @relayHash d5f332a90d19400f991d526dfec85538
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HotelDetailScreen_availableHotel$ref = any;
export type Currency = "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BOV" | "BRL" | "BSD" | "BTN" | "BWP" | "BYN" | "BZD" | "CAD" | "CDF" | "CHE" | "CHF" | "CHW" | "CLF" | "CLP" | "CNY" | "COP" | "COU" | "CRC" | "CUC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MXV" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STN" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "USN" | "UYI" | "UYU" | "UZS" | "VEF" | "VND" | "VUV" | "WST" | "XAF" | "XAG" | "XAU" | "XBA" | "XBB" | "XBC" | "XBD" | "XCD" | "XDR" | "XOF" | "XPD" | "XPF" | "XPT" | "XSU" | "XTS" | "XUA" | "XXX" | "YER" | "ZAR" | "ZMW" | "ZWL" | "%future added value";
export type Language = "ar" | "bg" | "ca" | "cs" | "da" | "de" | "el" | "en" | "engb" | "enus" | "es" | "esar" | "et" | "fi" | "fr" | "he" | "hr" | "hu" | "id" | "is" | "it" | "ja" | "ko" | "lt" | "lv" | "ms" | "nl" | "no" | "pl" | "pt" | "ptbr" | "ptpt" | "ro" | "ru" | "sk" | "sl" | "sr" | "sv" | "th" | "tl" | "tr" | "uk" | "vi" | "zh" | "zhcn" | "zhtw" | "%future added value";
export type OrderBy = "DISTANCE" | "POPULARITY" | "PRICE" | "RANKING" | "REVIEW_SCORE" | "STARS" | "%future added value";
export type AvailableHotelSearchInput = {|
  hotelId: string,
  checkin: any,
  checkout: any,
  roomsConfiguration: $ReadOnlyArray<RoomsConfiguration>,
  language?: ?Language,
|};
export type RoomsConfiguration = {|
  adultsCount: number,
  children?: ?$ReadOnlyArray<?RoomsChildrenConfiguration>,
|};
export type RoomsChildrenConfiguration = {|
  age?: ?number
|};
export type AvailableHotelOptionsInput = {|
  currency?: ?Currency,
  orderBy?: ?OrderBy,
|};
export type BookingComSingleHotelQueryVariables = {|
  search: AvailableHotelSearchInput,
  options?: ?AvailableHotelOptionsInput,
|};
export type BookingComSingleHotelQueryResponse = {|
  +availableHotel: ?{|
    +$fragmentRefs: HotelDetailScreen_availableHotel$ref
  |}
|};
export type BookingComSingleHotelQuery = {|
  variables: BookingComSingleHotelQueryVariables,
  response: BookingComSingleHotelQueryResponse,
|};
*/


/*
query BookingComSingleHotelQuery(
  $search: AvailableHotelSearchInput!
  $options: AvailableHotelOptionsInput
) {
  availableHotel(search: $search, options: $options) {
    ... on HotelAvailabilityInterface {
      ...HotelDetailScreen_availableHotel
    }
    id
  }
}

fragment HotelDetailScreen_availableHotel on HotelAvailabilityInterface {
  ...BookingSummary_room
  hotel {
    __typename
    ...Header_hotel
    ...HotelInformation_hotel
    id
  }
  availableRooms {
    __typename
    ...RoomList_data
    id
  }
}

fragment BookingSummary_room on HotelAvailabilityInterface {
  ...RoomSummary_room
}

fragment Header_hotel on HotelInterface {
  name
  mainPhoto {
    highResUrl
    id
  }
  rating {
    stars
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
  ...HotelReview_data
}

fragment RoomList_data on HotelRoomAvailabilityInterface {
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
    id
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
  ...Amenities_data
}

fragment HotelReview_data on HotelInterface {
  review {
    score
    count
  }
}

fragment Amenities_data on HotelInterface {
  amenities {
    id
    name
  }
}

fragment RoomSummary_room on HotelAvailabilityInterface {
  ...SummaryButtons_rooms
  availableRooms {
    __typename
    incrementalPriceWithExtraCharges {
      price {
        amount
        currency
      }
    }
    room {
      __typename
      maxPersons
      id
    }
    id
  }
}

fragment SummaryButtons_rooms on HotelAvailabilityInterface {
  ...BookNow_rooms
}

fragment BookNow_rooms on HotelAvailabilityInterface {
  availableRooms {
    __typename
    id
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
  "name": "__typename",
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
  "name": "amount",
  "args": null,
  "storageKey": null
},
v5 = [
  (v4/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "currency",
    "args": null,
    "storageKey": null
  }
],
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "highResUrl",
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
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "BookingComSingleHotelQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "availableHotel",
        "storageKey": null,
        "args": (v1/*: any*/),
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
    "name": "BookingComSingleHotelQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "availableHotel",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "HotelAvailability",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "availableRooms",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "incrementalPriceWithExtraCharges",
                "storageKey": null,
                "args": null,
                "concreteType": "HotelPrice",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "price",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Price",
                    "plural": false,
                    "selections": (v5/*: any*/)
                  }
                ]
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
                  (v2/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "maxPersons",
                    "args": null,
                    "storageKey": null
                  },
                  (v3/*: any*/),
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
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v3/*: any*/)
                    ]
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
                      (v4/*: any*/)
                    ]
                  }
                ]
              },
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
                "selections": (v5/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "incrementalPrice",
                "storageKey": null,
                "args": null,
                "concreteType": "Price",
                "plural": true,
                "selections": (v5/*: any*/)
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "hotel",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v8/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "mainPhoto",
                "storageKey": null,
                "args": null,
                "concreteType": "HotelPhoto",
                "plural": false,
                "selections": [
                  (v6/*: any*/),
                  (v3/*: any*/)
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
                          (v3/*: any*/),
                          (v7/*: any*/),
                          (v6/*: any*/)
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
                  (v3/*: any*/),
                  (v8/*: any*/)
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
              (v3/*: any*/)
            ]
          },
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "BookingComSingleHotelQuery",
    "id": null,
    "text": "query BookingComSingleHotelQuery(\n  $search: AvailableHotelSearchInput!\n  $options: AvailableHotelOptionsInput\n) {\n  availableHotel(search: $search, options: $options) {\n    ... on HotelAvailabilityInterface {\n      ...HotelDetailScreen_availableHotel\n    }\n    id\n  }\n}\n\nfragment HotelDetailScreen_availableHotel on HotelAvailabilityInterface {\n  ...BookingSummary_room\n  hotel {\n    __typename\n    ...Header_hotel\n    ...HotelInformation_hotel\n    id\n  }\n  availableRooms {\n    __typename\n    ...RoomList_data\n    id\n  }\n}\n\nfragment BookingSummary_room on HotelAvailabilityInterface {\n  ...RoomSummary_room\n}\n\nfragment Header_hotel on HotelInterface {\n  name\n  mainPhoto {\n    highResUrl\n    id\n  }\n  rating {\n    stars\n  }\n  photos {\n    edges {\n      node {\n        id\n        lowResUrl\n        highResUrl\n      }\n    }\n  }\n}\n\nfragment HotelInformation_hotel on HotelInterface {\n  ...Location_hotel\n  ...Description_hotel\n  ...HotelReview_data\n}\n\nfragment RoomList_data on HotelRoomAvailabilityInterface {\n  id\n  ...RoomRow_availableRoom\n}\n\nfragment RoomRow_availableRoom on HotelRoomAvailabilityInterface {\n  id\n  ...RoomBadges_availableRoom\n  minimalPrice {\n    amount\n    currency\n  }\n  incrementalPrice {\n    amount\n    currency\n  }\n  room {\n    __typename\n    id\n    description {\n      title\n    }\n    ...RoomRowTitle_room\n    roomPhotos {\n      highResUrl\n      lowResUrl\n      id\n    }\n    maxPersons\n    ...BeddingInfo_room\n  }\n}\n\nfragment RoomBadges_availableRoom on HotelRoomAvailabilityInterface {\n  isBreakfastIncluded\n  isRefundable\n}\n\nfragment RoomRowTitle_room on HotelRoomInterface {\n  description {\n    title\n  }\n}\n\nfragment BeddingInfo_room on HotelRoomInterface {\n  maxPersons\n  bedding {\n    type\n    amount\n  }\n}\n\nfragment Location_hotel on HotelInterface {\n  address {\n    street\n    city\n  }\n  coordinates {\n    lat\n    lng\n  }\n}\n\nfragment Description_hotel on HotelInterface {\n  summary\n  ...Amenities_data\n}\n\nfragment HotelReview_data on HotelInterface {\n  review {\n    score\n    count\n  }\n}\n\nfragment Amenities_data on HotelInterface {\n  amenities {\n    id\n    name\n  }\n}\n\nfragment RoomSummary_room on HotelAvailabilityInterface {\n  ...SummaryButtons_rooms\n  availableRooms {\n    __typename\n    incrementalPriceWithExtraCharges {\n      price {\n        amount\n        currency\n      }\n    }\n    room {\n      __typename\n      maxPersons\n      id\n    }\n    id\n  }\n}\n\nfragment SummaryButtons_rooms on HotelAvailabilityInterface {\n  ...BookNow_rooms\n}\n\nfragment BookNow_rooms on HotelAvailabilityInterface {\n  availableRooms {\n    __typename\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8e704833b25a64eacd0adb42981857af';
module.exports = node;
