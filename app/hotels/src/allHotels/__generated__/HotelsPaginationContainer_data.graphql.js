/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type RenderSearchResults_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HotelsPaginationContainer_data$ref: FragmentReference;
declare export opaque type HotelsPaginationContainer_data$fragmentType: HotelsPaginationContainer_data$ref;
export type HotelsPaginationContainer_data = {|
  +allAvailableBookingComHotels: ?{|
    +stats: ?{|
      +maxPrice: ?number,
      +minPrice: ?number,
    |},
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: RenderSearchResults_data$ref
      |}
    |}>,
  |},
  +$refType: HotelsPaginationContainer_data$ref,
|};
export type HotelsPaginationContainer_data$data = HotelsPaginationContainer_data;
export type HotelsPaginationContainer_data$key = {
  +$data?: HotelsPaginationContainer_data$data,
  +$fragmentRefs: HotelsPaginationContainer_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "HotelsPaginationContainer_data",
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
          "variableName": "filter"
        },
        {
          "kind": "Variable",
          "name": "options",
          "variableName": "options"
        },
        {
          "kind": "Variable",
          "name": "search",
          "variableName": "search"
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
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "RenderSearchResults_data",
                  "args": null
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
(node/*: any*/).hash = '626c37da061b59282fe20004d282bb97';
module.exports = node;
