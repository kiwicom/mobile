/**
 * @flow
 * @relayHash 5a31c89c2f16cbc2b034c22d1047f884
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type LoungeMenuItem$ref = any;
export type TripServicesQueryVariables = {|
  departureTime: any,
  bookingId: string,
|};
export type TripServicesQueryResponse = {|
  +booking: ?{|
    +availableWhitelabeledServices: ?{|
      +$fragmentRefs: LoungeMenuItem$ref
    |}
  |}
|};
*/


/*
query TripServicesQuery(
  $departureTime: DateTime!
  $bookingId: ID!
) {
  booking(id: $bookingId) {
    availableWhitelabeledServices {
      ...LoungeMenuItem
    }
    id
  }
}

fragment LoungeMenuItem on WhitelabeledServices {
  lounge(departureTime: $departureTime) {
    relevantAirports {
      whitelabelURL
      location {
        ...LocationPopupButton
      }
    }
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
    "name": "departureTime",
    "type": "DateTime!",
    "defaultValue": null
  },
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
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TripServicesQuery",
  "id": null,
  "text": "query TripServicesQuery(\n  $departureTime: DateTime!\n  $bookingId: ID!\n) {\n  booking(id: $bookingId) {\n    availableWhitelabeledServices {\n      ...LoungeMenuItem\n    }\n    id\n  }\n}\n\nfragment LoungeMenuItem on WhitelabeledServices {\n  lounge(departureTime: $departureTime) {\n    relevantAirports {\n      whitelabelURL\n      location {\n        ...LocationPopupButton\n      }\n    }\n  }\n}\n\nfragment LocationPopupButton on Location {\n  city {\n    name\n  }\n  locationId\n  ...CountryFlag\n}\n\nfragment CountryFlag on Location {\n  countryFlagURL\n}\n",
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
        "name": "booking",
        "storageKey": null,
        "args": v1,
        "concreteType": "Booking",
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
                "args": null
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
        "name": "booking",
        "storageKey": null,
        "args": v1,
        "concreteType": "Booking",
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
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "whitelabelURL",
                        "args": null,
                        "storageKey": null
                      },
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
                          }
                        ]
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
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5f20c711d6f2de6a6a65bcbe5fc95439';
module.exports = node;
