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
declare export opaque type OneWayFlight_booking$ref: FragmentReference;
export type OneWayFlight_booking = {|
  +trip: ?{|
    +departure: ?{|
      +$fragmentRefs: CityImageContainer_departure$ref
    |},
    +arrival: ?{|
      +$fragmentRefs: CityImageContainer_arrival$ref
    |},
  |},
  +$fragmentRefs: CityImageContainer_image$ref,
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
      "name": "CityImageContainer_image",
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
              "name": "CityImageContainer_departure",
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
              "name": "CityImageContainer_arrival",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '5ac6f9b9fd1240aa35f9df16d0f82bc4';
module.exports = node;
