/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type AllHotelsSearchList_data = {|
  +allAvailableHotels: ?{|
    +pageInfo: {|
      +hasNextPage: boolean;
      +hasPreviousPage: boolean;
      +startCursor: ?string;
      +endCursor: ?string;
    |};
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string;
      |};
    |}>;
    +stats: ?{|
      +priceMax: ?number;
      +priceMin: ?number;
    |};
  |};
|};


const node: ConcreteFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "search",
      "type": "HotelsSearchInput!"
    },
    {
      "kind": "RootArgument",
      "name": "filter",
      "type": "HotelsFilterInput"
    },
    {
      "kind": "RootArgument",
      "name": "options",
      "type": "AvailableHotelOptionsInput"
    },
    {
      "kind": "RootArgument",
      "name": "first",
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
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": [
          "allAvailableHotels"
        ]
      }
    ]
  },
  "name": "AllHotelsSearchList_data",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "allAvailableHotels",
      "args": [
        {
          "kind": "Variable",
          "name": "filter",
          "variableName": "filter",
          "type": "HotelsFilterInput"
        },
        {
          "kind": "Variable",
          "name": "options",
          "variableName": "options",
          "type": "AvailableHotelOptionsInput"
        },
        {
          "kind": "Variable",
          "name": "search",
          "variableName": "search",
          "type": "HotelsSearchInput!"
        }
      ],
      "concreteType": "HotelAvailabilityConnection",
      "name": "__AllHotels_allAvailableHotels_connection",
      "plural": false,
      "selections": [
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
              "name": "hasNextPage",
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "hasPreviousPage",
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "startCursor",
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "endCursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "HotelAvailabilityEdge",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "HotelAvailability",
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
                  "kind": "FragmentSpread",
                  "name": "AllHotelsSearchRow",
                  "args": null
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
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "HotelAvailabilityStats",
          "name": "stats",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "priceMax",
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "priceMin",
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

module.exports = node;
