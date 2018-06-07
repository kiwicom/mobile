/**
 * @flow
 * @relayHash 5850c6cd94bcff3e0752958452901eca
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ETicketRefetch$ref = any;
export type ETicketRefetchQueryVariables = {|
  id: string
|};
export type ETicketRefetchQueryResponse = {|
  +booking: ?{|
    +$fragmentRefs: ETicketRefetch$ref
  |}
|};
*/


/*
query ETicketRefetchQuery(
  $id: ID!
) {
  booking(id: $id) {
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
  "name": "ETicketRefetchQuery",
  "id": null,
  "text": "query ETicketRefetchQuery(\n  $id: ID!\n) {\n  booking(id: $id) {\n    ...ETicketRefetch\n    id\n  }\n}\n\nfragment ETicketRefetch on Booking {\n  databaseId\n  assets {\n    ...ETicket\n  }\n}\n\nfragment ETicket on BookingAssets {\n  ticketUrl\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ETicketRefetchQuery",
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
    "name": "ETicketRefetchQuery",
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
(node/*: any*/).hash = '2bbd4df5965308e9a6f1d323f0da2613';
module.exports = node;
