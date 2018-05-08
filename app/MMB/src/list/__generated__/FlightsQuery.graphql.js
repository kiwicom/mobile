/**
 * @flow
 * @relayHash a915145adad1c2172b56677d388e50b7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FlightList$ref = any;
export type FlightsQueryVariables = {||};
export type FlightsQueryResponse = {|
  +$fragmentRefs: FlightList$ref
|};
*/


/*
query FlightsQuery {
  ...FlightList
}

fragment FlightList on RootQuery {
  allBookings {
    edges {
      node {
        id
        destinationImageUrl(dimensions: _375x165)
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
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "databaseId",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
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
v5 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "time",
    "args": null,
    "storageKey": null
  },
  v4
],
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v5
},
v7 = [
  v4
],
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "arrival",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v7
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FlightsQuery",
  "id": null,
  "text": "query FlightsQuery {\n  ...FlightList\n}\n\nfragment FlightList on RootQuery {\n  allBookings {\n    edges {\n      node {\n        id\n        destinationImageUrl(dimensions: _375x165)\n        type\n        oneWay {\n          ...OneWayFlight_booking\n          id\n        }\n        return {\n          ...ReturnFlight_booking\n          id\n        }\n        multicity {\n          ...MulticityFlight_booking\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment OneWayFlight_booking on BookingOneWay {\n  ...CityImage_image\n  trip {\n    departure {\n      ...CityImage_departure\n    }\n    arrival {\n      ...CityImage_arrival\n    }\n  }\n}\n\nfragment ReturnFlight_booking on BookingReturn {\n  ...CityImage_image\n  outbound {\n    arrival {\n      ...CityImage_arrival\n    }\n    departure {\n      ...CityImage_departure\n    }\n  }\n}\n\nfragment MulticityFlight_booking on BookingMulticity {\n  ...CityImage_image\n  end {\n    ...CityImage_arrival\n  }\n  start {\n    ...CityImage_departure\n  }\n}\n\nfragment CityImage_image on BookingInterface {\n  databaseId\n  status\n  passengerCount\n}\n\nfragment CityImage_arrival on RouteStop {\n  ...FromToRow_arrival\n}\n\nfragment CityImage_departure on RouteStop {\n  ...DateAndPassengerCount_departure\n  ...FromToRow_departure\n}\n\nfragment DateAndPassengerCount_departure on RouteStop {\n  time\n}\n\nfragment FromToRow_departure on RouteStop {\n  airport {\n    city {\n      name\n    }\n  }\n}\n\nfragment FromToRow_arrival on RouteStop {\n  airport {\n    city {\n      name\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "FlightsQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "FlightList",
        "args": null
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
        "alias": null,
        "name": "allBookings",
        "storageKey": null,
        "args": null,
        "concreteType": "BookingConnection",
        "plural": false,
        "selections": [
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
                  v0,
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
                      v1,
                      v2,
                      v3,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "trip",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Trip",
                        "plural": false,
                        "selections": [
                          v6,
                          v8
                        ]
                      },
                      v0
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
                      v1,
                      v2,
                      v3,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "outbound",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Trip",
                        "plural": false,
                        "selections": [
                          v8,
                          v6
                        ]
                      },
                      v0
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
                      v1,
                      v2,
                      v3,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "end",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RouteStop",
                        "plural": false,
                        "selections": v7
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "start",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RouteStop",
                        "plural": false,
                        "selections": v5
                      },
                      v0
                    ]
                  }
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
(node/*: any*/).hash = '086ebc6332569acd98758cee4369902a';
module.exports = node;
