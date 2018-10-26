/**
 * @flow
 * @relayHash 89fa8d8d3392666c9ee8d579b653cc2e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PaymentScreenQueryVariables = {|
  hotelId?: ?string
|};
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
query PaymentScreenQuery(
  $hotelId: ID
) {
  hotelPaymentUrls(hotelId: $hotelId) {
    bookingComPaymentUrl
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "hotelId",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "hotelPaymentUrls",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "hotelId",
        "variableName": "hotelId",
        "type": "ID"
      }
    ],
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
  "text": "query PaymentScreenQuery(\n  $hotelId: ID\n) {\n  hotelPaymentUrls(hotelId: $hotelId) {\n    bookingComPaymentUrl\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PaymentScreenQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "PaymentScreenQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8b5ada67d5d06bd38230dbd5d6c7cc4c';
module.exports = node;
