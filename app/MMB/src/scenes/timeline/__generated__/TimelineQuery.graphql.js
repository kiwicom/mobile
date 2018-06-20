/**
 * @flow
 * @relayHash 3df0397d6f46f39ff8c7224bd950a04b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AirportArrivalTimelineEvent$ref = any;
type BookedFlightTimelineEvent$ref = any;
type LeaveForAirportTimelineEvent$ref = any;
export type TimelineQueryVariables = {|
  id: string
|};
export type TimelineQueryResponse = {|
  +bookingTimeline: ?{|
    +events: ?$ReadOnlyArray<?{|
      +__typename: string,
      +timestamp: ?any,
      +$fragmentRefs: BookedFlightTimelineEvent$ref & LeaveForAirportTimelineEvent$ref & AirportArrivalTimelineEvent$ref,
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
    }
  }
}

fragment BookedFlightTimelineEvent on BookedFlightTimelineEvent {
  timestamp
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
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TimelineQuery",
  "id": null,
  "text": "query TimelineQuery(\n  $id: ID!\n) {\n  bookingTimeline(id: $id) {\n    events {\n      __typename\n      timestamp\n      ... on BookedFlightTimelineEvent {\n        ...BookedFlightTimelineEvent\n      }\n      ... on LeaveForAirportTimelineEvent {\n        ...LeaveForAirportTimelineEvent\n      }\n      ... on AirportArrivalTimelineEvent {\n        ...AirportArrivalTimelineEvent\n      }\n    }\n  }\n}\n\nfragment BookedFlightTimelineEvent on BookedFlightTimelineEvent {\n  timestamp\n}\n\nfragment LeaveForAirportTimelineEvent on LeaveForAirportTimelineEvent {\n  timestamp\n}\n\nfragment AirportArrivalTimelineEvent on AirportArrivalTimelineEvent {\n  timestamp\n  location {\n    airport {\n      name\n      id\n    }\n  }\n}\n",
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
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "name",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "id",
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
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '68df0368b473e820e3f6203140b515e9';
module.exports = node;
