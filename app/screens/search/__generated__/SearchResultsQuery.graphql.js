/**
 * @flow
 * @relayHash 2022e83d7c0e65e2b455d8f0cc69ae21
 */

/* eslint-disable */

import type { ConcreteBatch } from 'relay-runtime';
export type SearchResultsQueryResponse = {| |};

/*
query SearchResultsQuery(
  $search: FlightsSearchInput!
  $count: Int!
  $after: String
) {
  ...SearchResults_flights
}

fragment SearchResults_flights on RootQuery {
  allFlights(search: $search, first: $count, after: $after) {
    edges {
      cursor
      node {
        __typename
        ...SearchResultRow_node
        id
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment SearchResultRow_node on Flight {
  duration
  price {
    ...Price
  }
  departure {
    localTime
    ...RouteStop
  }
  arrival {
    localTime
    ...RouteStop
  }
  legs {
    id
    airline {
      ...AirlineLogo
    }
  }
}

fragment Price on Price {
  amount
  currency
}

fragment RouteStop on RouteStop {
  airport {
    ...Airport
  }
}

fragment AirlineLogo on Airline {
  logoUrl
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
        "name": "search",
        "type": "FlightsSearchInput!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "after",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchResultsQuery",
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "SearchResults_flights",
        "args": null
      }
    ],
    "type": "RootQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "SearchResultsQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "search",
        "type": "FlightsSearchInput!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "count",
        "type": "Int!",
        "defaultValue": null
      },
      {
        "kind": "LocalArgument",
        "name": "after",
        "type": "String",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "SearchResultsQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "search",
            "variableName": "search",
            "type": "FlightsSearchInput!"
          }
        ],
        "concreteType": "FlightConnection",
        "name": "allFlights",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "FlightEdge",
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
                "concreteType": "Flight",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "duration",
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Price",
                    "name": "price",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "amount",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "currency",
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
                            "name": "logoUrl",
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
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "endCursor",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "after",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
            "type": "Int"
          },
          {
            "kind": "Variable",
            "name": "search",
            "variableName": "search",
            "type": "FlightsSearchInput!"
          }
        ],
        "handle": "connection",
        "name": "allFlights",
        "key": "SearchResultsContainer_allFlights",
        "filters": [
          "search"
        ]
      }
    ]
  },
  "text": "query SearchResultsQuery(\n  $search: FlightsSearchInput!\n  $count: Int!\n  $after: String\n) {\n  ...SearchResults_flights\n}\n\nfragment SearchResults_flights on RootQuery {\n  allFlights(search: $search, first: $count, after: $after) {\n    edges {\n      cursor\n      node {\n        __typename\n        ...SearchResultRow_node\n        id\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment SearchResultRow_node on Flight {\n  duration\n  price {\n    ...Price\n  }\n  departure {\n    localTime\n    ...RouteStop\n  }\n  arrival {\n    localTime\n    ...RouteStop\n  }\n  legs {\n    id\n    airline {\n      ...AirlineLogo\n    }\n  }\n}\n\nfragment Price on Price {\n  amount\n  currency\n}\n\nfragment RouteStop on RouteStop {\n  airport {\n    ...Airport\n  }\n}\n\nfragment AirlineLogo on Airline {\n  logoUrl\n}\n\nfragment Airport on Location {\n  locationId\n  city {\n    name\n  }\n}\n"
};

module.exports = node;
