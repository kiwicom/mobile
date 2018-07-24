/**
 * @flow
 * @relayHash eb88e7d365cf8f2f0011fc81b850286a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type VariantButtons$ref = any;
export type InsuranceSelectionSceneContainerQueryVariables = {|
  bookingId: string
|};
export type InsuranceSelectionSceneContainerQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: VariantButtons$ref
  |}
|};
*/


/*
query InsuranceSelectionSceneContainerQuery(
  $bookingId: ID!
) {
  node(id: $bookingId) {
    __typename
    ... on BookingInterface {
      ...VariantButtons
    }
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
  "name": "InsuranceSelectionSceneContainerQuery",
  "id": null,
  "text": "query InsuranceSelectionSceneContainerQuery(\n  $bookingId: ID!\n) {\n  node(id: $bookingId) {\n    __typename\n    ... on BookingInterface {\n      ...VariantButtons\n    }\n    id\n  }\n}\n\nfragment VariantButtons on BookingInterface {\n  insurancePrices {\n    insuranceType\n    price {\n      amount\n      currency\n    }\n  }\n}\n",
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
        "name": "node",
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
(node/*: any*/).hash = '2912b1050c44aee287f974a6dbdd6837';
module.exports = node;
