/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CityImage_arrival$ref = any;
type CityImage_departure$ref = any;
type CityImage_image$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MulticityFlight_booking$ref: FragmentReference;
export type MulticityFlight_booking = {|
  +end: ?{|
    +$fragmentRefs: CityImage_arrival$ref
  |},
  +start: ?{|
    +$fragmentRefs: CityImage_departure$ref
  |},
  +$fragmentRefs: CityImage_image$ref,
  +$refType: MulticityFlight_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "MulticityFlight_booking",
  "type": "BookingMulticity",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "CityImage_image",
      "args": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "end",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "CityImage_arrival",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "start",
      "storageKey": null,
      "args": null,
      "concreteType": "RouteStop",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "CityImage_departure",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '33ede40bd83a6ae603e0806f4217dae5';
module.exports = node;
