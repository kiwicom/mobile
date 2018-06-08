/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type MulticityTimeline$ref = any;
type OneWayTimeline$ref = any;
type ReturnTimeline$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripOverview$ref: FragmentReference;
export type TripOverview = {|
  +__typename: "BookingOneWay",
  +$fragmentRefs: OneWayTimeline$ref,
  +$refType: TripOverview$ref,
|} | {|
  +__typename: "BookingReturn",
  +$fragmentRefs: ReturnTimeline$ref,
  +$refType: TripOverview$ref,
|} | {|
  +__typename: "BookingMulticity",
  +$fragmentRefs: MulticityTimeline$ref,
  +$refType: TripOverview$ref,
|} | {|
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  +__typename: "%other",
  +$refType: TripOverview$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TripOverview",
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
          "name": "MulticityTimeline",
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
          "name": "ReturnTimeline",
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
          "name": "OneWayTimeline",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '347909af366477df4817f938484801d4';
module.exports = node;
