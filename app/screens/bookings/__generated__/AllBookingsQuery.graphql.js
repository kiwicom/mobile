/**
 * @flow
 * @relayHash 1109d132a36d751987e65176309cca31
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type AllBookingsQueryResponse = {| |};
*/


/*
query AllBookingsQuery {
  ...AllBookingsList_bookings
}

fragment AllBookingsList_bookings on RootQuery {
  allBookings {
    edges {
      cursor
      node {
        assets {
          ticketUrl
          invoiceUrl
        }
        ...AllBookingsListRow_node
        id
      }
    }
  }
}

fragment AllBookingsListRow_node on Booking {
  assets {
    ticketUrl
    invoiceUrl
  }
  legs {
    id
    airline {
      name
      logoUrl
    }
    departure {
      localTime
      ...RouteStop
    }
    arrival {
      localTime
      ...RouteStop
    }
  }
}

fragment RouteStop on RouteStop {
  airport {
    ...Airport
  }
}

fragment Airport on Location {
  locationId
  city {
    name
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AllBookingsQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "AllBookingsList_bookings",
        "args": null
      }
    ],
    "type": "RootQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "AllBookingsQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "AllBookingsQuery",
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
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Booking",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "BookingAssets",
                    "name": "assets",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "ticketUrl",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "invoiceUrl",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Leg",
                    "name": "legs",
                    "plural": true,
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
                        "concreteType": "Airline",
                        "name": "airline",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "name",
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "logoUrl",
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
                        "name": "departure",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "localTime",
                            "storageKey": null
                          },
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
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "LocationArea",
                                "name": "city",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "name",
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
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "localTime",
                            "storageKey": null
                          },
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
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "LocationArea",
                                "name": "city",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "name",
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
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "id",
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
  "text": "query AllBookingsQuery {\n  ...AllBookingsList_bookings\n}\n\nfragment AllBookingsList_bookings on RootQuery {\n  allBookings {\n    edges {\n      cursor\n      node {\n        assets {\n          ticketUrl\n          invoiceUrl\n        }\n        ...AllBookingsListRow_node\n        id\n      }\n    }\n  }\n}\n\nfragment AllBookingsListRow_node on Booking {\n  assets {\n    ticketUrl\n    invoiceUrl\n  }\n  legs {\n    id\n    airline {\n      name\n      logoUrl\n    }\n    departure {\n      localTime\n      ...RouteStop\n    }\n    arrival {\n      localTime\n      ...RouteStop\n    }\n  }\n}\n\nfragment RouteStop on RouteStop {\n  airport {\n    ...Airport\n  }\n}\n\nfragment Airport on Location {\n  locationId\n  city {\n    name\n  }\n}\n"
};

module.exports = batch;
