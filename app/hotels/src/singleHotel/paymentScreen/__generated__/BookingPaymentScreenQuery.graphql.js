/**
 * @flow
 * @relayHash 116e776bc60ed91fc2e5444020209dc1
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
export type RoomConfigInput = {|
  count: number,
  roomId: string,
|};
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

const node: ConcreteRequest = (function(){
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
        "variableName": "hotelId"
      },
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
        "name": "bookingComPaymentUrl",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "BookingPaymentScreenQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "BookingPaymentScreenQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "BookingPaymentScreenQuery",
    "id": null,
    "text": "query BookingPaymentScreenQuery(\n  $hotelId: ID\n  $roomConfig: [RoomConfigInput]\n) {\n  hotelPaymentUrls(hotelId: $hotelId, roomConfig: $roomConfig) {\n    bookingComPaymentUrl\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = '2237324bd3f3dab3ca90d1a90e28e5d1';
export default node;
