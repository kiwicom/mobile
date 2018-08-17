/**
 * @flow
 * @relayHash f5f8c891c718d5507bea44a4b12d826e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Help$ref = any;
export type HelpContainerQueryVariables = {||};
export type HelpContainerQueryResponse = {|
  +customerSupportNumber: ?{|
    +$fragmentRefs: Help$ref
  |}
|};
*/


/*
query HelpContainerQuery {
  customerSupportNumber {
    ...Help
  }
}

fragment Help on CustomerSupportNumber {
  number
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "HelpContainerQuery",
  "id": null,
  "text": "query HelpContainerQuery {\n  customerSupportNumber {\n    ...Help\n  }\n}\n\nfragment Help on CustomerSupportNumber {\n  number\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HelpContainerQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "customerSupportNumber",
        "storageKey": null,
        "args": null,
        "concreteType": "CustomerSupportNumber",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Help",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HelpContainerQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "customerSupportNumber",
        "storageKey": null,
        "args": null,
        "concreteType": "CustomerSupportNumber",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "number",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = '530efc5c83eb8b57c2e1b52721df0d31';
module.exports = node;
