/**
 * @flow
 * @relayHash 27ba55c89f5e4aa4173c9ce662d6792f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type InsuranceTermsPdfSceneQueryVariables = {||};
export type InsuranceTermsPdfSceneQueryResponse = {|
  +allDocuments: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?({|
        +url: ?string,
        +__typename: "InsuranceTerms",
      |} | {|
        // This will never be '%other', but we need some
        // value in case none of the concrete values match.
        +__typename: "%other"
      |})
    |}>
  |}
|};
export type InsuranceTermsPdfSceneQuery = {|
  variables: InsuranceTermsPdfSceneQueryVariables,
  response: InsuranceTermsPdfSceneQueryResponse,
|};
*/


/*
query InsuranceTermsPdfSceneQuery {
  allDocuments {
    edges {
      node {
        __typename
        ... on InsuranceTerms {
          url
          __typename
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "InlineFragment",
  "type": "InsuranceTerms",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "url",
      "args": null,
      "storageKey": null
    },
    v0
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "InsuranceTermsPdfSceneQuery",
  "id": null,
  "text": "query InsuranceTermsPdfSceneQuery {\n  allDocuments {\n    edges {\n      node {\n        __typename\n        ... on InsuranceTerms {\n          url\n          __typename\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "InsuranceTermsPdfSceneQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allDocuments",
        "storageKey": null,
        "args": null,
        "concreteType": "DocumentInterfaceConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "DocumentInterfaceEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                  v1
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "InsuranceTermsPdfSceneQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allDocuments",
        "storageKey": null,
        "args": null,
        "concreteType": "DocumentInterfaceConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "DocumentInterfaceEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                  v0,
                  v1
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e47c4ef232efa41fa246950d3b76b42f';
module.exports = node;
