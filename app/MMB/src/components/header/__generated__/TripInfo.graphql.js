/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type TripInfoMulticity$ref = any;
type TripInfoOneWay$ref = any;
type TripInfoReturn$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripInfo$ref: FragmentReference;
export type TripInfo = {|
  +__typename: "BookingOneWay",
  +$fragmentRefs: TripInfoOneWay$ref,
  +$refType: TripInfo$ref,
|} | {|
  +__typename: "BookingReturn",
  +$fragmentRefs: TripInfoReturn$ref,
  +$refType: TripInfo$ref,
|} | {|
  +__typename: "BookingMulticity",
  +$fragmentRefs: TripInfoMulticity$ref,
  +$refType: TripInfo$ref,
|} | {|
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  +__typename: "%other",
  +$refType: TripInfo$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TripInfo",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__typename",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "type": "BookingMulticity",
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "TripInfoMulticity",
          "args": null
        }
      ]
    },
    {
      "kind": "InlineFragment",
      "type": "BookingReturn",
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "TripInfoReturn",
          "args": null
        }
      ]
    },
    {
      "kind": "InlineFragment",
      "type": "BookingOneWay",
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "TripInfoOneWay",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '11c36c423f6fcd40cef99a76041c9cca';
module.exports = node;
