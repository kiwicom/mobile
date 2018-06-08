/**
 * @flow
 * @relayHash 1e86acbbdadf745c3794a9eeec9b989a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LoungeMenuItem$ref = any;
type ParkingMenuItem$ref = any;
export type TripServicesQueryVariables = {|
  bookingId: string,
  departureTime: any,
  arrivalTime: any,
|};
export type TripServicesQueryResponse = {|
  +node: ?{|
    +availableWhitelabeledServices?: ?{|
      +$fragmentRefs: LoungeMenuItem$ref & ParkingMenuItem$ref
    |}
  |}
|};
*/


/*
query TripServicesQuery(
  $bookingId: ID!
  $departureTime: DateTime!
  $arrivalTime: DateTime!
) {
  node(id: $bookingId) {
    __typename
    ... on BookingInterface {
      availableWhitelabeledServices {
        ...LoungeMenuItem_WJqJd
        ...ParkingMenuItem_3cQ5np
      }
    }
    id
  }
}

fragment LoungeMenuItem_WJqJd on WhitelabeledServices {
  lounge(departureTime: $departureTime) {
    relevantAirports {
      whitelabelURL
      location {
        ...LocationPopupButton
        id
      }
    }
  }
}

fragment ParkingMenuItem_3cQ5np on WhitelabeledServices {
  parking(fromDate: $departureTime, toDate: $arrivalTime) {
    whitelabelURL
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "bookingId",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "departureTime",
    "type": "DateTime!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "arrivalTime",
    "type": "DateTime!",
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
  "kind": "Variable",
  "name": "departureTime",
  "variableName": "departureTime",
  "type": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "whitelabelURL",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TripServicesQuery",
  "id": null,
  "text": "query TripServicesQuery(\n  $bookingId: ID!\n  $departureTime: DateTime!\n  $arrivalTime: DateTime!\n) {\n  node(id: $bookingId) {\n    __typename\n    ... on BookingInterface {\n      availableWhitelabeledServices {\n        ...LoungeMenuItem_WJqJd\n        ...ParkingMenuItem_3cQ5np\n      }\n    }\n    id\n  }\n}\n\nfragment LoungeMenuItem_WJqJd on WhitelabeledServices {\n  lounge(departureTime: $departureTime) {\n    relevantAirports {\n      whitelabelURL\n      location {\n        ...LocationPopupButton\n        id\n      }\n    }\n  }\n}\n\nfragment ParkingMenuItem_3cQ5np on WhitelabeledServices {\n  parking(fromDate: $departureTime, toDate: $arrivalTime) {\n    whitelabelURL\n  }\n}\n\nfragment LocationPopupButton on Location {\n  city {\n    name\n  }\n  locationId\n  ...CountryFlag\n}\n\nfragment CountryFlag on Location {\n  countryFlagURL\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TripServicesQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
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
                "kind": "FragmentSpread",
                "name": "LoungeMenuItem",
                "args": [
                  v2
                ]
              },
              {
                "kind": "FragmentSpread",
                "name": "ParkingMenuItem",
                "args": [
                  {
                    "kind": "Variable",
                    "name": "arrivalTime",
                    "variableName": "arrivalTime",
                    "type": null
                  },
                  v2
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TripServicesQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
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
                "name": "lounge",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "departureTime",
                    "variableName": "departureTime",
                    "type": "DateTime!"
                  }
                ],
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
                    "selections": [
                      v3,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "location",
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
                            "name": "locationId",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "countryFlagURL",
                            "args": null,
                            "storageKey": null
                          },
                          v4
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "parking",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "fromDate",
                    "variableName": "departureTime",
                    "type": "DateTime!"
                  },
                  {
                    "kind": "Variable",
                    "name": "toDate",
                    "variableName": "arrivalTime",
                    "type": "DateTime!"
                  }
                ],
                "concreteType": "ParkingService",
                "plural": false,
                "selections": [
                  v3
                ]
              }
            ]
          },
          v4
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6b2a1de3d5dc0f333c8facc7c4b92c11';
module.exports = node;
