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
export type BookingType = "MULTICITY" | "ONE_WAY" | "RETURN" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripInfo$ref: FragmentReference;
export type TripInfo = {|
  +type: ?BookingType,
  +oneWay: ?{|
    +$fragmentRefs: TripInfoOneWay$ref
  |},
  +return: ?{|
    +$fragmentRefs: TripInfoReturn$ref
  |},
  +multicity: ?{|
    +$fragmentRefs: TripInfoMulticity$ref
  |},
  +$refType: TripInfo$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TripInfo",
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
          "name": "TripInfoOneWay",
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
          "name": "TripInfoReturn",
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
          "name": "TripInfoMulticity",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '5d1adb32123f374a1a1040d7222954dc';
module.exports = node;
