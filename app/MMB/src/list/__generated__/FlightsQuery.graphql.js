/**
 * @flow
 * @relayHash bf9de2cc379020773fa09edd041858d5
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
        destinationImageUrl(dimensions: _375x165)
        type
        passengerCount
        oneWay {
          databaseId
          ...OneWayFlight_booking
          id
        }
        return {
          databaseId
          ...ReturnFlight_booking
          id
        }
        multicity {
          databaseId
          ...MulticityFlight_booking
          id
        }
        id
      }
    }
  }
}

fragment OneWayFlight_booking on BookingOneWay {
  databaseId
  status
  trip {
    departure {
      time
      airport {
        city {
          name
        }
      }
    }
    arrival {
      airport {
        city {
          name
        }
      }
    }
  }
}

fragment ReturnFlight_booking on BookingReturn {
  status
  databaseId
  outbound {
    arrival {
      airport {
        city {
          name
        }
      }
    }
    departure {
      time
      airport {
        city {
          name
        }
      }
    }
  }
}

fragment MulticityFlight_booking on BookingMulticity {
  status
  databaseId
  end {
    airport {
      city {
        name
      }
    }
  }
  start {
    time
    airport {
      city {
        name
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "databaseId",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "status",
  "args": null,
  "storageKey": null
},
v2 = {
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
v3 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "time",
    "args": null,
    "storageKey": null
  },
  v2
],
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v3
},
v5 = [
  v2
],
v6 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "arrival",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v5
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "FlightsQuery",
  "id": null,
  "text": "query FlightsQuery {\n  ...FlightList\n}\n\nfragment FlightList on RootQuery {\n  allBookings {\n    edges {\n      node {\n        destinationImageUrl(dimensions: _375x165)\n        type\n        passengerCount\n        oneWay {\n          databaseId\n          ...OneWayFlight_booking\n          id\n        }\n        return {\n          databaseId\n          ...ReturnFlight_booking\n          id\n        }\n        multicity {\n          databaseId\n          ...MulticityFlight_booking\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment OneWayFlight_booking on BookingOneWay {\n  databaseId\n  status\n  trip {\n    departure {\n      time\n      airport {\n        city {\n          name\n        }\n      }\n    }\n    arrival {\n      airport {\n        city {\n          name\n        }\n      }\n    }\n  }\n}\n\nfragment ReturnFlight_booking on BookingReturn {\n  status\n  databaseId\n  outbound {\n    arrival {\n      airport {\n        city {\n          name\n        }\n      }\n    }\n    departure {\n      time\n      airport {\n        city {\n          name\n        }\n      }\n    }\n  }\n}\n\nfragment MulticityFlight_booking on BookingMulticity {\n  status\n  databaseId\n  end {\n    airport {\n      city {\n        name\n      }\n    }\n  }\n  start {\n    time\n    airport {\n      city {\n        name\n      }\n    }\n  }\n}\n",
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
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "passengerCount",
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
                      v0,
                      v1,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "trip",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Trip",
                        "plural": false,
                        "selections": [
                          v4,
                          v6
                        ]
                      },
                      v7
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
                      v0,
                      v1,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "outbound",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Trip",
                        "plural": false,
                        "selections": [
                          v6,
                          v4
                        ]
                      },
                      v7
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
                      v0,
                      v1,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "end",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RouteStop",
                        "plural": false,
                        "selections": v5
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "start",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RouteStop",
                        "plural": false,
                        "selections": v3
                      },
                      v7
                    ]
                  },
                  v7
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
