/**
 * @flow
 * @relayHash 68d81c7f18408e29d969f8d43e9930ee
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AirportArrivalTimelineEvent$ref = any;
type BookedFlightTimelineEvent$ref = any;
type DownloadInvoiceTimelineEvent$ref = any;
type LeaveForAirportTimelineEvent$ref = any;
export type TimelineQueryVariables = {|
  id: string
|};
export type TimelineQueryResponse = {|
  +bookingTimeline: ?{|
    +events: ?$ReadOnlyArray<?{|
      +__typename: string,
      +timestamp: ?any,
      +$fragmentRefs: BookedFlightTimelineEvent$ref & LeaveForAirportTimelineEvent$ref & AirportArrivalTimelineEvent$ref & DownloadInvoiceTimelineEvent$ref,
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
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v6 = [
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
          v4
        ]
      },
      v5
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TimelineQuery",
  "id": null,
  "text": "query TimelineQuery(\n  $id: ID!\n) {\n  bookingTimeline(id: $id) {\n    events {\n      __typename\n      timestamp\n      ... on BookedFlightTimelineEvent {\n        ...BookedFlightTimelineEvent\n      }\n      ... on LeaveForAirportTimelineEvent {\n        ...LeaveForAirportTimelineEvent\n      }\n      ... on AirportArrivalTimelineEvent {\n        ...AirportArrivalTimelineEvent\n      }\n      ... on DownloadInvoiceTimelineEvent {\n        ...DownloadInvoiceTimelineEvent\n      }\n    }\n  }\n}\n\nfragment BookedFlightTimelineEvent on BookedFlightTimelineEvent {\n  timestamp\n  location {\n    airport {\n      city {\n        name\n      }\n      id\n    }\n  }\n}\n\nfragment LeaveForAirportTimelineEvent on LeaveForAirportTimelineEvent {\n  timestamp\n}\n\nfragment AirportArrivalTimelineEvent on AirportArrivalTimelineEvent {\n  timestamp\n  location {\n    airport {\n      name\n      id\n    }\n  }\n}\n\nfragment DownloadInvoiceTimelineEvent on DownloadInvoiceTimelineEvent {\n  timestamp\n  invoiceUrl\n  numberPassengers\n  legs {\n    departure {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n    arrival {\n      airport {\n        city {\n          name\n        }\n        id\n      }\n    }\n    id\n  }\n}\n",
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
                "type": "BookedFlightTimelineEvent",
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "BookedFlightTimelineEvent",
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
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "departure",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RouteStop",
                        "plural": false,
                        "selections": v6
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "arrival",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "RouteStop",
                        "plural": false,
                        "selections": v6
                      },
                      v5
                    ]
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
                          v4,
                          v5
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
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "location",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "plural": false,
                    "selections": v6
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
(node/*: any*/).hash = 'e3a12768b3eceb23d38c4bbaf24fc881';
module.exports = node;
