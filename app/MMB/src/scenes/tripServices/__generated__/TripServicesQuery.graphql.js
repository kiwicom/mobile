/**
 * @flow
 * @relayHash 2879c413c7e6e360f7ec46cafa46ee1b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CarRentalMenuItem$ref = any;
type LoungeMenuItem$ref = any;
type ParkingMenuItem$ref = any;
export type TripServicesQueryVariables = {|
  bookingId: number,
  authToken: string,
|};
export type TripServicesQueryResponse = {|
  +singleBooking: ?{|
    +availableWhitelabeledServices: ?{|
      +$fragmentRefs: CarRentalMenuItem$ref & LoungeMenuItem$ref & ParkingMenuItem$ref
    |}
  |}
|};
export type TripServicesQuery = {|
  variables: TripServicesQueryVariables,
  response: TripServicesQueryResponse,
|};
*/


/*
query TripServicesQuery(
  $bookingId: Int!
  $authToken: String!
) {
  singleBooking(id: $bookingId, authToken: $authToken) {
    __typename
    availableWhitelabeledServices {
      ...CarRentalMenuItem
      ...LoungeMenuItem
      ...ParkingMenuItem
    }
    id
  }
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = [
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
      v3
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TripServicesQuery",
  "id": null,
  "text": "query TripServicesQuery(\n  $bookingId: Int!\n  $authToken: String!\n) {\n  singleBooking(id: $bookingId, authToken: $authToken) {\n    __typename\n    availableWhitelabeledServices {\n      ...CarRentalMenuItem\n      ...LoungeMenuItem\n      ...ParkingMenuItem\n    }\n    id\n  }\n}\n\nfragment CarRentalMenuItem on WhitelabeledServices {\n  carRental {\n    relevantCities {\n      whitelabelURL\n      location {\n        ...LocationPopupButton\n        id\n      }\n    }\n  }\n}\n\nfragment LoungeMenuItem on WhitelabeledServices {\n  lounge {\n    relevantAirports {\n      whitelabelURL\n      location {\n        ...LocationPopupButton\n        id\n      }\n    }\n  }\n}\n\nfragment ParkingMenuItem on WhitelabeledServices {\n  parking {\n    whitelabelURL\n  }\n}\n\nfragment LocationPopupButton on Location {\n  city {\n    name\n  }\n  locationId\n  ...CountryFlag\n}\n\nfragment CountryFlag on Location {\n  countryFlagURL\n}\n",
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
        "name": "singleBooking",
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
                "name": "CarRentalMenuItem",
                "args": null
              },
              {
                "kind": "FragmentSpread",
                "name": "LoungeMenuItem",
                "args": null
              },
              {
                "kind": "FragmentSpread",
                "name": "ParkingMenuItem",
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
                    "selections": v4
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
                    "selections": v4
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
              }
            ]
          },
          v3
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '37f6cab3a641f4549bde8c052835f3e8';
module.exports = node;
