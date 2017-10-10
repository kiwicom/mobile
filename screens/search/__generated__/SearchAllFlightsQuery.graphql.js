/**
 * @flow
 * @relayHash 7cb5c730a6421390d92259d7782bcdb2
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type SearchAllFlightsQueryResponse = {|
  +allFlights: ?{| |};
|};
*/


/*
query SearchAllFlightsQuery(
  $search: FlightsSearchInput!
) {
  allFlights(search: $search) {
    ...SearchResults_flights
  }
}

fragment SearchResults_flights on FlightConnection {
  edges {
    node {
      price {
        amount
        currency
      }
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
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "search",
        "type": "FlightsSearchInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchAllFlightsQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
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
            "kind": "FragmentSpread",
            "name": "SearchResults_flights",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQuery"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "SearchAllFlightsQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "search",
        "type": "FlightsSearchInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "SearchAllFlightsQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
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
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Flight",
                "name": "node",
                "plural": false,
                "selections": [
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
  "text": "query SearchAllFlightsQuery(\n  $search: FlightsSearchInput!\n) {\n  allFlights(search: $search) {\n    ...SearchResults_flights\n  }\n}\n\nfragment SearchResults_flights on FlightConnection {\n  edges {\n    node {\n      price {\n        amount\n        currency\n      }\n      departure {\n        airport {\n          locationId\n        }\n      }\n      arrival {\n        airport {\n          locationId\n        }\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
