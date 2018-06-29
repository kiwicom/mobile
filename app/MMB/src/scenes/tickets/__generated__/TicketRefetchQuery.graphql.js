/**
 * @flow
 * @relayHash 1571ecc1c3ebc0b17baa4922337cb67a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TicketRefetch$ref = any;
export type TicketRefetchQueryVariables = {|
  id: string
|};
export type TicketRefetchQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: TicketRefetch$ref
  |}
|};
*/


/*
query TicketRefetchQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on BookingInterface {
      ...TicketRefetch
    }
    id
  }
}

fragment TicketRefetch on BookingInterface {
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
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TicketRefetchQuery",
  "id": null,
  "text": "query TicketRefetchQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on BookingInterface {\n      ...TicketRefetch\n    }\n    id\n  }\n}\n\nfragment TicketRefetch on BookingInterface {\n  id\n  assets {\n    ...ETicket\n  }\n}\n\nfragment ETicket on BookingAssets {\n  ticketUrl\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TicketRefetchQuery",
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
            "name": "TicketRefetch",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TicketRefetchQuery",
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
(node/*: any*/).hash = 'ac93d2ab12685b3f729e6e0f7b3ffd97';
module.exports = node;
