/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AllHotelsSearchList$ref = any;
type MapScreen$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type RenderSearchResults$ref: FragmentReference;
export type RenderSearchResults = {|
  +allAvailableBookingComHotels: ?{|
    +pageInfo: {|
      +hasNextPage: boolean,
      +hasPreviousPage: boolean,
      +startCursor: ?string,
      +endCursor: ?string,
    |},
    +stats: ?{|
      +maxPrice: ?number,
      +minPrice: ?number,
    |},
    +edges: ?$ReadOnlyArray<?{|
      +$fragmentRefs: AllHotelsSearchList$ref & MapScreen$ref
    |}>,
  |},
  +$refType: RenderSearchResults$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "RenderSearchResults",
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
      "name": "__RenderSearchResults_allAvailableBookingComHotels_connection",
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
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasPreviousPage",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "startCursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            }
          ]
        },
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
              "kind": "FragmentSpread",
              "name": "AllHotelsSearchList",
              "args": null
            },
            {
              "kind": "FragmentSpread",
              "name": "MapScreen",
              "args": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            },
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
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '2eeb8c3d08ea3dfd561b7a449f9e8768';
module.exports = node;
