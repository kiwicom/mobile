/**
 * @flow
 * @relayHash 0e5dbd7ec664fb2896c8a76036b92eab
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MainMenu$ref = any;
export type MainMenuRefetchQueryVariables = {|
  id: number,
  authToken: string,
|};
export type MainMenuRefetchQueryResponse = {|
  +singleBooking: ?{|
    +$fragmentRefs: MainMenu$ref
  |}
|};
*/


/*
query MainMenuRefetchQuery(
  $id: Int!
  $authToken: String!
) {
  singleBooking(id: $id, authToken: $authToken) {
    __typename
    ...MainMenu
    id
  }
}

fragment MainMenu on BookingInterface {
  databaseId
  authToken
  isPastBooking
  ...ExploreCity
  ...Header
  ...PassengerMenuGroup
  ...MissingInformation
}

fragment ExploreCity on BookingInterface {
  ...CardContent
}

fragment Header on BookingInterface {
  isPastBooking
  ...StatusBar
  ...TripInfo
  ...TripOverview
}

fragment PassengerMenuGroup on BookingInterface {
  ...PassengerMenuDetail
}

fragment MissingInformation on BookingInterface {
  passengers {
    travelDocument {
      idNumber
    }
  }
}

fragment PassengerMenuDetail on BookingInterface {
  ...Visa
  passengers {
    databaseId
    ...Passenger
  }
}

fragment Visa on BookingInterface {
  passengers {
    visaInformation {
      requiredIn {
        name
        id
      }
      warningIn {
        name
        id
      }
    }
  }
}

fragment Passenger on Passenger {
  fullName
  title
  birthday
}

fragment StatusBar on BookingInterface {
  ...StatusBarIcon
  databaseId
}

fragment TripInfo on BookingInterface {
  __typename
  ... on BookingOneWay {
    ...TripInfoOneWay
  }
  ... on BookingReturn {
    ...TripInfoReturn
  }
  ... on BookingMulticity {
    ...TripInfoMulticity
  }
}

fragment TripOverview on BookingInterface {
  __typename
  ... on BookingOneWay {
    ...OneWayTimeline
  }
  ... on BookingReturn {
    ...ReturnTimeline
  }
  ... on BookingMulticity {
    ...MulticityTimeline
  }
}

fragment OneWayTimeline on BookingOneWay {
  trip {
    ...Timeline
  }
}

fragment ReturnTimeline on BookingReturn {
  outbound {
    ...Timeline
    departure {
      localTime
      airport {
        locationId
        city {
          name
        }
        id
      }
    }
    arrival {
      localTime
      airport {
        locationId
        city {
          name
        }
        id
      }
    }
  }
  inbound {
    ...Timeline
    departure {
      localTime
      airport {
        locationId
        city {
          name
        }
        id
      }
    }
    arrival {
      localTime
      airport {
        locationId
        city {
          name
        }
        id
      }
    }
  }
}

fragment MulticityTimeline on BookingMulticity {
  trips {
    ...Timeline
  }
}

fragment Timeline on Trip {
  legs {
    departure {
      ...TimelineDeparture_routeStop
    }
    arrival {
      ...TimelineArrival
    }
    ...TimelineDeparture_legInfo
    id
  }
}

fragment TimelineDeparture_routeStop on RouteStop {
  ...TimelineTitle
}

fragment TimelineArrival on RouteStop {
  ...TimelineTitle
}

fragment TimelineDeparture_legInfo on Leg {
  flightNumber
  airline {
    name
    logoUrl
  }
}

fragment TimelineTitle on RouteStop {
  localTime
  airport {
    locationId
    city {
      name
    }
    id
  }
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
    id
  }
}

fragment CountryFlag on Location {
  countryFlagURL
}

fragment StatusBarIcon on BookingInterface {
  status
  isPastBooking
}

fragment CardContent on BookingInterface {
  __typename
  ...ExploreOneWay
  ...ExploreReturn
  ...ExploreMulticity
}

fragment ExploreOneWay on BookingInterface {
  ... on BookingOneWay {
    trip {
      ...ExploreVariant
    }
  }
}

fragment ExploreReturn on BookingInterface {
  ... on BookingReturn {
    outbound {
      ...ExploreVariant
    }
  }
}

fragment ExploreMulticity on BookingInterface {
  ... on BookingMulticity {
    trips {
      ...ExploreVariant
    }
  }
}

fragment ExploreVariant on Trip {
  departure {
    ...BookingConfirmed
    time
  }
}

fragment BookingConfirmed on RouteStop {
  time
  airport {
    city {
      name
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "authToken",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "authToken",
    "variableName": "authToken",
    "type": "String!"
  },
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "Int!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "databaseId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = [
  v3,
  v4
],
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "time",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "city",
  "storageKey": null,
  "args": null,
  "concreteType": "LocationArea",
  "plural": false,
  "selections": [
    v3
  ]
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "countryFlagURL",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "localTime",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "duration",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "locationId",
  "args": null,
  "storageKey": null
},
v12 = [
  v9,
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "airport",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
      v11,
      v7,
      v4
    ]
  }
],
v13 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v12
},
v14 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "arrival",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v12
},
v15 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "legs",
  "storageKey": null,
  "args": null,
  "concreteType": "Leg",
  "plural": true,
  "selections": [
    v13,
    v14,
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "flightNumber",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "airline",
      "storageKey": null,
      "args": null,
      "concreteType": "Airline",
      "plural": false,
      "selections": [
        v3,
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "logoUrl",
          "args": null,
          "storageKey": null
        }
      ]
    },
    v4
  ]
},
v16 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": [
      v6,
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "airport",
        "storageKey": null,
        "args": null,
        "concreteType": "Location",
        "plural": false,
        "selections": [
          v7,
          v4,
          v8
        ]
      },
      v9
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "arrival",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "airport",
        "storageKey": null,
        "args": null,
        "concreteType": "Location",
        "plural": false,
        "selections": [
          v7,
          v8,
          v4
        ]
      },
      v9
    ]
  },
  v10,
  v15
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MainMenuRefetchQuery",
  "id": null,
  "text": "query MainMenuRefetchQuery(\n  $id: Int!\n  $authToken: String!\n) {\n  singleBooking(id: $id, authToken: $authToken) {\n    __typename\n    ...MainMenu\n    id\n  }\n}\n\nfragment MainMenu on BookingInterface {\n  databaseId\n  authToken\n  isPastBooking\n  ...ExploreCity\n  ...Header\n  ...PassengerMenuGroup\n  ...MissingInformation\n}\n\nfragment ExploreCity on BookingInterface {\n  ...CardContent\n}\n\nfragment Header on BookingInterface {\n  isPastBooking\n  ...StatusBar\n  ...TripInfo\n  ...TripOverview\n}\n\nfragment PassengerMenuGroup on BookingInterface {\n  ...PassengerMenuDetail\n}\n\nfragment MissingInformation on BookingInterface {\n  passengers {\n    travelDocument {\n      idNumber\n    }\n  }\n}\n\nfragment PassengerMenuDetail on BookingInterface {\n  ...Visa\n  passengers {\n    databaseId\n    ...Passenger\n  }\n}\n\nfragment Visa on BookingInterface {\n  passengers {\n    visaInformation {\n      requiredIn {\n        name\n        id\n      }\n      warningIn {\n        name\n        id\n      }\n    }\n  }\n}\n\nfragment Passenger on Passenger {\n  fullName\n  title\n  birthday\n}\n\nfragment StatusBar on BookingInterface {\n  ...StatusBarIcon\n  databaseId\n}\n\nfragment TripInfo on BookingInterface {\n  __typename\n  ... on BookingOneWay {\n    ...TripInfoOneWay\n  }\n  ... on BookingReturn {\n    ...TripInfoReturn\n  }\n  ... on BookingMulticity {\n    ...TripInfoMulticity\n  }\n}\n\nfragment TripOverview on BookingInterface {\n  __typename\n  ... on BookingOneWay {\n    ...OneWayTimeline\n  }\n  ... on BookingReturn {\n    ...ReturnTimeline\n  }\n  ... on BookingMulticity {\n    ...MulticityTimeline\n  }\n}\n\nfragment OneWayTimeline on BookingOneWay {\n  trip {\n    ...Timeline\n  }\n}\n\nfragment ReturnTimeline on BookingReturn {\n  outbound {\n    ...Timeline\n    departure {\n      localTime\n      airport {\n        locationId\n        city {\n          name\n        }\n        id\n      }\n    }\n    arrival {\n      localTime\n      airport {\n        locationId\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n  inbound {\n    ...Timeline\n    departure {\n      localTime\n      airport {\n        locationId\n        city {\n          name\n        }\n        id\n      }\n    }\n    arrival {\n      localTime\n      airport {\n        locationId\n        city {\n          name\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment MulticityTimeline on BookingMulticity {\n  trips {\n    ...Timeline\n  }\n}\n\nfragment Timeline on Trip {\n  legs {\n    departure {\n      ...TimelineDeparture_routeStop\n    }\n    arrival {\n      ...TimelineArrival\n    }\n    ...TimelineDeparture_legInfo\n    id\n  }\n}\n\nfragment TimelineDeparture_routeStop on RouteStop {\n  ...TimelineTitle\n}\n\nfragment TimelineArrival on RouteStop {\n  ...TimelineTitle\n}\n\nfragment TimelineDeparture_legInfo on Leg {\n  flightNumber\n  airline {\n    name\n    logoUrl\n  }\n}\n\nfragment TimelineTitle on RouteStop {\n  localTime\n  airport {\n    locationId\n    city {\n      name\n    }\n    id\n  }\n}\n\nfragment TripInfoOneWay on BookingOneWay {\n  trip {\n    ...TripCities\n    ...TripTimes\n  }\n}\n\nfragment TripInfoReturn on BookingReturn {\n  outbound {\n    ...TripCities\n    ...TripTimes\n  }\n  inbound {\n    ...TripTimes\n  }\n}\n\nfragment TripInfoMulticity on BookingMulticity {\n  trips {\n    ...TripCities\n    ...TripTimes\n  }\n}\n\nfragment TripCities on Trip {\n  departure {\n    ...Location\n  }\n  arrival {\n    ...Location\n  }\n}\n\nfragment TripTimes on Trip {\n  ...Duration\n  departure {\n    ...DateTime\n  }\n  arrival {\n    ...DateTime\n  }\n}\n\nfragment Duration on Trip {\n  duration\n}\n\nfragment DateTime on RouteStop {\n  localTime\n}\n\nfragment Location on RouteStop {\n  airport {\n    city {\n      name\n    }\n    ...CountryFlag\n    id\n  }\n}\n\nfragment CountryFlag on Location {\n  countryFlagURL\n}\n\nfragment StatusBarIcon on BookingInterface {\n  status\n  isPastBooking\n}\n\nfragment CardContent on BookingInterface {\n  __typename\n  ...ExploreOneWay\n  ...ExploreReturn\n  ...ExploreMulticity\n}\n\nfragment ExploreOneWay on BookingInterface {\n  ... on BookingOneWay {\n    trip {\n      ...ExploreVariant\n    }\n  }\n}\n\nfragment ExploreReturn on BookingInterface {\n  ... on BookingReturn {\n    outbound {\n      ...ExploreVariant\n    }\n  }\n}\n\nfragment ExploreMulticity on BookingInterface {\n  ... on BookingMulticity {\n    trips {\n      ...ExploreVariant\n    }\n  }\n}\n\nfragment ExploreVariant on Trip {\n  departure {\n    ...BookingConfirmed\n    time\n  }\n}\n\nfragment BookingConfirmed on RouteStop {\n  time\n  airport {\n    city {\n      name\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MainMenuRefetchQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "singleBooking",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
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
    "name": "MainMenuRefetchQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "singleBooking",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "authToken",
            "args": null,
            "storageKey": null
          },
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
            "name": "__typename",
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
                    "selections": v5
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "warningIn",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Location",
                    "plural": true,
                    "selections": v5
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
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "travelDocument",
                "storageKey": null,
                "args": null,
                "concreteType": "TravelDocument",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "idNumber",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          v4,
          {
            "kind": "InlineFragment",
            "type": "BookingMulticity",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "trips",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": true,
                "selections": v16
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingReturn",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "outbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "departure",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": [
                      v6,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "airport",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Location",
                        "plural": false,
                        "selections": [
                          v7,
                          v4,
                          v8,
                          v11
                        ]
                      },
                      v9
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "arrival",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "airport",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Location",
                        "plural": false,
                        "selections": [
                          v7,
                          v8,
                          v4,
                          v11
                        ]
                      },
                      v9
                    ]
                  },
                  v10,
                  v15
                ]
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
                  v10,
                  v13,
                  v14,
                  v15
                ]
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingOneWay",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "trip",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v16
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
(node/*: any*/).hash = '822809d060d0520c99ea0c4917de4a83';
module.exports = node;
