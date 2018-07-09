/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CityImageContainer_arrival$ref = any;
type CityImageContainer_departure$ref = any;
type CityImageContainer_image$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MulticityFlight_booking$ref: FragmentReference;
export type MulticityFlight_booking = {|
  +end: ?{|
    +$fragmentRefs: CityImageContainer_arrival$ref
  |},
  +start: ?{|
    +$fragmentRefs: CityImageContainer_departure$ref
  |},
  +$fragmentRefs: CityImageContainer_image$ref,
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
      "name": "CityImageContainer_image",
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
          "name": "CityImageContainer_arrival",
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
          "name": "CityImageContainer_departure",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'af2bd48b7e434c465c05bc33f2d31400';
module.exports = node;
