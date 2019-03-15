/**
 * @flow
 * @relayHash ef6897c2cd4517d2f51c1a19cd0e05d2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SingleMap_hotel$ref = any;
export type Currency = "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BOV" | "BRL" | "BSD" | "BTN" | "BWP" | "BYN" | "BZD" | "CAD" | "CDF" | "CHE" | "CHF" | "CHW" | "CLF" | "CLP" | "CNY" | "COP" | "COU" | "CRC" | "CUC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRU" | "MUR" | "MVR" | "MWK" | "MXN" | "MXV" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STN" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "USN" | "UYI" | "UYU" | "UZS" | "VEF" | "VND" | "VUV" | "WST" | "XAF" | "XAG" | "XAU" | "XBA" | "XBB" | "XBC" | "XBD" | "XCD" | "XDR" | "XOF" | "XPD" | "XPF" | "XPT" | "XSU" | "XTS" | "XUA" | "XXX" | "YER" | "ZAR" | "ZMW" | "ZWL" | "%future added value";
export type Stay22SingleHotelMapScreenQueryVariables = {|
  id: string,
  guests: number,
  currency?: ?Currency,
  checkin: any,
  checkout: any,
|};
export type Stay22SingleHotelMapScreenQueryResponse = {|
  +stay22HotelDetail: ?{|
    +$fragmentRefs: SingleMap_hotel$ref
  |}
|};
export type Stay22SingleHotelMapScreenQuery = {|
  variables: Stay22SingleHotelMapScreenQueryVariables,
  response: Stay22SingleHotelMapScreenQueryResponse,
|};
*/


/*
query Stay22SingleHotelMapScreenQuery(
  $id: ID!
  $guests: Int!
  $currency: Currency
  $checkin: Date!
  $checkout: Date!
) {
  stay22HotelDetail(id: $id, guests: $guests, currency: $currency, checkin: $checkin, checkout: $checkout) {
    ...SingleMap_hotel
    id
  }
}

fragment SingleMap_hotel on HotelAvailabilityInterface {
  hotel {
    __typename
    ...MapView_hotel
    id
  }
  ...AdditionalInfo_data
}

fragment MapView_hotel on HotelInterface {
  coordinates {
    lat
    lng
  }
}

fragment AdditionalInfo_data on HotelAvailabilityInterface {
  total {
    amount
    currencyId
  }
  hotel {
    __typename
    address {
      ...Address_address
    }
    review {
      score
    }
    name
    mainPhoto {
      thumbnailUrl
      id
    }
    rating {
      stars
    }
    id
  }
}

fragment Address_address on Address {
  street
  city
  zip
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
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "Stay22SingleHotelMapScreenQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "stay22HotelDetail",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Stay22HotelDetail",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "SingleMap_hotel",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "Stay22SingleHotelMapScreenQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "stay22HotelDetail",
        "storageKey": null,
        "args": (v1/*: any*/),
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
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "__typename",
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
              (v2/*: any*/),
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
                  (v2/*: any*/)
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
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "total",
            "storageKey": null,
            "args": null,
            "concreteType": "Money",
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
                "name": "currencyId",
                "args": null,
                "storageKey": null
              }
            ]
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "Stay22SingleHotelMapScreenQuery",
    "id": null,
    "text": "query Stay22SingleHotelMapScreenQuery(\n  $id: ID!\n  $guests: Int!\n  $currency: Currency\n  $checkin: Date!\n  $checkout: Date!\n) {\n  stay22HotelDetail(id: $id, guests: $guests, currency: $currency, checkin: $checkin, checkout: $checkout) {\n    ...SingleMap_hotel\n    id\n  }\n}\n\nfragment SingleMap_hotel on HotelAvailabilityInterface {\n  hotel {\n    __typename\n    ...MapView_hotel\n    id\n  }\n  ...AdditionalInfo_data\n}\n\nfragment MapView_hotel on HotelInterface {\n  coordinates {\n    lat\n    lng\n  }\n}\n\nfragment AdditionalInfo_data on HotelAvailabilityInterface {\n  total {\n    amount\n    currencyId\n  }\n  hotel {\n    __typename\n    address {\n      ...Address_address\n    }\n    review {\n      score\n    }\n    name\n    mainPhoto {\n      thumbnailUrl\n      id\n    }\n    rating {\n      stars\n    }\n    id\n  }\n}\n\nfragment Address_address on Address {\n  street\n  city\n  zip\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f05556c3d6eb1ec25b81878f9cfd9be7';
module.exports = node;
