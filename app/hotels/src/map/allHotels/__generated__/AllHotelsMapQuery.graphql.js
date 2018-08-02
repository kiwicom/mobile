/**
 * @flow
 * @relayHash c12c86f9dbcbf4f6493bb26f15bb13f8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MapScreen$ref = any;
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
export type AllHotelsMapQueryVariables = {|
  search: HotelsSearchInput,
  filter?: ?HotelsFilterInput,
  options?: ?AvailableHotelOptionsInput,
|};
export type AllHotelsMapQueryResponse = {|
  +allAvailableHotels: ?{|
    +$fragmentRefs: MapScreen$ref
  |}
|};
*/


/*
query AllHotelsMapQuery(
  $search: HotelsSearchInput!
  $filter: HotelsFilterInput
  $options: AvailableHotelOptionsInput
) {
  allAvailableHotels(search: $search, filter: $filter, options: $options) {
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
        ...Address_address
      }
      id
    }
  }
}

fragment HotelSwipeItem on HotelAvailability {
  ...HotelDetailPreview_availability
  hotel {
    id
  }
}

fragment Address_address on Address {
  street
  city
  zip
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
    review {
      score
      description
      count
    }
  }
}

fragment PriceMarker on Price {
  amount
  currency
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
    "type": "HotelsFilterInput",
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
    "name": "filter",
    "variableName": "filter",
    "type": "HotelsFilterInput"
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
  "name": "AllHotelsMapQuery",
  "id": null,
  "text": "query AllHotelsMapQuery(\n  $search: HotelsSearchInput!\n  $filter: HotelsFilterInput\n  $options: AvailableHotelOptionsInput\n) {\n  allAvailableHotels(search: $search, filter: $filter, options: $options) {\n    ...MapScreen\n  }\n}\n\nfragment MapScreen on HotelAvailabilityConnection {\n  edges {\n    node {\n      id\n    }\n    ...MapView\n    ...HotelSwipeList\n  }\n}\n\nfragment MapView on HotelAvailabilityEdge {\n  node {\n    id\n    price {\n      ...PriceMarker\n    }\n    hotel {\n      coordinates {\n        lat\n        lng\n      }\n      id\n    }\n  }\n}\n\nfragment HotelSwipeList on HotelAvailabilityEdge {\n  node {\n    id\n    ...HotelSwipeItem\n    hotel {\n      address {\n        ...Address_address\n      }\n      id\n    }\n  }\n}\n\nfragment HotelSwipeItem on HotelAvailability {\n  ...HotelDetailPreview_availability\n  hotel {\n    id\n  }\n}\n\nfragment Address_address on Address {\n  street\n  city\n  zip\n}\n\nfragment HotelDetailPreview_availability on HotelAvailability {\n  price {\n    amount\n    currency\n  }\n  hotel {\n    id\n    name\n    mainPhoto {\n      thumbnailUrl\n      id\n    }\n    review {\n      score\n      description\n      count\n    }\n  }\n}\n\nfragment PriceMarker on Price {\n  amount\n  currency\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AllHotelsMapQuery",
    "type": "RootQuery",
    "metadata": null,
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
            "kind": "FragmentSpread",
            "name": "MapScreen",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AllHotelsMapQuery",
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
                      v2,
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
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "description",
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
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '079a269c7285c8658783aac2b626c35c';
module.exports = node;
