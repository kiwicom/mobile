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
declare export opaque type OneWayFlight_booking$ref: FragmentReference;
export type OneWayFlight_booking = {|
  +trip: ?{|
    +departure: ?{|
      +$fragmentRefs: CityImage_departure$ref
    |},
    +arrival: ?{|
      +$fragmentRefs: CityImage_arrival$ref
    |},
  |},
  +$fragmentRefs: CityImage_image$ref,
  +$refType: OneWayFlight_booking$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "OneWayFlight_booking",
  "type": "BookingOneWay",
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
      "name": "trip",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
      "plural": false,
      "selections": [
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
              "name": "CityImage_departure",
              "args": null
            }
          ]
        },
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
              "name": "CityImage_arrival",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '75f9b272d80a921b6a63be83cef347f9';
module.exports = node;
