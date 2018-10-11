/**
 * @flow
 * @relayHash 8bfe3b0246f129aa1510ebaab9da602f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type VariantButtons$ref = any;
export type InsuranceSelectionSceneContainerQueryVariables = {|
  bookingId: number,
  authToken: string,
|};
export type InsuranceSelectionSceneContainerQueryResponse = {|
  +singleBooking: ?{|
    +$fragmentRefs: VariantButtons$ref
  |}
|};
export type InsuranceSelectionSceneContainerQuery = {|
  variables: InsuranceSelectionSceneContainerQueryVariables,
  response: InsuranceSelectionSceneContainerQueryResponse,
|};
*/


/*
query InsuranceSelectionSceneContainerQuery(
  $bookingId: Int!
  $authToken: String!
) {
  singleBooking(id: $bookingId, authToken: $authToken) {
    __typename
    ...VariantButtons
    id
  }
}

fragment VariantButtons on BookingInterface {
  insurancePrices {
    insuranceType
    price {
      amount
      currency
    }
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
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "InsuranceSelectionSceneContainerQuery",
  "id": null,
  "text": "query InsuranceSelectionSceneContainerQuery(\n  $bookingId: Int!\n  $authToken: String!\n) {\n  singleBooking(id: $bookingId, authToken: $authToken) {\n    __typename\n    ...VariantButtons\n    id\n  }\n}\n\nfragment VariantButtons on BookingInterface {\n  insurancePrices {\n    insuranceType\n    price {\n      amount\n      currency\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "InsuranceSelectionSceneContainerQuery",
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
          {
            "kind": "FragmentSpread",
            "name": "VariantButtons",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "InsuranceSelectionSceneContainerQuery",
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
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "insurancePrices",
            "storageKey": null,
            "args": null,
            "concreteType": "InsurancePrice",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "insuranceType",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "price",
                "storageKey": null,
                "args": null,
                "concreteType": "Price",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "amount",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "currency",
                    "args": null,
                    "storageKey": null
                  }
                ]
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
(node/*: any*/).hash = '79155748d367b1addb3ee2dea5416c62';
module.exports = node;
