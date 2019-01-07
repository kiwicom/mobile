/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type RenderSearchResults$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HotelsPaginationContainer$ref: FragmentReference;
export type HotelsPaginationContainer = {|
  +allAvailableBookingComHotels: ?{|
    +stats: ?{|
      +maxPrice: ?number,
      +minPrice: ?number,
    |},
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: RenderSearchResults$ref
      |}
    |}>,
  |},
  +$refType: HotelsPaginationContainer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "HotelsPaginationContainer",
  "type": "RootQuery",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": [
          "allAvailableBookingComHotels"
        ]
      }
    ]
  },
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
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "allAvailableBookingComHotels",
      "name": "__HotelsPaginationContainer_allAvailableBookingComHotels_connection",
      "storageKey": null,
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
      "concreteType": "AllHotelAvailabilityHotelConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "stats",
          "storageKey": null,
          "args": null,
          "concreteType": "HotelAvailabilityStats",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "maxPrice",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "minPrice",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "AllHotelAvailabilityHotelEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "AllHotelAvailabilityHotel",
              "plural": false,
              "selections": [
                {
                  "kind": "FragmentSpread",
                  "name": "RenderSearchResults",
                  "args": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '21da7f26b98a713de9abac294b205f8d';
module.exports = node;
