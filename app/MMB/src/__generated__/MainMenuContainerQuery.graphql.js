/**
 * @flow
 * @relayHash b8ed0b93baed60bfa63d8c8bd7015be4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MainMenu$ref = any;
export type MainMenuContainerQueryVariables = {|
  bookingId: string
|};
export type MainMenuContainerQueryResponse = {|
  +booking: ?{|
    +$fragmentRefs: MainMenu$ref
  |}
|};
*/


/*
query MainMenuContainerQuery(
  $bookingId: ID!
) {
  booking(id: $bookingId) {
    ...MainMenu
    id
  }
}

fragment MainMenu on Booking {
  ...Header
  ...PassengerMenuGroup
}

fragment Header on Booking {
  isPastBooking
  ...StatusBar
  ...TripInfo
  ...HeaderImage
  ...TripOverview
}

fragment PassengerMenuGroup on Booking {
  ...PassengerMenuDetail
}

fragment PassengerMenuDetail on Booking {
  ...Visa
  passengers {
    databaseId
    ...Passenger
  }
}

fragment Visa on Booking {
  passengers {
    visaInformation {
      requiredIn {
        name
      }
      warningIn {
        name
      }
    }
  }
}

fragment Passenger on Passenger {
  fullName
  title
  birthday
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

fragment TripOverview on Booking {
  type
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
    ...CountryFlag
  }
}

fragment CountryFlag on Location {
  countryFlagURL
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
  "name": "databaseId",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "localTime",
  "args": null,
  "storageKey": null
},
v5 = [
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
        "selections": v3
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
  v4
],
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "duration",
  "args": null,
  "storageKey": null
},
v7 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v5
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": v5
  },
  v6
],
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v9 = [
  v4
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MainMenuContainerQuery",
  "id": null,
  "text": "query MainMenuContainerQuery(\n  $bookingId: ID!\n) {\n  booking(id: $bookingId) {\n    ...MainMenu\n    id\n  }\n}\n\nfragment MainMenu on Booking {\n  ...Header\n  ...PassengerMenuGroup\n}\n\nfragment Header on Booking {\n  isPastBooking\n  ...StatusBar\n  ...TripInfo\n  ...HeaderImage\n  ...TripOverview\n}\n\nfragment PassengerMenuGroup on Booking {\n  ...PassengerMenuDetail\n}\n\nfragment PassengerMenuDetail on Booking {\n  ...Visa\n  passengers {\n    databaseId\n    ...Passenger\n  }\n}\n\nfragment Visa on Booking {\n  passengers {\n    visaInformation {\n      requiredIn {\n        name\n      }\n      warningIn {\n        name\n      }\n    }\n  }\n}\n\nfragment Passenger on Passenger {\n  fullName\n  title\n  birthday\n}\n\nfragment StatusBar on Booking {\n  ...StatusBarIcon\n  databaseId\n}\n\nfragment TripInfo on Booking {\n  type\n  oneWay {\n    ...TripInfoOneWay\n    id\n  }\n  return {\n    ...TripInfoReturn\n    id\n  }\n  multicity {\n    ...TripInfoMulticity\n    id\n  }\n}\n\nfragment HeaderImage on Booking {\n  destinationImageUrl(dimensions: _375x165)\n}\n\nfragment TripOverview on Booking {\n  type\n}\n\nfragment TripInfoOneWay on BookingOneWay {\n  trip {\n    ...TripCities\n    ...TripTimes\n  }\n}\n\nfragment TripInfoReturn on BookingReturn {\n  outbound {\n    ...TripCities\n    ...TripTimes\n  }\n  inbound {\n    ...TripTimes\n  }\n}\n\nfragment TripInfoMulticity on BookingMulticity {\n  trips {\n    ...TripCities\n    ...TripTimes\n  }\n}\n\nfragment TripCities on Trip {\n  departure {\n    ...Location\n  }\n  arrival {\n    ...Location\n  }\n}\n\nfragment TripTimes on Trip {\n  ...Duration\n  departure {\n    ...DateTime\n  }\n  arrival {\n    ...DateTime\n  }\n}\n\nfragment Duration on Trip {\n  duration\n}\n\nfragment DateTime on RouteStop {\n  localTime\n}\n\nfragment Location on RouteStop {\n  airport {\n    city {\n      name\n    }\n    ...CountryFlag\n  }\n}\n\nfragment CountryFlag on Location {\n  countryFlagURL\n}\n\nfragment StatusBarIcon on Booking {\n  status\n  isPastBooking\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MainMenuContainerQuery",
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
            "name": "MainMenu",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MainMenuContainerQuery",
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
          v2,
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
                "selections": v7
              },
              v8
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
                "selections": v7
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
                  v6,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "departure",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": v9
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "arrival",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": v9
                  }
                ]
              },
              v8
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
                "selections": v7
              },
              v8
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "passengers",
            "storageKey": null,
            "args": null,
            "concreteType": "Passenger",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "visaInformation",
                "storageKey": null,
                "args": null,
                "concreteType": "Visa",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "requiredIn",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Location",
                    "plural": true,
                    "selections": v3
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "warningIn",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Location",
                    "plural": true,
                    "selections": v3
                  }
                ]
              },
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "fullName",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "title",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "birthday",
                "args": null,
                "storageKey": null
              }
            ]
          },
          v8
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b206719ad5ef8a2ce62bf35f23d8c37e';
module.exports = node;
