/**
 * @flow
 * @relayHash 28a12649218f3e7a941c619921aa507b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RoomConfigInput = {
  roomId: string,
  count: number,
};
export type PaymentScreenQueryVariables = {|
  hotelId?: ?string,
  roomConfig?: ?$ReadOnlyArray<?RoomConfigInput>,
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
  $roomConfig: [RoomConfigInput]
) {
  hotelPaymentUrls(hotelId: $hotelId, roomConfig: $roomConfig) {
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
  },
  {
    "kind": "LocalArgument",
    "name": "roomConfig",
    "type": "[RoomConfigInput]",
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
      },
      {
        "kind": "Variable",
        "name": "roomConfig",
        "variableName": "roomConfig",
        "type": "[RoomConfigInput]"
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
  "text": "query PaymentScreenQuery(\n  $hotelId: ID\n  $roomConfig: [RoomConfigInput]\n) {\n  hotelPaymentUrls(hotelId: $hotelId, roomConfig: $roomConfig) {\n    bookingComPaymentUrl\n  }\n}\n",
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
(node/*: any*/).hash = '4c45a0c05b4bc8d0dcc000450b0382a1';
module.exports = node;
