/**
 * @flow
 * @relayHash 73ca23c50a014afac9d8cb66065c0ec1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type DestinationImage$ref = any;
type TripInfo$ref = any;
export type InsuranceOverviewSceneQueryVariables = {|
  bookingId: string
|};
export type InsuranceOverviewSceneQueryResponse = {|
  +node: ?{|
    +passengers?: ?$ReadOnlyArray<?{|
      +databaseId: ?number,
      +fullName: ?string,
    |}>,
    +$fragmentRefs: DestinationImage$ref & TripInfo$ref,
  |}
|};
*/


/*
query InsuranceOverviewSceneQuery(
  $bookingId: ID!
) {
  node(id: $bookingId) {
    __typename
    ... on BookingInterface {
      ...DestinationImage
      ...TripInfo
      passengers {
        databaseId
        fullName
      }
    }
    id
  }
}

fragment DestinationImage on BookingInterface {
  destinationImageUrl(dimensions: _375x165)
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
      "name": "databaseId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "fullName",
      "args": null,
      "storageKey": null
    }
  ]
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
  "name": "InsuranceOverviewSceneQuery",
  "id": null,
  "text": "query InsuranceOverviewSceneQuery(\n  $bookingId: ID!\n) {\n  node(id: $bookingId) {\n    __typename\n    ... on BookingInterface {\n      ...DestinationImage\n      ...TripInfo\n      passengers {\n        databaseId\n        fullName\n      }\n    }\n    id\n  }\n}\n\nfragment DestinationImage on BookingInterface {\n  destinationImageUrl(dimensions: _375x165)\n}\n\nfragment TripInfo on BookingInterface {\n  __typename\n  ... on BookingOneWay {\n    ...TripInfoOneWay\n  }\n  ... on BookingReturn {\n    ...TripInfoReturn\n  }\n  ... on BookingMulticity {\n    ...TripInfoMulticity\n  }\n}\n\nfragment TripInfoOneWay on BookingOneWay {\n  trip {\n    ...TripCities\n    ...TripTimes\n  }\n}\n\nfragment TripInfoReturn on BookingReturn {\n  outbound {\n    ...TripCities\n    ...TripTimes\n  }\n  inbound {\n    ...TripTimes\n  }\n}\n\nfragment TripInfoMulticity on BookingMulticity {\n  trips {\n    ...TripCities\n    ...TripTimes\n  }\n}\n\nfragment TripCities on Trip {\n  departure {\n    ...Location\n  }\n  arrival {\n    ...Location\n  }\n}\n\nfragment TripTimes on Trip {\n  ...Duration\n  departure {\n    ...DateTime\n  }\n  arrival {\n    ...DateTime\n  }\n}\n\nfragment Duration on Trip {\n  duration\n}\n\nfragment DateTime on RouteStop {\n  localTime\n}\n\nfragment Location on RouteStop {\n  airport {\n    city {\n      name\n    }\n    ...CountryFlag\n    id\n  }\n}\n\nfragment CountryFlag on Location {\n  countryFlagURL\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "InsuranceOverviewSceneQuery",
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
            "kind": "FragmentSpread",
            "name": "DestinationImage",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "TripInfo",
            "args": null
          },
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "InsuranceOverviewSceneQuery",
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
          v2,
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
(node/*: any*/).hash = '99fb297e792a9b7a93f1ebf275f22373';
module.exports = node;
