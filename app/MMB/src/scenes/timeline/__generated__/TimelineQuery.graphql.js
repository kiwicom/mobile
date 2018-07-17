/**
 * @flow
 * @relayHash d4b9b9775a96e65889ebe01f3b996298
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AirportArrivalTimelineEvent$ref = any;
type ArrivalTimelineEvent$ref = any;
type BoardingTimelineEvent$ref = any;
type BookedFlightTimelineEvent$ref = any;
type CheckinClosingTimelineEvent$ref = any;
type DepartureTimelineEvent$ref = any;
type DownloadBoardingPassTimelineEvent$ref = any;
type DownloadETicketTimelineEvent$ref = any;
type DownloadInvoiceTimelineEvent$ref = any;
type LeaveForAirportTimelineEvent$ref = any;
type NavigateToTerminalTimelineEvent$ref = any;
type NoMoreEditsTimelineEvent$ref = any;
type TimeToCheckinTimelineEvent$ref = any;
type TransportFromAirportTimelineEvent$ref = any;
export type TimelineQueryVariables = {|
  id: string
|};
export type TimelineQueryResponse = {|
  +bookingTimeline: ?{|
    +events: ?$ReadOnlyArray<?{|
      +__typename: string,
      +timestamp: ?any,
      +$fragmentRefs: BookedFlightTimelineEvent$ref & LeaveForAirportTimelineEvent$ref & AirportArrivalTimelineEvent$ref & DownloadInvoiceTimelineEvent$ref & DownloadETicketTimelineEvent$ref & BoardingTimelineEvent$ref & DepartureTimelineEvent$ref & ArrivalTimelineEvent$ref & TransportFromAirportTimelineEvent$ref & DownloadBoardingPassTimelineEvent$ref & NoMoreEditsTimelineEvent$ref & NavigateToTerminalTimelineEvent$ref & TimeToCheckinTimelineEvent$ref & CheckinClosingTimelineEvent$ref,
    |}>
  |}
|};
*/


/*
query TimelineQuery(
  $id: ID!
) {
  bookingTimeline(id: $id) {
    events {
      __typename
      timestamp
      ... on BookedFlightTimelineEvent {
        ...BookedFlightTimelineEvent
      }
      ... on LeaveForAirportTimelineEvent {
        ...LeaveForAirportTimelineEvent
      }
      ... on AirportArrivalTimelineEvent {
        ...AirportArrivalTimelineEvent
      }
      ... on DownloadInvoiceTimelineEvent {
        ...DownloadInvoiceTimelineEvent
      }
      ... on DownloadETicketTimelineEvent {
        ...DownloadETicketTimelineEvent
      }
      ... on BoardingTimelineEvent {
        ...BoardingTimelineEvent
      }
      ... on DepartureTimelineEvent {
        ...DepartureTimelineEvent
      }
      ... on ArrivalTimelineEvent {
        ...ArrivalTimelineEvent
      }
      ... on TransportFromAirportTimelineEvent {
        ...TransportFromAirportTimelineEvent
      }
      ... on DownloadBoardingPassTimelineEvent {
        ...DownloadBoardingPassTimelineEvent
      }
      ... on NoMoreEditsTimelineEvent {
        ...NoMoreEditsTimelineEvent
      }
      ... on NavigateToTerminalTimelineEvent {
        ...NavigateToTerminalTimelineEvent
      }
      ... on TimeToCheckinTimelineEvent {
        ...TimeToCheckinTimelineEvent
      }
      ... on CheckinClosingTimelineEvent {
        ...CheckinClosingTimelineEvent
      }
    }
  }
}

fragment BookedFlightTimelineEvent on BookedFlightTimelineEvent {
  timestamp
  location {
    airport {
      city {
        name
      }
      id
    }
  }
}

fragment LeaveForAirportTimelineEvent on LeaveForAirportTimelineEvent {
  timestamp
}

fragment AirportArrivalTimelineEvent on AirportArrivalTimelineEvent {
  timestamp
  location {
    airport {
      locationId
      name
      id
    }
  }
}

fragment DownloadInvoiceTimelineEvent on DownloadInvoiceTimelineEvent {
  timestamp
  invoiceUrl
  numberPassengers
  legs {
    departure {
      airport {
        city {
          name
        }
        id
      }
    }
    arrival {
      airport {
        city {
          name
        }
        id
      }
    }
    id
  }
}

fragment DownloadETicketTimelineEvent on DownloadETicketTimelineEvent {
  timestamp
  ticketUrl
}

fragment BoardingTimelineEvent on BoardingTimelineEvent {
  timestamp
  terminal
}

fragment DepartureTimelineEvent on DepartureTimelineEvent {
  timestamp
  location {
    airport {
      city {
        name
      }
      id
    }
  }
  duration
  airline {
    code
    name
  }
  flightNumber
}

fragment ArrivalTimelineEvent on ArrivalTimelineEvent {
  timestamp
  location {
    airport {
      locationId
      city {
        name
      }
      id
    }
  }
}

fragment TransportFromAirportTimelineEvent on TransportFromAirportTimelineEvent {
  timestamp
}

fragment DownloadBoardingPassTimelineEvent on DownloadBoardingPassTimelineEvent {
  timestamp
  leg {
    departure {
      airport {
        city {
          name
        }
        id
      }
    }
    arrival {
      airport {
        city {
          name
        }
        id
      }
    }
    boardingPass {
      flightNumber
      boardingPassUrl
    }
    id
  }
}

fragment NoMoreEditsTimelineEvent on NoMoreEditsTimelineEvent {
  timestamp
}

fragment NavigateToTerminalTimelineEvent on NavigateToTerminalTimelineEvent {
  timestamp
}

fragment TimeToCheckinTimelineEvent on TimeToCheckinTimelineEvent {
  timestamp
}

fragment CheckinClosingTimelineEvent on CheckinClosingTimelineEvent {
  timestamp
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
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
  "name": "timestamp",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "city",
  "storageKey": null,
  "args": null,
  "concreteType": "LocationArea",
  "plural": false,
  "selections": [
    v4
  ]
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v7 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "airport",
    "storageKey": null,
    "args": null,
    "concreteType": "Location",
    "plural": false,
    "selections": [
      v5,
      v6
    ]
  }
],
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "location",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v7
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "flightNumber",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "locationId",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "departure",
  "storageKey": null,
  "args": null,
  "concreteType": "RouteStop",
  "plural": false,
  "selections": v7
},
v12 = {
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
  "name": "TimelineQuery",
  "id": null,
  "text": "query TimelineQuery(\n  $id: ID!\n) {\n  bookingTimeline(id: $id) {\n    events {\n      __typename\n      timestamp\n      ... on BookedFlightTimelineEvent {\n        ...BookedFlightTimelineEvent\n      }\n      ... on LeaveForAirportTimelineEvent {\n        ...LeaveForAirportTimelineEvent\n      }\n      ... on AirportArrivalTimelineEvent {\n        ...AirportArrivalTimelineEvent\n      }\n      ... on DownloadInvoiceTimelineEvent {\n        ...DownloadInvoiceTimelineEvent\n      }\n      ... on DownloadETicketTimelineEvent {\n        ...DownloadETicketTimelineEvent\n      }\n      ... on BoardingTimelineEvent {\n        ...BoardingTimelineEvent\n      }\n      ... on DepartureTimelineEvent {\n        ...DepartureTimelineEvent\n      }\n      ... on ArrivalTimelineEvent {\n        ...ArrivalTimelineEvent\n      }\n      ... on TransportFromAirportTimelineEvent {\n        ...TransportFromAirportTimelineEvent\n      }\n      ... on DownloadBoardingPassTimelineEvent {\n        ...DownloadBoardingPassTimelineEvent\n      }\n      ... on NoMoreEditsTimelineEvent {\n        ...NoMoreEditsTimelineEvent\n      }\n      ... on NavigateToTerminalTimelineEvent {\n        ...NavigateToTerminalTimelineEvent\n      }\n      ... on TimeToCheckinTimelineEvent {\n        ...TimeToCheckinTimelineEvent\n      }\n      ... on CheckinClosingTimelineEvent {\n        ...CheckinClosingTimelineEvent\n      }\n    }\n  }\n}\n\nfragment BookedFlightTimelineEvent on BookedFlightTimelineEvent {\n  timestamp\n  location {\n    airport {\n      city {\n        name\n      }\n      id\n    }\n  }\n}\n\nfragment LeaveForAirportTimelineEvent on LeaveForAirportTimelineEvent {\n  timestamp\n}\n\nfragment AirportArrivalTimelineEvent on AirportArrivalTimelineEvent {\n  timestamp\n  location {\n    airport {\n      locationId\n      name\n      id\n    }\n  }\n}\n\nfragment DownloadInvoiceTimelineEvent on DownloadInvoiceTimelineEvent {\n  timestamp\n  invoiceUrl\n  numberPassengers\n  legs {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n    arrival {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment DownloadETicketTimelineEvent on DownloadETicketTimelineEvent {\n  timestamp\n  ticketUrl\n}\n\nfragment BoardingTimelineEvent on BoardingTimelineEvent {\n  timestamp\n  terminal\n}\n\nfragment DepartureTimelineEvent on DepartureTimelineEvent {\n  timestamp\n  location {\n    airport {\n      city {\n        name\n      }\n      id\n    }\n  }\n  duration\n  airline {\n    code\n    name\n  }\n  flightNumber\n}\n\nfragment ArrivalTimelineEvent on ArrivalTimelineEvent {\n  timestamp\n  location {\n    airport {\n      locationId\n      city {\n        name\n      }\n      id\n    }\n  }\n}\n\nfragment TransportFromAirportTimelineEvent on TransportFromAirportTimelineEvent {\n  timestamp\n}\n\nfragment DownloadBoardingPassTimelineEvent on DownloadBoardingPassTimelineEvent {\n  timestamp\n  leg {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n    arrival {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n    boardingPass {\n      flightNumber\n      boardingPassUrl\n    }\n    id\n  }\n}\n\nfragment NoMoreEditsTimelineEvent on NoMoreEditsTimelineEvent {\n  timestamp\n}\n\nfragment NavigateToTerminalTimelineEvent on NavigateToTerminalTimelineEvent {\n  timestamp\n}\n\nfragment TimeToCheckinTimelineEvent on TimeToCheckinTimelineEvent {\n  timestamp\n}\n\nfragment CheckinClosingTimelineEvent on CheckinClosingTimelineEvent {\n  timestamp\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TimelineQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bookingTimeline",
        "storageKey": null,
        "args": v1,
        "concreteType": "BookingTimeline",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "events",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              v2,
              v3,
              {
                "kind": "InlineFragment",
                "type": "DepartureTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "DepartureTimelineEvent",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "ArrivalTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "ArrivalTimelineEvent",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "CheckinClosingTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "CheckinClosingTimelineEvent",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "TransportFromAirportTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "TransportFromAirportTimelineEvent",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "LeaveForAirportTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "LeaveForAirportTimelineEvent",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "DownloadInvoiceTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "DownloadInvoiceTimelineEvent",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "TimeToCheckinTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "TimeToCheckinTimelineEvent",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "NavigateToTerminalTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "NavigateToTerminalTimelineEvent",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "NoMoreEditsTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "NoMoreEditsTimelineEvent",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "DownloadBoardingPassTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "DownloadBoardingPassTimelineEvent",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "DownloadETicketTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "DownloadETicketTimelineEvent",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "AirportArrivalTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "AirportArrivalTimelineEvent",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "BookedFlightTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "BookedFlightTimelineEvent",
                    "args": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "BoardingTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "BoardingTimelineEvent",
                    "args": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TimelineQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "bookingTimeline",
        "storageKey": null,
        "args": v1,
        "concreteType": "BookingTimeline",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "events",
            "storageKey": null,
            "args": null,
            "concreteType": null,
            "plural": true,
            "selections": [
              v2,
              v3,
              {
                "kind": "InlineFragment",
                "type": "DepartureTimelineEvent",
                "selections": [
                  v8,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "duration",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "airline",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Airline",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "code",
                        "args": null,
                        "storageKey": null
                      },
                      v4
                    ]
                  },
                  v9
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "ArrivalTimelineEvent",
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "location",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "airport",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Location",
                        "plural": false,
                        "selections": [
                          v10,
                          v5,
                          v6
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "DownloadInvoiceTimelineEvent",
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "invoiceUrl",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "numberPassengers",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "legs",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Leg",
                    "plural": true,
                    "selections": [
                      v11,
                      v12,
                      v6
                    ]
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "DownloadBoardingPassTimelineEvent",
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "leg",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Leg",
                    "plural": false,
                    "selections": [
                      v11,
                      v12,
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "boardingPass",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "BoardingPass",
                        "plural": false,
                        "selections": [
                          v9,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "boardingPassUrl",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      },
                      v6
                    ]
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "DownloadETicketTimelineEvent",
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "ticketUrl",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "AirportArrivalTimelineEvent",
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "location",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "airport",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Location",
                        "plural": false,
                        "selections": [
                          v10,
                          v4,
                          v6
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "BookedFlightTimelineEvent",
                "selections": [
                  v8
                ]
              },
              {
                "kind": "InlineFragment",
                "type": "BoardingTimelineEvent",
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "terminal",
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
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '61691d6c106ab68b089cec88e000eaae';
module.exports = node;
