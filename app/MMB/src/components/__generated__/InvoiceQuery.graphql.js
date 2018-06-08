/**
 * @flow
 * @relayHash a88764ce6e33c131280b92b79a832616
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type InvoiceQueryVariables = {|
  bookingId: string
|};
export type InvoiceQueryResponse = {|
  +node: ?{|
    +assets?: ?{|
      +invoiceUrl: ?string
    |}
  |}
|};
*/


/*
query InvoiceQuery(
  $bookingId: ID!
) {
  node(id: $bookingId) {
    __typename
    ... on BookingInterface {
      assets {
        invoiceUrl
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "bookingId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "bookingId",
    "type": "ID!"
  }
],
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "assets",
  "storageKey": null,
  "args": null,
  "concreteType": "BookingAssets",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "invoiceUrl",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "InvoiceQuery",
  "id": null,
  "text": "query InvoiceQuery(\n  $bookingId: ID!\n) {\n  node(id: $bookingId) {\n    __typename\n    ... on BookingInterface {\n      assets {\n        invoiceUrl\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "InvoiceQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "InvoiceQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          v2,
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
(node/*: any*/).hash = 'cd60e91c5730d68a2c7e791f6492bde2';
module.exports = node;
