/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Address_address$ref = any;
type HotelDetailPreview_availability$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AdditionalInfo$ref: FragmentReference;
export type AdditionalInfo = {|
  +hotel: ?{|
    +address: ?{|
      +$fragmentRefs: Address_address$ref
    |}
  |},
  +$fragmentRefs: HotelDetailPreview_availability$ref,
  +$refType: AdditionalInfo$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AdditionalInfo",
  "type": "HotelAvailability",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "HotelDetailPreview_availability",
      "args": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "hotel",
      "storageKey": null,
      "args": null,
      "concreteType": "Hotel",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "address",
          "storageKey": null,
          "args": null,
          "concreteType": "Address",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "Address_address",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '4eadebdbcac36d96c597258610f41048';
module.exports = node;
