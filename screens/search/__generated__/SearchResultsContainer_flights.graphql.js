/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type SearchResultsContainer_flights = {|
  +allFlights: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +cursor: string;
      +node: ?{|
        +price: ?{|
          +amount: ?number;
          +currency: ?string;
        |};
        +departure: ?{|
          +airport: ?{|
            +locationId: ?string;
          |};
        |};
        +arrival: ?{|
          +airport: ?{|
            +locationId: ?string;
          |};
        |};
      |};
    |}>;
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "search",
      "type": "FlightsSearchInput!"
    },
    {
      "kind": "RootArgument",
      "name": "count",
      "type": "Int"
    },
    {
      "kind": "RootArgument",
      "name": "after",
      "type": "String"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "after",
        "direction": "forward",
        "path": [
          "allFlights"
        ]
      }
    ]
  },
  "name": "SearchResultsContainer_flights",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "allFlights",
      "args": [
        {
          "kind": "Variable",
          "name": "search",
          "variableName": "search",
          "type": "FlightsSearchInput!"
        }
      ],
      "concreteType": "FlightConnection",
      "name": "__SearchResultsContainer_allFlights_connection",
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
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "args": null,
                  "name": "__typename",
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
    }
  ],
  "type": "RootQuery"
};

module.exports = fragment;
