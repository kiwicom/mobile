/**
 * @flow
 * @relayHash f8763ea2ca8a6b457b31f73bb33d04cf
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FlightList$ref = any;
export type FlightsQueryVariables = {||};
export type FlightsQueryResponse = {|
  +future: ?{|
    +$fragmentRefs: FlightList$ref
  |},
  +past: ?{|
    +$fragmentRefs: FlightList$ref
  |},
|};
*/


/*
query FlightsQuery {
  future: allBookings(only: FUTURE) {
    ...FlightList
  }
  past: allBookings(only: PAST) {
    ...FlightList
  }
}

fragment FlightList on BookingConnection {
  edges {
    node {
      id
      type
      oneWay {
        ...OneWayFlight_booking
        id
      }
      return {
        ...ReturnFlight_booking
        id
      }
      multicity {
        ...MulticityFlight_booking
        id
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
  databaseId
  status
  passengerCount
  destinationImageUrl(dimensions: _375x165)
}

fragment CityImage_arrival on RouteStop {
  ...FromToRow_arrival
}

fragment CityImage_departure on RouteStop {
  ...DateAndPassengerCount_departure
  ...FromToRow_departure
}

fragment DateAndPassengerCount_departure on RouteStop {
  time
}

fragment FromToRow_departure on RouteStop {
  airport {
    city {
      name
    }
  }
}

fragment FromToRow_arrival on RouteStop {
  airport {
    city {
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "only",
    "value": "FUTURE",
    "type": "AllBookingsOnlyEnum"
  }
],
v1 = [
  {
    "kind": "FragmentSpread",
    "name": "FlightList",
    "args": null
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "only",
    "value": "PAST",
    "type": "AllBookingsOnlyEnum"
  }
],
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
  "name": "databaseId",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
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
    }
  ]
},
v9 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "time",
    "args": null,
    "storageKey": null
  },
  v8
],
v10 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v9
},
v11 = [
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
  "selections": v11
},
v13 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "BookingEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Booking",
        "plural": false,
        "selections": [
          v3,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "type",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "oneWay",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingOneWay",
            "plural": false,
            "selections": [
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
                  v10,
                  v12
                ]
              },
              v3
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "return",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingReturn",
            "plural": false,
            "selections": [
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
                  v10
                ]
              },
              v3
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "multicity",
            "storageKey": null,
            "args": null,
            "concreteType": "BookingMulticity",
            "plural": false,
            "selections": [
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
                "selections": v9
              },
              v3
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
  "text": "query FlightsQuery {\n  future: allBookings(only: FUTURE) {\n    ...FlightList\n  }\n  past: allBookings(only: PAST) {\n    ...FlightList\n  }\n}\n\nfragment FlightList on BookingConnection {\n  edges {\n    node {\n      id\n      type\n      oneWay {\n        ...OneWayFlight_booking\n        id\n      }\n      return {\n        ...ReturnFlight_booking\n        id\n      }\n      multicity {\n        ...MulticityFlight_booking\n        id\n      }\n    }\n  }\n}\n\nfragment OneWayFlight_booking on BookingOneWay {\n  ...CityImage_image\n  trip {\n    departure {\n      ...CityImage_departure\n    }\n    arrival {\n      ...CityImage_arrival\n    }\n  }\n}\n\nfragment ReturnFlight_booking on BookingReturn {\n  ...CityImage_image\n  outbound {\n    arrival {\n      ...CityImage_arrival\n    }\n    departure {\n      ...CityImage_departure\n    }\n  }\n}\n\nfragment MulticityFlight_booking on BookingMulticity {\n  ...CityImage_image\n  end {\n    ...CityImage_arrival\n  }\n  start {\n    ...CityImage_departure\n  }\n}\n\nfragment CityImage_image on BookingInterface {\n  databaseId\n  status\n  passengerCount\n  destinationImageUrl(dimensions: _375x165)\n}\n\nfragment CityImage_arrival on RouteStop {\n  ...FromToRow_arrival\n}\n\nfragment CityImage_departure on RouteStop {\n  ...DateAndPassengerCount_departure\n  ...FromToRow_departure\n}\n\nfragment DateAndPassengerCount_departure on RouteStop {\n  time\n}\n\nfragment FromToRow_departure on RouteStop {\n  airport {\n    city {\n      name\n    }\n  }\n}\n\nfragment FromToRow_arrival on RouteStop {\n  airport {\n    city {\n      name\n    }\n  }\n}\n",
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
        "name": "allBookings",
        "storageKey": "allBookings(only:\"FUTURE\")",
        "args": v0,
        "concreteType": "BookingConnection",
        "plural": false,
        "selections": v1
      },
      {
        "kind": "LinkedField",
        "alias": "past",
        "name": "allBookings",
        "storageKey": "allBookings(only:\"PAST\")",
        "args": v2,
        "concreteType": "BookingConnection",
        "plural": false,
        "selections": v1
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
        "name": "allBookings",
        "storageKey": "allBookings(only:\"FUTURE\")",
        "args": v0,
        "concreteType": "BookingConnection",
        "plural": false,
        "selections": v13
      },
      {
        "kind": "LinkedField",
        "alias": "past",
        "name": "allBookings",
        "storageKey": "allBookings(only:\"PAST\")",
        "args": v2,
        "concreteType": "BookingConnection",
        "plural": false,
        "selections": v13
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e95bdec4b105ef6afa4e43d6a4d36e0e';
module.exports = node;
