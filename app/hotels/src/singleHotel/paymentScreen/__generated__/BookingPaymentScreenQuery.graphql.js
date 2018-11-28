/**
 * @flow
 * @relayHash 5d92fb044f70f4e64e8d7f64d9402ada
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RoomConfigInput = {
  roomId: string,
  count: number,
};
export type BookingPaymentScreenQueryVariables = {|
  hotelId?: ?string,
  roomConfig?: ?$ReadOnlyArray<?RoomConfigInput>,
|};
export type BookingPaymentScreenQueryResponse = {|
  +hotelPaymentUrls: ?{|
    +bookingComPaymentUrl: ?string
  |}
|};
export type BookingPaymentScreenQuery = {|
  variables: BookingPaymentScreenQueryVariables,
  response: BookingPaymentScreenQueryResponse,
|};
*/


/*
query BookingPaymentScreenQuery(
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
  "name": "BookingPaymentScreenQuery",
  "id": null,
  "text": "query BookingPaymentScreenQuery(\n  $hotelId: ID\n  $roomConfig: [RoomConfigInput]\n) {\n  hotelPaymentUrls(hotelId: $hotelId, roomConfig: $roomConfig) {\n    bookingComPaymentUrl\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BookingPaymentScreenQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "BookingPaymentScreenQuery",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2237324bd3f3dab3ca90d1a90e28e5d1';
module.exports = node;
