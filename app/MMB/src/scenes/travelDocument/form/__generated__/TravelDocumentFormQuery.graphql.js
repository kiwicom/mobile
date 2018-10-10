/**
 * @flow
 * @relayHash 6b6055a84008351e3aa167ed66af84ff
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ExpiryDatePicker$ref = any;
export type TravelDocumentFormQueryVariables = {|
  bookingId: number,
  authToken: string,
|};
export type TravelDocumentFormQueryResponse = {|
  +singleBooking: ?({|
    +__typename: "BookingOneWay",
    +trip: ?{|
      +$fragmentRefs: ExpiryDatePicker$ref
    |},
  |} | {|
    +__typename: "BookingReturn",
    +inbound: ?{|
      +$fragmentRefs: ExpiryDatePicker$ref
    |},
  |} | {|
    +__typename: "BookingMulticity",
    +trips: ?$ReadOnlyArray<?{|
      +$fragmentRefs: ExpiryDatePicker$ref
    |}>,
  |} | {|
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    +__typename: "%other"
  |})
|};
export type TravelDocumentFormQuery = {|
  variables: TravelDocumentFormQueryVariables,
  response: TravelDocumentFormQueryResponse,
|};
*/


/*
query TravelDocumentFormQuery(
  $bookingId: Int!
  $authToken: String!
) {
  singleBooking(id: $bookingId, authToken: $authToken) {
    __typename
    ... on BookingOneWay {
      trip {
        ...ExpiryDatePicker
      }
    }
    ... on BookingReturn {
      inbound {
        ...ExpiryDatePicker
      }
    }
    ... on BookingMulticity {
      trips {
        ...ExpiryDatePicker
      }
    }
    id
  }
}

fragment ExpiryDatePicker on Trip {
  legs {
    departure {
      time
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "bookingId",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "authToken",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "authToken",
    "variableName": "authToken",
    "type": "String"
  },
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "bookingId",
    "type": "Int!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "FragmentSpread",
    "name": "ExpiryDatePicker",
    "args": null
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "legs",
    "storageKey": null,
    "args": null,
    "concreteType": "Leg",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "departure",
        "storageKey": null,
        "args": null,
        "concreteType": "RouteStop",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "time",
            "args": null,
            "storageKey": null
          }
        ]
      },
      v4
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TravelDocumentFormQuery",
  "id": null,
  "text": "query TravelDocumentFormQuery(\n  $bookingId: Int!\n  $authToken: String!\n) {\n  singleBooking(id: $bookingId, authToken: $authToken) {\n    __typename\n    ... on BookingOneWay {\n      trip {\n        ...ExpiryDatePicker\n      }\n    }\n    ... on BookingReturn {\n      inbound {\n        ...ExpiryDatePicker\n      }\n    }\n    ... on BookingMulticity {\n      trips {\n        ...ExpiryDatePicker\n      }\n    }\n    id\n  }\n}\n\nfragment ExpiryDatePicker on Trip {\n  legs {\n    departure {\n      time\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TravelDocumentFormQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "singleBooking",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          v2,
          {
            "kind": "InlineFragment",
            "type": "BookingMulticity",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "trips",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": true,
                "selections": v3
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingReturn",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "inbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v3
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingOneWay",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "trip",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v3
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TravelDocumentFormQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "singleBooking",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          v2,
          v4,
          {
            "kind": "InlineFragment",
            "type": "BookingMulticity",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "trips",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": true,
                "selections": v5
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingReturn",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "inbound",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v5
              }
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "BookingOneWay",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "trip",
                "storageKey": null,
                "args": null,
                "concreteType": "Trip",
                "plural": false,
                "selections": v5
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
(node/*: any*/).hash = '1752e2bdd1c448f9633ad96cbaad6f3d';
module.exports = node;
