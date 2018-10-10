/**
 * @flow
 * @relayHash 1fcc79172737e7b50beba438f84b921a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FillTravelDocument$ref = any;
export type FillTravelDocumentContainerQueryVariables = {|
  bookingId: number,
  authToken: string,
|};
export type FillTravelDocumentContainerQueryResponse = {|
  +singleBooking: ?{|
    +$fragmentRefs: FillTravelDocument$ref
  |}
|};
export type FillTravelDocumentContainerQuery = {|
  variables: FillTravelDocumentContainerQueryVariables,
  response: FillTravelDocumentContainerQueryResponse,
|};
*/


/*
query FillTravelDocumentContainerQuery(
  $bookingId: Int!
  $authToken: String!
) {
  singleBooking(id: $bookingId, authToken: $authToken) {
    __typename
    ...FillTravelDocument
    id
  }
}

fragment FillTravelDocument on BookingInterface {
  databaseId
  authToken
  destinationImageUrl(dimensions: _375x165)
  ...TripInfo
  ...PassengerTravelDocumentMenuGroup
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

fragment PassengerTravelDocumentMenuGroup on BookingInterface {
  passengers {
    databaseId
    ...TravelDocumentPassengerMenuItem
  }
}

fragment TravelDocumentPassengerMenuItem on Passenger {
  title
  fullName
  databaseId
  travelDocument {
    idNumber
    expiration
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
  duration
  departure {
    ...DateTime
  }
  arrival {
    ...DateTime
  }
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
  "name": "databaseId",
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
      },
      v3
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
v8 = [
  v4
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FillTravelDocumentContainerQuery",
  "id": null,
  "text": "query FillTravelDocumentContainerQuery(\n  $bookingId: Int!\n  $authToken: String!\n) {\n  singleBooking(id: $bookingId, authToken: $authToken) {\n    __typename\n    ...FillTravelDocument\n    id\n  }\n}\n\nfragment FillTravelDocument on BookingInterface {\n  databaseId\n  authToken\n  destinationImageUrl(dimensions: _375x165)\n  ...TripInfo\n  ...PassengerTravelDocumentMenuGroup\n}\n\nfragment TripInfo on BookingInterface {\n  __typename\n  ... on BookingOneWay {\n    ...TripInfoOneWay\n  }\n  ... on BookingReturn {\n    ...TripInfoReturn\n  }\n  ... on BookingMulticity {\n    ...TripInfoMulticity\n  }\n}\n\nfragment PassengerTravelDocumentMenuGroup on BookingInterface {\n  passengers {\n    databaseId\n    ...TravelDocumentPassengerMenuItem\n  }\n}\n\nfragment TravelDocumentPassengerMenuItem on Passenger {\n  title\n  fullName\n  databaseId\n  travelDocument {\n    idNumber\n    expiration\n  }\n}\n\nfragment TripInfoOneWay on BookingOneWay {\n  trip {\n    ...TripCities\n    ...TripTimes\n  }\n}\n\nfragment TripInfoReturn on BookingReturn {\n  outbound {\n    ...TripCities\n    ...TripTimes\n  }\n  inbound {\n    ...TripTimes\n  }\n}\n\nfragment TripInfoMulticity on BookingMulticity {\n  trips {\n    ...TripCities\n    ...TripTimes\n  }\n}\n\nfragment TripCities on Trip {\n  departure {\n    ...Location\n  }\n  arrival {\n    ...Location\n  }\n}\n\nfragment TripTimes on Trip {\n  duration\n  departure {\n    ...DateTime\n  }\n  arrival {\n    ...DateTime\n  }\n}\n\nfragment DateTime on RouteStop {\n  localTime\n}\n\nfragment Location on RouteStop {\n  airport {\n    city {\n      name\n    }\n    ...CountryFlag\n    id\n  }\n}\n\nfragment CountryFlag on Location {\n  countryFlagURL\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FillTravelDocumentContainerQuery",
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
            "name": "FillTravelDocument",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FillTravelDocumentContainerQuery",
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
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
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
              v2,
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
                "name": "fullName",
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
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "expiration",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          v3,
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
                "selections": v7
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
                    "selections": v8
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "arrival",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": v8
                  }
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
                "selections": v7
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
(node/*: any*/).hash = '8f7f14ec71452905a7b5cc9bc59bd123';
module.exports = node;
