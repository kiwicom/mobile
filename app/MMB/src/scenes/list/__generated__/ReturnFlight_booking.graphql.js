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
declare export opaque type ReturnFlight_booking$ref: FragmentReference;
export type ReturnFlight_booking = {|
  +outbound: ?{|
    +arrival: ?{|
      +$fragmentRefs: CityImageContainer_arrival$ref
    |},
    +departure: ?{|
      +$fragmentRefs: CityImageContainer_departure$ref
    |},
  |},
  +$fragmentRefs: CityImageContainer_image$ref,
  +$refType: ReturnFlight_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ReturnFlight_booking",
  "type": "BookingReturn",
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
      "name": "outbound",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "arrival",
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
          "name": "departure",
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
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd8cf5a031f660c6d77a7204cbd214a72';
module.exports = node;
