/**
 * @flow
 * @relayHash 35183ee8f8167da50253d05c26e67d39
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TripServiceRefreshContainer$ref = any;
export type TripServiceRefreshContainerQueryVariables = {|
  bookingId: number,
  authToken: string,
|};
export type TripServiceRefreshContainerQueryResponse = {|
  +singleBooking: ?{|
    +$fragmentRefs: TripServiceRefreshContainer$ref
  |}
|};
export type TripServiceRefreshContainerQuery = {|
  variables: TripServiceRefreshContainerQueryVariables,
  response: TripServiceRefreshContainerQueryResponse,
|};
*/


/*
query TripServiceRefreshContainerQuery(
  $bookingId: Int!
  $authToken: String!
) {
  singleBooking(id: $bookingId, authToken: $authToken) {
    __typename
    ...TripServiceRefreshContainer
    id
  }
}

fragment TripServiceRefreshContainer on BookingInterface {
  databaseId
  authToken
  ...GeneralServicesMenuGroup
  availableWhitelabeledServices {
    ...LocalServicesMenuGroup
  }
}

fragment GeneralServicesMenuGroup on BookingInterface {
  databaseId
  authToken
  status
  passengers {
    nationality
  }
  isPastBooking
  ...InsuranceMenuItemContainer
}

fragment LocalServicesMenuGroup on WhitelabeledServices {
  ...CarRentalMenuItem
  ...LoungeMenuItem
  ...ParkingMenuItem
  ...HotelMenuItem
  ...TransportationMenuItem
}

fragment CarRentalMenuItem on WhitelabeledServices {
  carRental {
    relevantCities {
      whitelabelURL
      location {
        ...LocationPopupButton
        id
      }
    }
  }
}

fragment LoungeMenuItem on WhitelabeledServices {
  lounge {
    relevantAirports {
      whitelabelURL
      location {
        ...LocationPopupButton
        id
      }
    }
  }
}

fragment ParkingMenuItem on WhitelabeledServices {
  parking {
    whitelabelURL
  }
}

fragment HotelMenuItem on WhitelabeledServices {
  hotel {
    roomsConfiguration {
      adultsCount
      children {
        age
      }
    }
    relevantLocations {
      ...LocationItem
      checkin
      checkout
      location {
        id
      }
      hotelCity {
        id
        name
      }
    }
  }
}

fragment TransportationMenuItem on WhitelabeledServices {
  transportation {
    relevantLocations {
      whitelabelURL
      location {
        ...TransportLocationItem
        location {
          lat
          lng
        }
        city {
          name
        }
        id
      }
      date
    }
  }
}

fragment TransportLocationItem on Location {
  ...LocationPopupButton
  location {
    lat
    lng
  }
}

fragment LocationPopupButton on Location {
  city {
    name
  }
  locationId
  ...CountryFlag
}

fragment CountryFlag on Location {
  countryFlagURL
}

fragment LocationItem on HotelServiceRelevantLocation {
  checkin
  checkout
  hotelCity {
    id
    name
  }
  location {
    ...LocationPopupButton
    id
  }
}

fragment InsuranceMenuItemContainer on BookingInterface {
  __typename
  status
  passengers {
    nationality
  }
  isPastBooking
  ... on BookingOneWay {
    trip {
      ...InsuranceMenuItem
    }
  }
  ... on BookingReturn {
    outbound {
      ...InsuranceMenuItem
    }
  }
  ... on BookingMulticity {
    trips {
      ...InsuranceMenuItem
    }
  }
}

fragment InsuranceMenuItem on Trip {
  departure {
    time
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "bookingId",
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
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "bookingId",
    "type": "Int!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "whitelabelURL",
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
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "locationId",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "countryFlagURL",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "location",
  "storageKey": null,
  "args": null,
  "concreteType": "Location",
  "plural": false,
  "selections": [
    v4,
    v5,
    v6,
    v7
  ]
},
v9 = [
  v2,
  v8
],
v10 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "departure",
    "storageKey": null,
    "args": null,
    "concreteType": "RouteStop",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "time",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TripServiceRefreshContainerQuery",
  "id": null,
  "text": "query TripServiceRefreshContainerQuery(\n  $bookingId: Int!\n  $authToken: String!\n) {\n  singleBooking(id: $bookingId, authToken: $authToken) {\n    __typename\n    ...TripServiceRefreshContainer\n    id\n  }\n}\n\nfragment TripServiceRefreshContainer on BookingInterface {\n  databaseId\n  authToken\n  ...GeneralServicesMenuGroup\n  availableWhitelabeledServices {\n    ...LocalServicesMenuGroup\n  }\n}\n\nfragment GeneralServicesMenuGroup on BookingInterface {\n  databaseId\n  authToken\n  status\n  passengers {\n    nationality\n  }\n  isPastBooking\n  ...InsuranceMenuItemContainer\n}\n\nfragment LocalServicesMenuGroup on WhitelabeledServices {\n  ...CarRentalMenuItem\n  ...LoungeMenuItem\n  ...ParkingMenuItem\n  ...HotelMenuItem\n  ...TransportationMenuItem\n}\n\nfragment CarRentalMenuItem on WhitelabeledServices {\n  carRental {\n    relevantCities {\n      whitelabelURL\n      location {\n        ...LocationPopupButton\n        id\n      }\n    }\n  }\n}\n\nfragment LoungeMenuItem on WhitelabeledServices {\n  lounge {\n    relevantAirports {\n      whitelabelURL\n      location {\n        ...LocationPopupButton\n        id\n      }\n    }\n  }\n}\n\nfragment ParkingMenuItem on WhitelabeledServices {\n  parking {\n    whitelabelURL\n  }\n}\n\nfragment HotelMenuItem on WhitelabeledServices {\n  hotel {\n    roomsConfiguration {\n      adultsCount\n      children {\n        age\n      }\n    }\n    relevantLocations {\n      ...LocationItem\n      checkin\n      checkout\n      location {\n        id\n      }\n      hotelCity {\n        id\n        name\n      }\n    }\n  }\n}\n\nfragment TransportationMenuItem on WhitelabeledServices {\n  transportation {\n    relevantLocations {\n      whitelabelURL\n      location {\n        ...TransportLocationItem\n        location {\n          lat\n          lng\n        }\n        city {\n          name\n        }\n        id\n      }\n      date\n    }\n  }\n}\n\nfragment TransportLocationItem on Location {\n  ...LocationPopupButton\n  location {\n    lat\n    lng\n  }\n}\n\nfragment LocationPopupButton on Location {\n  city {\n    name\n  }\n  locationId\n  ...CountryFlag\n}\n\nfragment CountryFlag on Location {\n  countryFlagURL\n}\n\nfragment LocationItem on HotelServiceRelevantLocation {\n  checkin\n  checkout\n  hotelCity {\n    id\n    name\n  }\n  location {\n    ...LocationPopupButton\n    id\n  }\n}\n\nfragment InsuranceMenuItemContainer on BookingInterface {\n  __typename\n  status\n  passengers {\n    nationality\n  }\n  isPastBooking\n  ... on BookingOneWay {\n    trip {\n      ...InsuranceMenuItem\n    }\n  }\n  ... on BookingReturn {\n    outbound {\n      ...InsuranceMenuItem\n    }\n  }\n  ... on BookingMulticity {\n    trips {\n      ...InsuranceMenuItem\n    }\n  }\n}\n\nfragment InsuranceMenuItem on Trip {\n  departure {\n    time\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TripServiceRefreshContainerQuery",
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
            "name": "TripServiceRefreshContainer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TripServiceRefreshContainerQuery",
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
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
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
                "kind": "ScalarField",
                "alias": null,
                "name": "nationality",
                "args": null,
                "storageKey": null
              }
            ]
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
            "name": "authToken",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "availableWhitelabeledServices",
            "storageKey": null,
            "args": null,
            "concreteType": "WhitelabeledServices",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "carRental",
                "storageKey": null,
                "args": null,
                "concreteType": "CarRentalService",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "relevantCities",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CarRentalServiceRelevantCities",
                    "plural": true,
                    "selections": v9
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "lounge",
                "storageKey": null,
                "args": null,
                "concreteType": "LoungeService",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "relevantAirports",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "LoungeServiceRelevantAirports",
                    "plural": true,
                    "selections": v9
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "parking",
                "storageKey": null,
                "args": null,
                "concreteType": "ParkingService",
                "plural": false,
                "selections": [
                  v2
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "hotel",
                "storageKey": null,
                "args": null,
                "concreteType": "HotelService",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "roomsConfiguration",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RoomsConfigurationOutput",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "adultsCount",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "children",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "ChildrenType",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "age",
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
                    "name": "relevantLocations",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "HotelServiceRelevantLocation",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "checkin",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "checkout",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "hotelCity",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "HotelCity",
                        "plural": false,
                        "selections": [
                          v7,
                          v3
                        ]
                      },
                      v8
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "transportation",
                "storageKey": null,
                "args": null,
                "concreteType": "TransportationService",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "relevantLocations",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "TransportationServiceRelevantLocations",
                    "plural": true,
                    "selections": [
                      v2,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "location",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Location",
                        "plural": false,
                        "selections": [
                          v4,
                          v5,
                          v6,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "location",
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
                          v7
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "date",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              }
            ]
          },
          v7,
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
                "selections": v10
              }
            ]
          },
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
                "selections": v10
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
                "selections": v10
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
(node/*: any*/).hash = '8fd76281408064e7cfec7279b1fe93ac';
module.exports = node;
