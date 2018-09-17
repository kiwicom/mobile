/**
 * @flow
 * @relayHash 90acef22c23a00b65c79b3f55cc1bd65
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AllHotelsSearchList_data$ref = any;
export type Currency = "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BTC" | "BTN" | "BWP" | "BYN" | "BYR" | "BZD" | "CAD" | "CDF" | "CHF" | "CLF" | "CLP" | "CNY" | "COP" | "CRC" | "CUC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EEK" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GGP" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "IMP" | "INR" | "IQD" | "IRR" | "ISK" | "JEP" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LTL" | "LVL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRO" | "MTL" | "MUR" | "MVR" | "MWK" | "MXN" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "QUN" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "STD" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "UYU" | "UZS" | "VEF" | "VND" | "VUV" | "WST" | "XAF" | "XAG" | "XAU" | "XCD" | "XDR" | "XOF" | "XPD" | "XPF" | "XPT" | "YER" | "ZAR" | "ZMK" | "ZMW" | "ZWL" | "%future added value";
export type Language = "ar" | "bg" | "ca" | "cs" | "da" | "de" | "el" | "en" | "engb" | "enus" | "es" | "esar" | "et" | "fi" | "fr" | "he" | "hr" | "hu" | "id" | "is" | "it" | "ja" | "ko" | "lt" | "lv" | "ms" | "nl" | "no" | "pl" | "pt" | "ptbr" | "ptpt" | "ro" | "ru" | "sk" | "sl" | "sr" | "sv" | "th" | "tl" | "tr" | "uk" | "vi" | "zh" | "zhcn" | "zhtw" | "%future added value";
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
  currency?: ?Currency
};
export type NewAllHotelsSearchQueryVariables = {|
  search: HotelsSearchInput,
  filter: HotelsFilterInput,
  options?: ?AvailableHotelOptionsInput,
  first?: ?number,
  after?: ?string,
|};
export type NewAllHotelsSearchQueryResponse = {|
  +$fragmentRefs: AllHotelsSearchList_data$ref
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
        id
        ...AllHotelsSearchRow
        __typename
      }
      cursor
    }
    stats {
      maxPrice
      minPrice
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
  "text": "query NewAllHotelsSearchQuery(\n  $search: HotelsSearchInput!\n  $filter: HotelsFilterInput!\n  $options: AvailableHotelOptionsInput\n  $first: Int\n  $after: String\n) {\n  ...AllHotelsSearchList_data\n}\n\nfragment AllHotelsSearchList_data on RootQuery {\n  allAvailableHotels(search: $search, filter: $filter, options: $options, first: $first, after: $after) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...AllHotelsSearchRow\n        __typename\n      }\n      cursor\n    }\n    stats {\n      maxPrice\n      minPrice\n    }\n  }\n}\n\nfragment AllHotelsSearchRow on HotelAvailability {\n  ...HotelTitle\n  hotel {\n    id\n    mainPhoto {\n      lowResUrl\n      id\n    }\n    ...HotelReviewScore_hotel\n  }\n}\n\nfragment HotelTitle on HotelAvailability {\n  price {\n    amount\n    currency\n  }\n  hotel {\n    ...HotelDistance_hotel\n    name\n    rating {\n      stars\n    }\n    id\n  }\n}\n\nfragment HotelReviewScore_hotel on Hotel {\n  review {\n    score\n  }\n}\n\nfragment HotelDistance_hotel on Hotel {\n  distanceFromCenter\n}\n",
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
        "name": "AllHotelsSearchList_data",
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
        "name": "allAvailableHotels",
        "storageKey": null,
        "args": v1,
        "concreteType": "HotelAvailabilityConnection",
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
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "HotelAvailabilityEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "HotelAvailability",
                "plural": false,
                "selections": [
                  v2,
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
                    "name": "hotel",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Hotel",
                    "plural": false,
                    "selections": [
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
                      v2,
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
                          v2
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
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "allAvailableHotels",
        "args": v1,
        "handle": "connection",
        "key": "AllHotels_allAvailableHotels",
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
(node/*: any*/).hash = '36f2eee87902e7e54f3e59be1cb00aee';
module.exports = node;
