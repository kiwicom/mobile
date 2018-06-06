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
export type BookingType = "MULTICITY" | "ONE_WAY" | "RETURN" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripOverview$ref: FragmentReference;
export type TripOverview = {|
  +type: ?BookingType,
  +oneWay: ?{|
    +$fragmentRefs: OneWayTimeline$ref
  |},
  +return: ?{|
    +$fragmentRefs: ReturnTimeline$ref
  |},
  +multicity: ?{|
    +$fragmentRefs: MulticityTimeline$ref
  |},
  +$refType: TripOverview$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TripOverview",
  "type": "Booking",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "oneWay",
      "storageKey": null,
      "args": null,
      "concreteType": "BookingOneWay",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "OneWayTimeline",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "return",
      "storageKey": null,
      "args": null,
      "concreteType": "BookingReturn",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "ReturnTimeline",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "multicity",
      "storageKey": null,
      "args": null,
      "concreteType": "BookingMulticity",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "MulticityTimeline",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '317810b0a71a3617c18923442eb78bad';
module.exports = node;
