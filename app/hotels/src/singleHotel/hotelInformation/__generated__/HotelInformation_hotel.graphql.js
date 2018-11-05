/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Description_hotel$ref = any;
type HotelReview$ref = any;
type Location_hotel$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HotelInformation_hotel$ref: FragmentReference;
export type HotelInformation_hotel = {|
  +$fragmentRefs: Location_hotel$ref & Description_hotel$ref & HotelReview$ref,
  +$refType: HotelInformation_hotel$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "HotelInformation_hotel",
  "type": "HotelInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Location_hotel",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Description_hotel",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "HotelReview",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b6ce8ee9201943110c43ca76098263d5';
module.exports = node;
