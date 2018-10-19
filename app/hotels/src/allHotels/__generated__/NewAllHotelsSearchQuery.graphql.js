/**
 * @flow
 * @relayHash 8838e45c72ad7302c0eedddb91e39723
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type RenderSearchResults$ref = any;
export type Currency = "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BOV" | "BRL" | "BSD" | "BTN" | "BWP" | "BYN" | "BZD" | "CAD" | "CDF" | "CHE" | "CHF" | "CHW" | "CLF" | "CLP" | "CNY" | "COP" | "COU" | "CRC" | "CUC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MXV" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STN" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "USN" | "UYI" | "UYU" | "UZS" | "VEF" | "VND" | "VUV" | "WST" | "XAF" | "XAG" | "XAU" | "XBA" | "XBB" | "XBC" | "XBD" | "XCD" | "XDR" | "XOF" | "XPD" | "XPF" | "XPT" | "XSU" | "XTS" | "XUA" | "XXX" | "YER" | "ZAR" | "ZMW" | "ZWL" | "%future added value";
export type Language = "ar" | "bg" | "ca" | "cs" | "da" | "de" | "el" | "en" | "engb" | "enus" | "es" | "esar" | "et" | "fi" | "fr" | "he" | "hr" | "hu" | "id" | "is" | "it" | "ja" | "ko" | "lt" | "lv" | "ms" | "nl" | "no" | "pl" | "pt" | "ptbr" | "ptpt" | "ro" | "ru" | "sk" | "sl" | "sr" | "sv" | "th" | "tl" | "tr" | "uk" | "vi" | "zh" | "zhcn" | "zhtw" | "%future added value";
export type OrderBy = "DISTANCE" | "POPULARITY" | "PRICE" | "RANKING" | "REVIEW_SCORE" | "STARS" | "%future added value";
export type HotelsSearchInput = {
  latitude?: ?number,
  longitude?: ?number,
  cityId?: ?string,
  checkin: any,
  checkout: any,
  language?: ?Language,
  roomsConfiguration: $ReadOnlyArray<RoomsConfiguration>,
};
export type RoomsConfiguration = {
  adultsCount: number,
  children?: ?$ReadOnlyArray<?RoomsChildrenConfiguration>,
};
export type RoomsChildrenConfiguration = {
  age?: ?number
};
export type HotelsFilterInput = {
  starsRating?: ?$ReadOnlyArray<?number>,
  minPrice?: ?number,
  maxPrice?: ?number,
  hotelFacilities?: ?HotelFacilitiesInput,
  minScore?: ?number,
  freeCancellation?: ?boolean,
};
export type HotelFacilitiesInput = {
  airportShuttle?: ?boolean,
  familyRooms?: ?boolean,
  facilitiesForDisabled?: ?boolean,
  fitnessCenter?: ?boolean,
  parking?: ?boolean,
  freeParking?: ?boolean,
  valetParking?: ?boolean,
  indoorPool?: ?boolean,
  petsAllowed?: ?boolean,
  spa?: ?boolean,
  wifi?: ?boolean,
};
export type AvailableHotelOptionsInput = {
  currency?: ?Currency,
  orderBy?: ?OrderBy,
};
export type NewAllHotelsSearchQueryVariables = {|
  search: HotelsSearchInput,
  filter: HotelsFilterInput,
  options?: ?AvailableHotelOptionsInput,
  first?: ?number,
  after?: ?string,
|};
export type NewAllHotelsSearchQueryResponse = {|
  +$fragmentRefs: RenderSearchResults$ref
|};
export type NewAllHotelsSearchQuery = {|
  variables: NewAllHotelsSearchQueryVariables,
  response: NewAllHotelsSearchQueryResponse,
|};
*/


/*
query NewAllHotelsSearchQuery(
  $search: HotelsSearchInput!
  $filter: HotelsFilterInput!
  $options: AvailableHotelOptionsInput
  $first: Int
  $after: String
) {
  ...RenderSearchResults
}

fragment RenderSearchResults on RootQuery {
  allAvailableBookingComHotels(search: $search, filter: $filter, options: $options, first: $first, after: $after) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    stats {
      maxPrice
      minPrice
    }
    edges {
      node {
        ...AllHotelsSearchList
        ...MapScreen
        id
        __typename
      }
      cursor
    }
  }
}

fragment AllHotelsSearchList on AllHotelsInterface {
  id
  ...AllHotelsSearchRow
  hotelId
}

fragment MapScreen on AllHotelsInterface {
  id
  hotelId
  ...MapView
  ...HotelSwipeList
}

fragment MapView on AllHotelsInterface {
  id
  price {
    ...PriceMarker
  }
  coordinates {
    lat
    lng
  }
}

fragment HotelSwipeList on AllHotelsInterface {
  id
  ...HotelSwipeItem
  address {
    ...Address_address
  }
}

fragment HotelSwipeItem on AllHotelAvailabilityHotel {
  hotelId
  name
  price {
    currency
    amount
  }
  mainPhoto {
    thumbnailUrl
    id
  }
  rating {
    stars
  }
  review {
    score
  }
}

fragment Address_address on Address {
  street
  city
  zip
}

fragment PriceMarker on Price {
  amount
  currency
}

fragment AllHotelsSearchRow on AllHotelsInterface {
  ...HotelTitle
  hotelId
  mainPhoto {
    lowResUrl
    id
  }
  review {
    score
  }
}

fragment HotelTitle on AllHotelAvailabilityHotel {
  price {
    amount
    currency
  }
  ...HotelDistance_hotel
  name
  rating {
    stars
  }
}

fragment HotelDistance_hotel on AllHotelAvailabilityHotel {
  distanceFromCenter
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
    "name": "first",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "NewAllHotelsSearchQuery",
  "id": null,
  "text": "query NewAllHotelsSearchQuery(\n  $search: HotelsSearchInput!\n  $filter: HotelsFilterInput!\n  $options: AvailableHotelOptionsInput\n  $first: Int\n  $after: String\n) {\n  ...RenderSearchResults\n}\n\nfragment RenderSearchResults on RootQuery {\n  allAvailableBookingComHotels(search: $search, filter: $filter, options: $options, first: $first, after: $after) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    stats {\n      maxPrice\n      minPrice\n    }\n    edges {\n      node {\n        ...AllHotelsSearchList\n        ...MapScreen\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment AllHotelsSearchList on AllHotelsInterface {\n  id\n  ...AllHotelsSearchRow\n  hotelId\n}\n\nfragment MapScreen on AllHotelsInterface {\n  id\n  hotelId\n  ...MapView\n  ...HotelSwipeList\n}\n\nfragment MapView on AllHotelsInterface {\n  id\n  price {\n    ...PriceMarker\n  }\n  coordinates {\n    lat\n    lng\n  }\n}\n\nfragment HotelSwipeList on AllHotelsInterface {\n  id\n  ...HotelSwipeItem\n  address {\n    ...Address_address\n  }\n}\n\nfragment HotelSwipeItem on AllHotelAvailabilityHotel {\n  hotelId\n  name\n  price {\n    currency\n    amount\n  }\n  mainPhoto {\n    thumbnailUrl\n    id\n  }\n  rating {\n    stars\n  }\n  review {\n    score\n  }\n}\n\nfragment Address_address on Address {\n  street\n  city\n  zip\n}\n\nfragment PriceMarker on Price {\n  amount\n  currency\n}\n\nfragment AllHotelsSearchRow on AllHotelsInterface {\n  ...HotelTitle\n  hotelId\n  mainPhoto {\n    lowResUrl\n    id\n  }\n  review {\n    score\n  }\n}\n\nfragment HotelTitle on AllHotelAvailabilityHotel {\n  price {\n    amount\n    currency\n  }\n  ...HotelDistance_hotel\n  name\n  rating {\n    stars\n  }\n}\n\nfragment HotelDistance_hotel on AllHotelAvailabilityHotel {\n  distanceFromCenter\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewAllHotelsSearchQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "RenderSearchResults",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NewAllHotelsSearchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allAvailableBookingComHotels",
        "storageKey": null,
        "args": v1,
        "concreteType": "AllHotelAvailabilityHotelConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasPreviousPage",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "startCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "stats",
            "storageKey": null,
            "args": null,
            "concreteType": "HotelAvailabilityStats",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "maxPrice",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "minPrice",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "AllHotelAvailabilityHotelEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "AllHotelAvailabilityHotel",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hotelId",
                    "args": null,
                    "storageKey": null
                  },
                  v2,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "distanceFromCenter",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
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
                    "name": "price",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Price",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "amount",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "currency",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "mainPhoto",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "HotelPhoto",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "lowResUrl",
                        "args": null,
                        "storageKey": null
                      },
                      v2,
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "thumbnailUrl",
                        "args": null,
                        "storageKey": null
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
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "zip",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "allAvailableBookingComHotels",
        "args": v1,
        "handle": "connection",
        "key": "RenderSearchResults_allAvailableBookingComHotels",
        "filters": [
          "search",
          "filter",
          "options"
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b421c7d7992da1dbd3a374cb9f4b1fba';
module.exports = node;
