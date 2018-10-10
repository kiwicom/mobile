/**
 * @flow
 * @relayHash 4d48b69ed5e768d9b4c3cc57c8fc950e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type MulticityFlight_booking$ref = any;
type OneWayFlight_booking$ref = any;
type ReturnFlight_booking$ref = any;
export type FlightQueryVariables = {|
  id: number,
  authToken: string,
|};
export type FlightQueryResponse = {|
  +singleBooking: ?{|
    +__typename: string,
    +isPastBooking: ?boolean,
    +$fragmentRefs: OneWayFlight_booking$ref & ReturnFlight_booking$ref & MulticityFlight_booking$ref,
  |}
|};
export type FlightQuery = {|
  variables: FlightQueryVariables,
  response: FlightQueryResponse,
|};
*/


/*
query FlightQuery(
  $id: Int!
  $authToken: String!
) {
  singleBooking(id: $id, authToken: $authToken) {
    __typename
    isPastBooking
    ... on BookingOneWay {
      ...OneWayFlight_booking
    }
    ... on BookingReturn {
      ...ReturnFlight_booking
    }
    ... on BookingMulticity {
      ...MulticityFlight_booking
    }
    id
  }
}

fragment OneWayFlight_booking on BookingOneWay {
  ...CityImageContainer_image
  trip {
    departure {
      ...CityImageContainer_departure
    }
    arrival {
      ...CityImageContainer_arrival
    }
  }
}

fragment ReturnFlight_booking on BookingReturn {
  ...CityImageContainer_image
  outbound {
    arrival {
      ...CityImageContainer_arrival
    }
    departure {
      ...CityImageContainer_departure
    }
  }
}

fragment MulticityFlight_booking on BookingMulticity {
  ...CityImageContainer_image
  end {
    ...CityImageContainer_arrival
  }
  start {
    ...CityImageContainer_departure
  }
}

fragment CityImageContainer_image on BookingInterface {
  id
  databaseId
  passengerCount
  isPastBooking
  destinationImageUrl(dimensions: _375x165)
  authToken
  ...ImageBadges
}

fragment CityImageContainer_arrival on RouteStop {
  ...FromToRow_arrival
  cityId
  time
}

fragment CityImageContainer_departure on RouteStop {
  ...DateAndPassengerCount_departure
  ...FromToRow_departure
  time
}

fragment DateAndPassengerCount_departure on RouteStop {
  time
}

fragment FromToRow_departure on RouteStop {
  airport {
    city {
      name
    }
    id
  }
}

fragment FromToRow_arrival on RouteStop {
  airport {
    city {
      name
    }
    id
  }
}

fragment ImageBadges on BookingInterface {
  databaseId
  ...StatusBadge
}

fragment StatusBadge on BookingInterface {
  status
  isPastBooking
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
    "type": "String"
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
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isPastBooking",
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
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "databaseId",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "passengerCount",
  "args": null,
  "storageKey": null
},
v7 = {
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
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "authToken",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v10 = {
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
    v4
  ]
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "time",
  "args": null,
  "storageKey": null
},
v12 = [
  v10,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "cityId",
    "args": null,
    "storageKey": null
  },
  v11
],
v13 = [
  v11,
  v10
],
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
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v13
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FlightQuery",
  "id": null,
  "text": "query FlightQuery(\n  $id: Int!\n  $authToken: String!\n) {\n  singleBooking(id: $id, authToken: $authToken) {\n    __typename\n    isPastBooking\n    ... on BookingOneWay {\n      ...OneWayFlight_booking\n    }\n    ... on BookingReturn {\n      ...ReturnFlight_booking\n    }\n    ... on BookingMulticity {\n      ...MulticityFlight_booking\n    }\n    id\n  }\n}\n\nfragment OneWayFlight_booking on BookingOneWay {\n  ...CityImageContainer_image\n  trip {\n    departure {\n      ...CityImageContainer_departure\n    }\n    arrival {\n      ...CityImageContainer_arrival\n    }\n  }\n}\n\nfragment ReturnFlight_booking on BookingReturn {\n  ...CityImageContainer_image\n  outbound {\n    arrival {\n      ...CityImageContainer_arrival\n    }\n    departure {\n      ...CityImageContainer_departure\n    }\n  }\n}\n\nfragment MulticityFlight_booking on BookingMulticity {\n  ...CityImageContainer_image\n  end {\n    ...CityImageContainer_arrival\n  }\n  start {\n    ...CityImageContainer_departure\n  }\n}\n\nfragment CityImageContainer_image on BookingInterface {\n  id\n  databaseId\n  passengerCount\n  isPastBooking\n  destinationImageUrl(dimensions: _375x165)\n  authToken\n  ...ImageBadges\n}\n\nfragment CityImageContainer_arrival on RouteStop {\n  ...FromToRow_arrival\n  cityId\n  time\n}\n\nfragment CityImageContainer_departure on RouteStop {\n  ...DateAndPassengerCount_departure\n  ...FromToRow_departure\n  time\n}\n\nfragment DateAndPassengerCount_departure on RouteStop {\n  time\n}\n\nfragment FromToRow_departure on RouteStop {\n  airport {\n    city {\n      name\n    }\n    id\n  }\n}\n\nfragment FromToRow_arrival on RouteStop {\n  airport {\n    city {\n      name\n    }\n    id\n  }\n}\n\nfragment ImageBadges on BookingInterface {\n  databaseId\n  ...StatusBadge\n}\n\nfragment StatusBadge on BookingInterface {\n  status\n  isPastBooking\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FlightQuery",
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
          v2,
          v3,
          {
            "kind": "InlineFragment",
            "type": "BookingMulticity",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "MulticityFlight_booking",
                "args": null
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingReturn",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "ReturnFlight_booking",
                "args": null
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingOneWay",
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "OneWayFlight_booking",
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
    "name": "FlightQuery",
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
          v3,
          v4,
          {
            "kind": "InlineFragment",
            "type": "BookingMulticity",
            "selections": [
              v5,
              v6,
              v7,
              v8,
              v9,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "end",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": v12
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "start",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": v13
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingReturn",
            "selections": [
              v5,
              v6,
              v7,
              v8,
              v9,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "outbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": [
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
              v5,
              v6,
              v7,
              v8,
              v9,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "trip",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": [
                  v15,
                  v14
                ]
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
(node/*: any*/).hash = '1cbd74e0b8c6930d36984310a066c02d';
module.exports = node;
