/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type RenderSearchResults_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Stay22PaginationContainer_data$ref: FragmentReference;
export type Stay22PaginationContainer_data = {|
  +allAvailableStay22Hotels: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: RenderSearchResults_data$ref
      |}
    |}>
  |},
  +$refType: Stay22PaginationContainer_data$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Stay22PaginationContainer_data",
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
                  "name": "RenderSearchResults_data",
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
(node/*: any*/).hash = 'e22d59ac5419f992356425becf7e741e';
module.exports = node;
