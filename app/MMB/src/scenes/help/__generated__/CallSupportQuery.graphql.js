/**
 * @flow
 * @relayHash 705a972c49710ed1ed03daf6f9a25cfe
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CallSupportQueryVariables = {||};
export type CallSupportQueryResponse = {|
  +customerSupport: ?{|
    +phoneNumbers: ?$ReadOnlyArray<?{|
      +number: ?string,
      +availabilityDescription: ?string,
    |}>
  |}
|};
*/


/*
query CallSupportQuery {
  customerSupport {
    phoneNumbers {
      number
      availabilityDescription
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "customerSupport",
    "storageKey": null,
    "args": null,
    "concreteType": "CustomerSupport",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "phoneNumbers",
        "storageKey": null,
        "args": null,
        "concreteType": "CustomerSupportPhoneNumber",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "number",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "availabilityDescription",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "CallSupportQuery",
  "id": null,
  "text": "query CallSupportQuery {\n  customerSupport {\n    phoneNumbers {\n      number\n      availabilityDescription\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CallSupportQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "CallSupportQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3c1cc38f2b0fdb708d370bbe327758bb';
module.exports = node;
