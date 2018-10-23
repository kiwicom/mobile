/**
 * @flow
 * @relayHash 9af503e49ac63ba33800ff1438c1d1d1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Stay22PaginationContainer$ref = any;
export type Currency = "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BOV" | "BRL" | "BSD" | "BTN" | "BWP" | "BYN" | "BZD" | "CAD" | "CDF" | "CHE" | "CHF" | "CHW" | "CLF" | "CLP" | "CNY" | "COP" | "COU" | "CRC" | "CUC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MXV" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STN" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "USN" | "UYI" | "UYU" | "UZS" | "VEF" | "VND" | "VUV" | "WST" | "XAF" | "XAG" | "XAU" | "XBA" | "XBB" | "XBC" | "XBD" | "XCD" | "XDR" | "XOF" | "XPD" | "XPF" | "XPT" | "XSU" | "XTS" | "XUA" | "XXX" | "YER" | "ZAR" | "ZMW" | "ZWL" | "%future added value";
export type Stay22HotelsSearchInput = {
  latitude: number,
  longitude: number,
  guests: number,
  checkin: any,
  checkout: any,
  currency?: ?Currency,
};
export type Stay22PaginationContainerQueryVariables = {|
  search: Stay22HotelsSearchInput,
  after?: ?string,
  first?: ?number,
|};
export type Stay22PaginationContainerQueryResponse = {|
  +$fragmentRefs: Stay22PaginationContainer$ref
|};
export type Stay22PaginationContainerQuery = {|
  variables: Stay22PaginationContainerQueryVariables,
  response: Stay22PaginationContainerQueryResponse,
|};
*/


/*
query Stay22PaginationContainerQuery(
  $search: Stay22HotelsSearchInput!
  $after: String
  $first: Int
) {
  ...Stay22PaginationContainer
}

fragment Stay22PaginationContainer on RootQuery {
  allAvailableStay22Hotels(search: $search, first: $first, after: $after) {
    cityName
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        ...RenderSearchResults
        id
        __typename
      }
      cursor
    }
  }
}

fragment RenderSearchResults on AllHotelsInterface {
  ...AllHotelsSearchList
  ...MapScreen
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
    highResUrl
    id
  }
  review {
    score
  }
}

fragment HotelTitle on AllHotelsInterface {
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

fragment HotelDistance_hotel on AllHotelsInterface {
  distanceFromCenter
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "search",
    "type": "Stay22HotelsSearchInput!",
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
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first",
    "type": "Int"
  },
  {
    "kind": "Variable",
    "name": "search",
    "variableName": "search",
    "type": "Stay22HotelsSearchInput!"
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
  "name": "Stay22PaginationContainerQuery",
  "id": null,
  "text": "query Stay22PaginationContainerQuery(\n  $search: Stay22HotelsSearchInput!\n  $after: String\n  $first: Int\n) {\n  ...Stay22PaginationContainer\n}\n\nfragment Stay22PaginationContainer on RootQuery {\n  allAvailableStay22Hotels(search: $search, first: $first, after: $after) {\n    cityName\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        ...RenderSearchResults\n        id\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment RenderSearchResults on AllHotelsInterface {\n  ...AllHotelsSearchList\n  ...MapScreen\n}\n\nfragment AllHotelsSearchList on AllHotelsInterface {\n  id\n  ...AllHotelsSearchRow\n  hotelId\n}\n\nfragment MapScreen on AllHotelsInterface {\n  id\n  hotelId\n  ...MapView\n  ...HotelSwipeList\n}\n\nfragment MapView on AllHotelsInterface {\n  id\n  price {\n    ...PriceMarker\n  }\n  coordinates {\n    lat\n    lng\n  }\n}\n\nfragment HotelSwipeList on AllHotelsInterface {\n  id\n  ...HotelSwipeItem\n  address {\n    ...Address_address\n  }\n}\n\nfragment HotelSwipeItem on AllHotelAvailabilityHotel {\n  hotelId\n  name\n  price {\n    currency\n    amount\n  }\n  mainPhoto {\n    thumbnailUrl\n    id\n  }\n  rating {\n    stars\n  }\n  review {\n    score\n  }\n}\n\nfragment Address_address on Address {\n  street\n  city\n  zip\n}\n\nfragment PriceMarker on Price {\n  amount\n  currency\n}\n\nfragment AllHotelsSearchRow on AllHotelsInterface {\n  ...HotelTitle\n  hotelId\n  mainPhoto {\n    highResUrl\n    id\n  }\n  review {\n    score\n  }\n}\n\nfragment HotelTitle on AllHotelsInterface {\n  price {\n    amount\n    currency\n  }\n  ...HotelDistance_hotel\n  name\n  rating {\n    stars\n  }\n}\n\nfragment HotelDistance_hotel on AllHotelsInterface {\n  distanceFromCenter\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "Stay22PaginationContainerQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Stay22PaginationContainer",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "Stay22PaginationContainerQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allAvailableStay22Hotels",
        "storageKey": null,
        "args": v1,
        "concreteType": "AllAvailableStay22HotelConnection",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "cityName",
            "args": null,
            "storageKey": null
          },
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
            "concreteType": "AllAvailableStay22HotelEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "AllAvailableStay22Hotel",
                "plural": false,
                "selections": [
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
                        "name": "highResUrl",
                        "args": null,
                        "storageKey": null
                      },
                      v2
                    ]
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
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hotelId",
                    "args": null,
                    "storageKey": null
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
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "AllHotelAvailabilityHotel",
                    "selections": [
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
                            "name": "thumbnailUrl",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      }
                    ]
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
        "name": "allAvailableStay22Hotels",
        "args": v1,
        "handle": "connection",
        "key": "Stay22PaginationContainer_allAvailableStay22Hotels",
        "filters": [
          "search"
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c0e69cc7e9ec8297108bdaa2b56163bc';
module.exports = node;
