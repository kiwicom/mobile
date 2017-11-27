/**
 * @flow
 * @relayHash 040308e11abadf1ca246c97b174fd92f
 */

/* eslint-disable */

import type { ConcreteBatch } from 'relay-runtime';
export type SingleBookingRendererQueryResponse = {| |};

/*
query SingleBookingRendererQuery(
  $bid: ID!
) {
  ...SingleBooking_1NggX5
}

fragment SingleBooking_1NggX5 on RootQuery {
  booking(id: $bid) {
    id
    status
    ...OverviewRow_node
    legs {
      id
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
}

fragment OverviewRow_node on Booking {
  departure {
    localTime
    ...RouteStop
  }
  arrival {
    localTime
    ...RouteStop
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

const node: ConcreteBatch = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "bid",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SingleBookingRendererQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "SingleBooking",
        "args": [
          {
            "kind": "Variable",
            "name": "bid",
            "variableName": "bid",
            "type": null
          }
        ]
      }
    ],
    "type": "RootQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "SingleBookingRendererQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "bid",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "SingleBookingRendererQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "bid",
            "type": "ID!"
          }
        ],
        "concreteType": "Booking",
        "name": "booking",
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
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "status",
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query SingleBookingRendererQuery(\n  $bid: ID!\n) {\n  ...SingleBooking_1NggX5\n}\n\nfragment SingleBooking_1NggX5 on RootQuery {\n  booking(id: $bid) {\n    id\n    status\n    ...OverviewRow_node\n    legs {\n      id\n      departure {\n        localTime\n        ...RouteStop\n      }\n      arrival {\n        localTime\n        ...RouteStop\n      }\n    }\n  }\n}\n\nfragment OverviewRow_node on Booking {\n  departure {\n    localTime\n    ...RouteStop\n  }\n  arrival {\n    localTime\n    ...RouteStop\n  }\n}\n\nfragment RouteStop on RouteStop {\n  airport {\n    ...Airport\n  }\n}\n\nfragment Airport on Location {\n  locationId\n  city {\n    name\n  }\n}\n"
};

module.exports = node;
