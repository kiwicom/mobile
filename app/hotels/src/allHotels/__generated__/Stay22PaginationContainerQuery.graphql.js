/**
 * @flow
 * @relayHash 43b3d883c30c772a62523f4e27b43b6c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Stay22PaginationContainer_data$ref = any;
export type Currency = "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BOV" | "BRL" | "BSD" | "BTN" | "BWP" | "BYN" | "BZD" | "CAD" | "CDF" | "CHE" | "CHF" | "CHW" | "CLF" | "CLP" | "CNY" | "COP" | "COU" | "CRC" | "CUC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MXV" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STN" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "USN" | "UYI" | "UYU" | "UZS" | "VEF" | "VND" | "VUV" | "WST" | "XAF" | "XAG" | "XAU" | "XBA" | "XBB" | "XBC" | "XBD" | "XCD" | "XDR" | "XOF" | "XPD" | "XPF" | "XPT" | "XSU" | "XTS" | "XUA" | "XXX" | "YER" | "ZAR" | "ZMW" | "ZWL" | "%future added value";
export type OrderBy = "DISTANCE" | "POPULARITY" | "PRICE" | "RANKING" | "REVIEW_SCORE" | "STARS" | "%future added value";
export type Stay22HotelsSearchInput = {|
  latitude: number,
  longitude: number,
  guests: number,
  checkin: any,
  checkout: any,
  currency?: ?Currency,
  orderBy?: ?OrderBy,
|};
export type Stay22PaginationContainerQueryVariables = {|
  search: Stay22HotelsSearchInput,
  after?: ?string,
  first?: ?number,
|};
export type Stay22PaginationContainerQueryResponse = {|
  +$fragmentRefs: Stay22PaginationContainer_data$ref
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
  ...Stay22PaginationContainer_data
}

fragment Stay22PaginationContainer_data on RootQuery {
  allAvailableStay22Hotels(search: $search, first: $first, after: $after) {
    edges {
      node {
        ...RenderSearchResults_data
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment RenderSearchResults_data on AllHotelsInterface {
  ...AllHotelsSearchList_data
  ...MapScreen_data
}

fragment AllHotelsSearchList_data on AllHotelsInterface {
  id
  ...AllHotelsSearchRow_data
  hotelId
}

fragment MapScreen_data on AllHotelsInterface {
  id
  hotelId
  ...MapView_data
  ...HotelSwipeList_data
}

fragment MapView_data on AllHotelsInterface {
  id
  coordinates {
    lat
    lng
  }
  ...MapViewMarker_markerData
}

fragment HotelSwipeList_data on AllHotelsInterface {
  ...HotelSwipeItem_data
  address {
    ...Address_address
  }
}

fragment HotelSwipeItem_data on AllHotelsInterface {
  hotelId
  name
  money {
    currencyId
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

fragment MapViewMarker_markerData on AllHotelsInterface {
  id
  price: money {
    ...PriceMarker_data
  }
  coordinates {
    lat
    lng
  }
}

fragment PriceMarker_data on Money {
  amount
  currencyId
}

fragment AllHotelsSearchRow_data on AllHotelsInterface {
  ...HotelTitle_data
  ...SearchRowContent_hotel
  hotelId
}

fragment HotelTitle_data on AllHotelsInterface {
  money {
    amount
    currencyId
  }
  ...HotelDistance_hotel
  name
  rating {
    stars
  }
}

fragment SearchRowContent_hotel on AllHotelsInterface {
  ...HotelTitle_data
  mainPhoto {
    highResUrl
    lowResUrl
    id
  }
  review {
    score
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
},
v3 = [
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
    "name": "currencyId",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "Stay22PaginationContainerQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "Stay22PaginationContainer_data",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "Stay22PaginationContainerQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allAvailableStay22Hotels",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "AllAvailableStay22HotelConnection",
        "plural": false,
        "selections": [
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
                  (v2/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "money",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Money",
                    "plural": false,
                    "selections": (v3/*: any*/)
                  },
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
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "lowResUrl",
                        "args": null,
                        "storageKey": null
                      },
                      (v2/*: any*/),
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
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hotelId",
                    "args": null,
                    "storageKey": null
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
                    "alias": "price",
                    "name": "money",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Money",
                    "plural": false,
                    "selections": (v3/*: any*/)
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
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
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
        "args": (v1/*: any*/),
        "handle": "connection",
        "key": "Stay22PaginationContainer_allAvailableStay22Hotels",
        "filters": [
          "search"
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "Stay22PaginationContainerQuery",
    "id": null,
    "text": "query Stay22PaginationContainerQuery(\n  $search: Stay22HotelsSearchInput!\n  $after: String\n  $first: Int\n) {\n  ...Stay22PaginationContainer_data\n}\n\nfragment Stay22PaginationContainer_data on RootQuery {\n  allAvailableStay22Hotels(search: $search, first: $first, after: $after) {\n    edges {\n      node {\n        ...RenderSearchResults_data\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment RenderSearchResults_data on AllHotelsInterface {\n  ...AllHotelsSearchList_data\n  ...MapScreen_data\n}\n\nfragment AllHotelsSearchList_data on AllHotelsInterface {\n  id\n  ...AllHotelsSearchRow_data\n  hotelId\n}\n\nfragment MapScreen_data on AllHotelsInterface {\n  id\n  hotelId\n  ...MapView_data\n  ...HotelSwipeList_data\n}\n\nfragment MapView_data on AllHotelsInterface {\n  id\n  coordinates {\n    lat\n    lng\n  }\n  ...MapViewMarker_markerData\n}\n\nfragment HotelSwipeList_data on AllHotelsInterface {\n  ...HotelSwipeItem_data\n  address {\n    ...Address_address\n  }\n}\n\nfragment HotelSwipeItem_data on AllHotelsInterface {\n  hotelId\n  name\n  money {\n    currencyId\n    amount\n  }\n  mainPhoto {\n    thumbnailUrl\n    id\n  }\n  rating {\n    stars\n  }\n  review {\n    score\n  }\n}\n\nfragment Address_address on Address {\n  street\n  city\n  zip\n}\n\nfragment MapViewMarker_markerData on AllHotelsInterface {\n  id\n  price: money {\n    ...PriceMarker_data\n  }\n  coordinates {\n    lat\n    lng\n  }\n}\n\nfragment PriceMarker_data on Money {\n  amount\n  currencyId\n}\n\nfragment AllHotelsSearchRow_data on AllHotelsInterface {\n  ...HotelTitle_data\n  ...SearchRowContent_hotel\n  hotelId\n}\n\nfragment HotelTitle_data on AllHotelsInterface {\n  money {\n    amount\n    currencyId\n  }\n  ...HotelDistance_hotel\n  name\n  rating {\n    stars\n  }\n}\n\nfragment SearchRowContent_hotel on AllHotelsInterface {\n  ...HotelTitle_data\n  mainPhoto {\n    highResUrl\n    lowResUrl\n    id\n  }\n  review {\n    score\n  }\n}\n\nfragment HotelDistance_hotel on AllHotelsInterface {\n  distanceFromCenter\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3f426c694707c93dcd8f5ae030d4c65e';
module.exports = node;
