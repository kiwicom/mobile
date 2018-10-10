/**
 * @flow
 * @relayHash 230f77209e729a19c9c413f179563661
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FlightListContainer_future$ref = any;
type FlightListContainer_past$ref = any;
export type FlightsQueryVariables = {||};
export type FlightsQueryResponse = {|
  +future: ?{|
    +$fragmentRefs: FlightListContainer_future$ref
  |},
  +past: ?{|
    +$fragmentRefs: FlightListContainer_past$ref
  |},
|};
export type FlightsQuery = {|
  variables: FlightsQueryVariables,
  response: FlightsQueryResponse,
|};
*/


/*
query FlightsQuery {
  future: customerBookings(only: FUTURE) {
    ...FlightListContainer_future
  }
  past: customerBookings(only: PAST, order: DESC) {
    ...FlightListContainer_past
  }
}

fragment FlightListContainer_future on BookingInterfaceConnection {
  ...FlightList
}

fragment FlightListContainer_past on BookingInterfaceConnection {
  ...FlightList
}

fragment FlightList on BookingInterfaceConnection {
  edges {
    node {
      id
      __typename
      ... on BookingOneWay {
        ...OneWayFlight_booking
      }
      ... on BookingReturn {
        ...ReturnFlight_booking
      }
      ... on BookingMulticity {
        ...MulticityFlight_booking
      }
    }
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
    "kind": "Literal",
    "name": "only",
    "value": "FUTURE",
    "type": "CustomerBookingsOnlyEnum"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "only",
    "value": "PAST",
    "type": "CustomerBookingsOnlyEnum"
  },
  {
    "kind": "Literal",
    "name": "order",
    "value": "DESC",
    "type": "CustomerBookingsOrderEnum"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "databaseId",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "passengerCount",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isPastBooking",
  "args": null,
  "storageKey": null
},
v6 = {
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
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "authToken",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v9 = {
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
    v2
  ]
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "time",
  "args": null,
  "storageKey": null
},
v11 = [
  v9,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "cityId",
    "args": null,
    "storageKey": null
  },
  v10
],
v12 = [
  v10,
  v9
],
v13 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "arrival",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v11
},
v14 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v12
},
v15 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "BookingInterfaceEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "BookingMulticity",
            "selections": [
              v3,
              v4,
              v5,
              v6,
              v7,
              v8,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "end",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": v11
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "start",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": v12
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingReturn",
            "selections": [
              v3,
              v4,
              v5,
              v6,
              v7,
              v8,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "outbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": [
                  v13,
                  v14
                ]
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingOneWay",
            "selections": [
              v3,
              v4,
              v5,
              v6,
              v7,
              v8,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "trip",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": [
                  v14,
                  v13
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FlightsQuery",
  "id": null,
  "text": "query FlightsQuery {\n  future: customerBookings(only: FUTURE) {\n    ...FlightListContainer_future\n  }\n  past: customerBookings(only: PAST, order: DESC) {\n    ...FlightListContainer_past\n  }\n}\n\nfragment FlightListContainer_future on BookingInterfaceConnection {\n  ...FlightList\n}\n\nfragment FlightListContainer_past on BookingInterfaceConnection {\n  ...FlightList\n}\n\nfragment FlightList on BookingInterfaceConnection {\n  edges {\n    node {\n      id\n      __typename\n      ... on BookingOneWay {\n        ...OneWayFlight_booking\n      }\n      ... on BookingReturn {\n        ...ReturnFlight_booking\n      }\n      ... on BookingMulticity {\n        ...MulticityFlight_booking\n      }\n    }\n  }\n}\n\nfragment OneWayFlight_booking on BookingOneWay {\n  ...CityImageContainer_image\n  trip {\n    departure {\n      ...CityImageContainer_departure\n    }\n    arrival {\n      ...CityImageContainer_arrival\n    }\n  }\n}\n\nfragment ReturnFlight_booking on BookingReturn {\n  ...CityImageContainer_image\n  outbound {\n    arrival {\n      ...CityImageContainer_arrival\n    }\n    departure {\n      ...CityImageContainer_departure\n    }\n  }\n}\n\nfragment MulticityFlight_booking on BookingMulticity {\n  ...CityImageContainer_image\n  end {\n    ...CityImageContainer_arrival\n  }\n  start {\n    ...CityImageContainer_departure\n  }\n}\n\nfragment CityImageContainer_image on BookingInterface {\n  id\n  databaseId\n  passengerCount\n  isPastBooking\n  destinationImageUrl(dimensions: _375x165)\n  authToken\n  ...ImageBadges\n}\n\nfragment CityImageContainer_arrival on RouteStop {\n  ...FromToRow_arrival\n  cityId\n  time\n}\n\nfragment CityImageContainer_departure on RouteStop {\n  ...DateAndPassengerCount_departure\n  ...FromToRow_departure\n  time\n}\n\nfragment DateAndPassengerCount_departure on RouteStop {\n  time\n}\n\nfragment FromToRow_departure on RouteStop {\n  airport {\n    city {\n      name\n    }\n    id\n  }\n}\n\nfragment FromToRow_arrival on RouteStop {\n  airport {\n    city {\n      name\n    }\n    id\n  }\n}\n\nfragment ImageBadges on BookingInterface {\n  databaseId\n  ...StatusBadge\n}\n\nfragment StatusBadge on BookingInterface {\n  status\n  isPastBooking\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FlightsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "future",
        "name": "customerBookings",
        "storageKey": "customerBookings(only:\"FUTURE\")",
        "args": v0,
        "concreteType": "BookingInterfaceConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "FlightListContainer_future",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": "past",
        "name": "customerBookings",
        "storageKey": "customerBookings(only:\"PAST\",order:\"DESC\")",
        "args": v1,
        "concreteType": "BookingInterfaceConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "FlightListContainer_past",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FlightsQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "future",
        "name": "customerBookings",
        "storageKey": "customerBookings(only:\"FUTURE\")",
        "args": v0,
        "concreteType": "BookingInterfaceConnection",
        "plural": false,
        "selections": v15
      },
      {
        "kind": "LinkedField",
        "alias": "past",
        "name": "customerBookings",
        "storageKey": "customerBookings(only:\"PAST\",order:\"DESC\")",
        "args": v1,
        "concreteType": "BookingInterfaceConnection",
        "plural": false,
        "selections": v15
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '44867a8d39d0059c9b701039dfcb3db7';
module.exports = node;
