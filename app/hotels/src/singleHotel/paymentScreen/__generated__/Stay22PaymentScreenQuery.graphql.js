/**
 * @flow
 * @relayHash 7d51c6c055c75768fa91f75cb7ddb94a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RoomConfigInput = {|
  roomId: string,
  count: number,
|};
export type Stay22PaymentScreenQueryVariables = {|
  paymentLink: string,
  roomConfig?: ?$ReadOnlyArray<?RoomConfigInput>,
|};
export type Stay22PaymentScreenQueryResponse = {|
  +hotelPaymentUrls: ?{|
    +stay22PaymentUrl: ?string
  |}
|};
export type Stay22PaymentScreenQuery = {|
  variables: Stay22PaymentScreenQueryVariables,
  response: Stay22PaymentScreenQueryResponse,
|};
*/


/*
query Stay22PaymentScreenQuery(
  $paymentLink: String!
  $roomConfig: [RoomConfigInput]
) {
  hotelPaymentUrls(roomConfig: $roomConfig) {
    stay22PaymentUrl(paymentLink: $paymentLink)
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "paymentLink",
    "type": "String!",
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
        "name": "roomConfig",
        "variableName": "roomConfig"
      }
    ],
    "concreteType": "HotelPaymentUrls",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "stay22PaymentUrl",
        "args": [
          {
            "kind": "Variable",
            "name": "paymentLink",
            "variableName": "paymentLink"
          }
        ],
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "Stay22PaymentScreenQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "Stay22PaymentScreenQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "Stay22PaymentScreenQuery",
    "id": null,
    "text": "query Stay22PaymentScreenQuery(\n  $paymentLink: String!\n  $roomConfig: [RoomConfigInput]\n) {\n  hotelPaymentUrls(roomConfig: $roomConfig) {\n    stay22PaymentUrl(paymentLink: $paymentLink)\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2e7ce872382d2baed38d7bb70ba521cb';
module.exports = node;
