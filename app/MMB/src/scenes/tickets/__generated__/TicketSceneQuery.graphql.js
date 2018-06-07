/**
 * @flow
 * @relayHash 204e9e21234f20679187720fa05720c1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ETicketRefetch$ref = any;
export type TicketSceneQueryVariables = {|
  bookingId: string
|};
export type TicketSceneQueryResponse = {|
  +booking: ?{|
    +$fragmentRefs: ETicketRefetch$ref
  |}
|};
*/


/*
query TicketSceneQuery(
  $bookingId: ID!
) {
  booking(id: $bookingId) {
    ...ETicketRefetch
    id
  }
}

fragment ETicketRefetch on Booking {
  databaseId
  assets {
    ...ETicket
  }
}

fragment ETicket on BookingAssets {
  ticketUrl
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
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TicketSceneQuery",
  "id": null,
  "text": "query TicketSceneQuery(\n  $bookingId: ID!\n) {\n  booking(id: $bookingId) {\n    ...ETicketRefetch\n    id\n  }\n}\n\nfragment ETicketRefetch on Booking {\n  databaseId\n  assets {\n    ...ETicket\n  }\n}\n\nfragment ETicket on BookingAssets {\n  ticketUrl\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TicketSceneQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "booking",
        "storageKey": null,
        "args": v1,
        "concreteType": "Booking",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ETicketRefetch",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TicketSceneQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "booking",
        "storageKey": null,
        "args": v1,
        "concreteType": "Booking",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "databaseId",
            "args": null,
            "storageKey": null
          },
          {
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
                "name": "ticketUrl",
                "args": null,
                "storageKey": null
              }
            ]
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
(node/*: any*/).hash = '36cc3559c1df2b023b1d1406200d470d';
module.exports = node;