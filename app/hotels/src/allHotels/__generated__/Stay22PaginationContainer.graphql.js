/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type RenderSearchResults$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Stay22PaginationContainer$ref: FragmentReference;
export type Stay22PaginationContainer = {|
  +allAvailableStay22Hotels: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: RenderSearchResults$ref
      |}
    |}>
  |},
  +$refType: Stay22PaginationContainer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Stay22PaginationContainer",
  "type": "RootQuery",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": "after",
        "direction": "forward",
        "path": [
          "allAvailableStay22Hotels"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "search",
      "type": "Stay22HotelsSearchInput!"
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
      "alias": "allAvailableStay22Hotels",
      "name": "__Stay22PaginationContainer_allAvailableStay22Hotels_connection",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "search",
          "variableName": "search",
          "type": "Stay22HotelsSearchInput!"
        }
      ],
      "concreteType": "AllAvailableStay22HotelConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "AllAvailableStay22HotelEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "AllAvailableStay22Hotel",
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
(node/*: any*/).hash = 'd5951cedf413a0d9588856613bf85959';
module.exports = node;
