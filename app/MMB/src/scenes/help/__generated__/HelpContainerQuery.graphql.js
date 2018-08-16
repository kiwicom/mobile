/**
 * @flow
 * @relayHash a0046bf3692de9b2c139f0c729ac6e1b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type HelpContainerQueryVariables = {||};
export type HelpContainerQueryResponse = {|
  +customerSupportNumber: ?{|
    +number: ?string
  |}
|};
*/


/*
query HelpContainerQuery {
  customerSupportNumber {
    number
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "HelpContainerQuery",
  "id": null,
  "text": "query HelpContainerQuery {\n  customerSupportNumber {\n    number\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HelpContainerQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "HelpContainerQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '999572874ee31a1d3d47919ec72ec921';
module.exports = node;
