/**
 * @flow
 * @relayHash 9c4068dea7939371c82da676b8688361
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
  +node: ?{|
    +$fragmentRefs: ETicketRefetch$ref
  |}
|};
*/


/*
query TicketSceneQuery(
  $bookingId: ID!
) {
  node(id: $bookingId) {
    __typename
    ... on BookingInterface {
      ...ETicketRefetch
    }
    id
  }
}

fragment ETicketRefetch on BookingInterface {
  id
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
  "text": "query TicketSceneQuery(\n  $bookingId: ID!\n) {\n  node(id: $bookingId) {\n    __typename\n    ... on BookingInterface {\n      ...ETicketRefetch\n    }\n    id\n  }\n}\n\nfragment ETicketRefetch on BookingInterface {\n  id\n  assets {\n    ...ETicket\n  }\n}\n\nfragment ETicket on BookingAssets {\n  ticketUrl\n}\n",
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
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
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
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '39039dbd7e0af89066bfdadfc9932b4f';
module.exports = node;
