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
declare export opaque type Stay22PaginationContainer_data$fragmentType: Stay22PaginationContainer_data$ref;
export type Stay22PaginationContainer_data = {|
  +allAvailableStay22Hotels: ?{|
    +stats: ?{|
      +minPrice: ?{|
        +amount: ?string
      |},
      +maxPrice: ?{|
        +amount: ?string
      |},
    |},
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: RenderSearchResults_data$ref
      |}
    |}>,
  |},
  +$refType: Stay22PaginationContainer_data$ref,
|};
export type Stay22PaginationContainer_data$data = Stay22PaginationContainer_data;
export type Stay22PaginationContainer_data$key = {
  +$data?: Stay22PaginationContainer_data$data,
  +$fragmentRefs: Stay22PaginationContainer_data$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "amount",
    "args": null,
    "storageKey": null
  }
];
return {
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
    },
    {
      "kind": "RootArgument",
      "name": "filter",
      "type": "HotelsFilterInput"
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
          "name": "filter",
          "variableName": "filter"
        },
        {
          "kind": "Variable",
          "name": "search",
          "variableName": "search"
        }
      ],
      "concreteType": "AllAvailableStay22HotelConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "stats",
          "storageKey": null,
          "args": null,
          "concreteType": "HotelSearchMeta",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "minPrice",
              "storageKey": null,
              "args": null,
              "concreteType": "Money",
              "plural": false,
              "selections": (v0/*: any*/)
            },
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "maxPrice",
              "storageKey": null,
              "args": null,
              "concreteType": "Money",
              "plural": false,
              "selections": (v0/*: any*/)
            }
          ]
        },
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
})();
// prettier-ignore
(node/*: any*/).hash = '6ad5ee2e3e19f14c6223c3e1f7ecf09d';
module.exports = node;
