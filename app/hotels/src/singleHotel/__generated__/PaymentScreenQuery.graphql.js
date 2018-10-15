/**
 * @flow
 * @relayHash 5dafec1044a34b2ec2734a78ab2fa1cd
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PaymentScreenQueryVariables = {||};
export type PaymentScreenQueryResponse = {|
  +hotelPaymentUrls: ?{|
    +bookingComPaymentUrl: ?string
  |}
|};
export type PaymentScreenQuery = {|
  variables: PaymentScreenQueryVariables,
  response: PaymentScreenQueryResponse,
|};
*/


/*
query PaymentScreenQuery {
  hotelPaymentUrls {
    bookingComPaymentUrl
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "hotelPaymentUrls",
    "storageKey": null,
    "args": null,
    "concreteType": "HotelPaymentUrls",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "bookingComPaymentUrl",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PaymentScreenQuery",
  "id": null,
  "text": "query PaymentScreenQuery {\n  hotelPaymentUrls {\n    bookingComPaymentUrl\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PaymentScreenQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "PaymentScreenQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '894d7dd18175ff2fefc9f746ab946ac9';
module.exports = node;
