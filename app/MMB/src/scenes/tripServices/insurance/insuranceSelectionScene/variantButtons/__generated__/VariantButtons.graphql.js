/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type InsuranceType = "NONE" | "TRAVEL_BASIC" | "TRAVEL_PLUS" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type VariantButtons$ref: FragmentReference;
export type VariantButtons = {|
  +insurancePrices: ?$ReadOnlyArray<?{|
    +insuranceType: ?InsuranceType
  |}>,
  +price: ?{|
    +amount: ?number,
    +currency: ?string,
  |},
  +$refType: VariantButtons$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "VariantButtons",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
        }
      ]
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
};
// prettier-ignore
(node/*: any*/).hash = 'e340e64c745691406260e24369a099dc';
module.exports = node;
