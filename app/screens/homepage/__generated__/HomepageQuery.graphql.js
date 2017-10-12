/**
 * @flow
 * @relayHash 93f241d3c12a36a042ab4337659f1021
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type HomepageQueryResponse = {| |};
*/


/*
query HomepageQuery {
  ...BookingsListContainer_bookings
}

fragment BookingsListContainer_bookings on RootQuery {
  allBookings {
    edges {
      node {
        id
        departure {
          airport {
            locationId
          }
        }
        arrival {
          airport {
            locationId
          }
        }
      }
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomepageQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "BookingsListContainer_bookings",
        "args": null
      }
    ],
    "type": "RootQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "HomepageQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "HomepageQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "BookingConnection",
        "name": "allBookings",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "BookingEdge",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Booking",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "name": "departure",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Location",
                        "name": "airport",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "locationId",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "RouteStop",
                    "name": "arrival",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Location",
                        "name": "airport",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "locationId",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query HomepageQuery {\n  ...BookingsListContainer_bookings\n}\n\nfragment BookingsListContainer_bookings on RootQuery {\n  allBookings {\n    edges {\n      node {\n        id\n        departure {\n          airport {\n            locationId\n          }\n        }\n        arrival {\n          airport {\n            locationId\n          }\n        }\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
