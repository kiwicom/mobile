/**
 * @flow
 * @relayHash 05d505de1716b12626de8d148784d04c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type RefundForm$ref = any;
export type MMBScreenQueryVariables = {||};
export type MMBScreenQueryResponse = {|
  +booking: ?{|
    +$fragmentRefs: RefundForm$ref
  |}
|};
*/


/*
query MMBScreenQuery {
  booking(id: "Qm9va2luZzo2NjkxNTcy") {
    ...RefundForm
    id
  }
}

fragment RefundForm on Booking {
  directAccessURL(deeplinkTo: REFUND)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "Qm9va2luZzo2NjkxNTcy",
    "type": "ID!"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MMBScreenQuery",
  "id": null,
  "text": "query MMBScreenQuery {\n  booking(id: \"Qm9va2luZzo2NjkxNTcy\") {\n    ...RefundForm\n    id\n  }\n}\n\nfragment RefundForm on Booking {\n  directAccessURL(deeplinkTo: REFUND)\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MMBScreenQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "booking",
        "storageKey": "booking(id:\"Qm9va2luZzo2NjkxNTcy\")",
        "args": v0,
        "concreteType": "Booking",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "RefundForm",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MMBScreenQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "booking",
        "storageKey": "booking(id:\"Qm9va2luZzo2NjkxNTcy\")",
        "args": v0,
        "concreteType": "Booking",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "directAccessURL",
            "args": [
              {
                "kind": "Literal",
                "name": "deeplinkTo",
                "value": "REFUND",
                "type": "DirectAccessURLValues"
              }
            ],
            "storageKey": "directAccessURL(deeplinkTo:\"REFUND\")"
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9121201e672fea0626f62ea6de4090fe';
module.exports = node;
