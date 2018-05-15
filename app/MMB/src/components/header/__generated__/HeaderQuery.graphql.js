/**
 * @flow
 * @relayHash 809faa83b17f34af03945760d7ab4a71
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type StatusBar$ref = any;
type TripInfo$ref = any;
export type HeaderQueryVariables = {|
  bookingId: string
|};
export type HeaderQueryResponse = {|
  +booking: ?{|
    +$fragmentRefs: StatusBar$ref & TripInfo$ref
  |}
|};
*/


/*
query HeaderQuery(
  $bookingId: ID!
) {
  booking(id: $bookingId) {
    ...StatusBar
    ...TripInfo
    id
  }
}

fragment StatusBar on Booking {
  ...StatusBarIcon
  databaseId
}

fragment TripInfo on Booking {
  type
}

fragment StatusBarIcon on Booking {
  status
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
  "name": "HeaderQuery",
  "id": null,
  "text": "query HeaderQuery(\n  $bookingId: ID!\n) {\n  booking(id: $bookingId) {\n    ...StatusBar\n    ...TripInfo\n    id\n  }\n}\n\nfragment StatusBar on Booking {\n  ...StatusBarIcon\n  databaseId\n}\n\nfragment TripInfo on Booking {\n  type\n}\n\nfragment StatusBarIcon on Booking {\n  status\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "HeaderQuery",
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
            "name": "StatusBar",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "TripInfo",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HeaderQuery",
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
            "name": "status",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "databaseId",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "type",
            "args": null,
            "storageKey": null
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
(node/*: any*/).hash = '8725b91ce7243443b9211e3d3e6c5721';
module.exports = node;
