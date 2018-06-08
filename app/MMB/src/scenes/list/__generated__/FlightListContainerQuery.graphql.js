/**
 * @flow
 * @relayHash 087f925187f7558ebe529d81e0da7146
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FlightListContainer_future$ref = any;
type FlightListContainer_past$ref = any;
export type FlightListContainerQueryVariables = {||};
export type FlightListContainerQueryResponse = {|
  +future: ?{|
    +$fragmentRefs: FlightListContainer_future$ref
  |},
  +past: ?{|
    +$fragmentRefs: FlightListContainer_past$ref
  |},
|};
*/


/*
query FlightListContainerQuery {
  future: customerBookings(only: FUTURE) {
    ...FlightListContainer_future
  }
  past: customerBookings(only: PAST) {
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
  ...CityImage_image
  trip {
    departure {
      ...CityImage_departure
    }
    arrival {
      ...CityImage_arrival
    }
  }
}

fragment ReturnFlight_booking on BookingReturn {
  ...CityImage_image
  outbound {
    arrival {
      ...CityImage_arrival
    }
    departure {
      ...CityImage_departure
    }
  }
}

fragment MulticityFlight_booking on BookingMulticity {
  ...CityImage_image
  end {
    ...CityImage_arrival
  }
  start {
    ...CityImage_departure
  }
}

fragment CityImage_image on BookingInterface {
  id
  passengerCount
  isPastBooking
  destinationImageUrl(dimensions: _375x165)
  ...ImageBadges
}

fragment CityImage_arrival on RouteStop {
  ...FromToRow_arrival
  cityId
  time
}

fragment CityImage_departure on RouteStop {
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
  status
  databaseId
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
  "name": "passengerCount",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isPastBooking",
  "args": null,
  "storageKey": null
},
v5 = {
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
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "databaseId",
  "args": null,
  "storageKey": null
},
v8 = {
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
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "time",
  "args": null,
  "storageKey": null
},
v10 = [
  v8,
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "cityId",
    "args": null,
    "storageKey": null
  },
  v9
],
v11 = [
  v9,
  v8
],
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "arrival",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v10
},
v13 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v11
},
v14 = [
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
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "end",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": v10
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "start",
                "storageKey": null,
                "args": null,
                "concreteType": "RouteStop",
                "plural": false,
                "selections": v11
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
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "outbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": [
                  v12,
                  v13
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
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "trip",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": [
                  v13,
                  v12
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
  "name": "FlightListContainerQuery",
  "id": null,
  "text": "query FlightListContainerQuery {\n  future: customerBookings(only: FUTURE) {\n    ...FlightListContainer_future\n  }\n  past: customerBookings(only: PAST) {\n    ...FlightListContainer_past\n  }\n}\n\nfragment FlightListContainer_future on BookingInterfaceConnection {\n  ...FlightList\n}\n\nfragment FlightListContainer_past on BookingInterfaceConnection {\n  ...FlightList\n}\n\nfragment FlightList on BookingInterfaceConnection {\n  edges {\n    node {\n      id\n      __typename\n      ... on BookingOneWay {\n        ...OneWayFlight_booking\n      }\n      ... on BookingReturn {\n        ...ReturnFlight_booking\n      }\n      ... on BookingMulticity {\n        ...MulticityFlight_booking\n      }\n    }\n  }\n}\n\nfragment OneWayFlight_booking on BookingOneWay {\n  ...CityImage_image\n  trip {\n    departure {\n      ...CityImage_departure\n    }\n    arrival {\n      ...CityImage_arrival\n    }\n  }\n}\n\nfragment ReturnFlight_booking on BookingReturn {\n  ...CityImage_image\n  outbound {\n    arrival {\n      ...CityImage_arrival\n    }\n    departure {\n      ...CityImage_departure\n    }\n  }\n}\n\nfragment MulticityFlight_booking on BookingMulticity {\n  ...CityImage_image\n  end {\n    ...CityImage_arrival\n  }\n  start {\n    ...CityImage_departure\n  }\n}\n\nfragment CityImage_image on BookingInterface {\n  id\n  passengerCount\n  isPastBooking\n  destinationImageUrl(dimensions: _375x165)\n  ...ImageBadges\n}\n\nfragment CityImage_arrival on RouteStop {\n  ...FromToRow_arrival\n  cityId\n  time\n}\n\nfragment CityImage_departure on RouteStop {\n  ...DateAndPassengerCount_departure\n  ...FromToRow_departure\n  time\n}\n\nfragment DateAndPassengerCount_departure on RouteStop {\n  time\n}\n\nfragment FromToRow_departure on RouteStop {\n  airport {\n    city {\n      name\n    }\n    id\n  }\n}\n\nfragment FromToRow_arrival on RouteStop {\n  airport {\n    city {\n      name\n    }\n    id\n  }\n}\n\nfragment ImageBadges on BookingInterface {\n  status\n  databaseId\n  isPastBooking\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FlightListContainerQuery",
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
        "storageKey": "customerBookings(only:\"PAST\")",
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
    "name": "FlightListContainerQuery",
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
        "selections": v14
      },
      {
        "kind": "LinkedField",
        "alias": "past",
        "name": "customerBookings",
        "storageKey": "customerBookings(only:\"PAST\")",
        "args": v1,
        "concreteType": "BookingInterfaceConnection",
        "plural": false,
        "selections": v14
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '427e176c2da31c605a5a65c4ef44caa4';
module.exports = node;
