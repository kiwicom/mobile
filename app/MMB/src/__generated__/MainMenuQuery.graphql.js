/**
 * @flow
 * @relayHash 85dcbc89a490cc0ddb8da8e75af09a7b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Header$ref = any;
export type MainMenuQueryVariables = {|
  bookingId: string
|};
export type MainMenuQueryResponse = {|
  +booking: ?{|
    +$fragmentRefs: Header$ref
  |}
|};
*/


/*
query MainMenuQuery(
  $bookingId: ID!
) {
  booking(id: $bookingId) {
    ...Header
    id
  }
}

fragment Header on Booking {
  isPastBooking
  ...StatusBar
  ...TripInfo
  ...HeaderImage
}

fragment StatusBar on Booking {
  ...StatusBarIcon
  databaseId
}

fragment TripInfo on Booking {
  type
  oneWay {
    ...TripInfoOneWay
    id
  }
  return {
    ...TripInfoReturn
    id
  }
  multicity {
    ...TripInfoMulticity
    id
  }
}

fragment HeaderImage on Booking {
  destinationImageUrl(dimensions: _375x165)
}

fragment TripInfoOneWay on BookingOneWay {
  trip {
    ...TripCities
    ...TripTimes
  }
}

fragment TripInfoReturn on BookingReturn {
  outbound {
    ...TripCities
    ...TripTimes
  }
  inbound {
    ...TripTimes
  }
}

fragment TripInfoMulticity on BookingMulticity {
  trips {
    ...TripCities
    ...TripTimes
  }
}

fragment TripCities on Trip {
  departure {
    ...Location
  }
  arrival {
    ...Location
  }
}

fragment TripTimes on Trip {
  ...Duration
  departure {
    ...DateTime
  }
  arrival {
    ...DateTime
  }
}

fragment Duration on Trip {
  duration
}

fragment DateTime on RouteStop {
  localTime
}

fragment Location on RouteStop {
  airport {
    city {
      name
    }
    countryFlagURL
  }
}

fragment StatusBarIcon on Booking {
  status
  isPastBooking
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "bookingId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "bookingId",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "localTime",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "airport",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "city",
        "storageKey": null,
        "args": null,
        "concreteType": "LocationArea",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "countryFlagURL",
        "args": null,
        "storageKey": null
      }
    ]
  },
  v2
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "duration",
  "args": null,
  "storageKey": null
},
v5 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v3
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v3
  },
  v4
],
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v7 = [
  v2
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MainMenuQuery",
  "id": null,
  "text": "query MainMenuQuery(\n  $bookingId: ID!\n) {\n  booking(id: $bookingId) {\n    ...Header\n    id\n  }\n}\n\nfragment Header on Booking {\n  isPastBooking\n  ...StatusBar\n  ...TripInfo\n  ...HeaderImage\n}\n\nfragment StatusBar on Booking {\n  ...StatusBarIcon\n  databaseId\n}\n\nfragment TripInfo on Booking {\n  type\n  oneWay {\n    ...TripInfoOneWay\n    id\n  }\n  return {\n    ...TripInfoReturn\n    id\n  }\n  multicity {\n    ...TripInfoMulticity\n    id\n  }\n}\n\nfragment HeaderImage on Booking {\n  destinationImageUrl(dimensions: _375x165)\n}\n\nfragment TripInfoOneWay on BookingOneWay {\n  trip {\n    ...TripCities\n    ...TripTimes\n  }\n}\n\nfragment TripInfoReturn on BookingReturn {\n  outbound {\n    ...TripCities\n    ...TripTimes\n  }\n  inbound {\n    ...TripTimes\n  }\n}\n\nfragment TripInfoMulticity on BookingMulticity {\n  trips {\n    ...TripCities\n    ...TripTimes\n  }\n}\n\nfragment TripCities on Trip {\n  departure {\n    ...Location\n  }\n  arrival {\n    ...Location\n  }\n}\n\nfragment TripTimes on Trip {\n  ...Duration\n  departure {\n    ...DateTime\n  }\n  arrival {\n    ...DateTime\n  }\n}\n\nfragment Duration on Trip {\n  duration\n}\n\nfragment DateTime on RouteStop {\n  localTime\n}\n\nfragment Location on RouteStop {\n  airport {\n    city {\n      name\n    }\n    countryFlagURL\n  }\n}\n\nfragment StatusBarIcon on Booking {\n  status\n  isPastBooking\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MainMenuQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "booking",
        "storageKey": null,
        "args": v1,
        "concreteType": "Booking",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Header",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MainMenuQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "booking",
        "storageKey": null,
        "args": v1,
        "concreteType": "Booking",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isPastBooking",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "status",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "databaseId",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "type",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "oneWay",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingOneWay",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "trip",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v5
              },
              v6
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "return",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingReturn",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "outbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v5
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "inbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": [
                  v4,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "departure",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": v7
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "arrival",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": v7
                  }
                ]
              },
              v6
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "multicity",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingMulticity",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "trips",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": true,
                "selections": v5
              },
              v6
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "destinationImageUrl",
            "args": [
              {
                "kind": "Literal",
                "name": "dimensions",
                "value": "_375x165",
                "type": "BookingDestinationImageDimensions"
              }
            ],
            "storageKey": "destinationImageUrl(dimensions:\"_375x165\")"
          },
          v6
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a6adfc82add8836a63278fa8e50c8c8c';
module.exports = node;
