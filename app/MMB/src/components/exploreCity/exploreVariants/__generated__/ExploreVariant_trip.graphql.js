/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BookingConfirmed_arrival$ref = any;
type BookingConfirmed_departure$ref = any;
type IsFlying$ref = any;
type PriorToDeparture$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExploreVariant_trip$ref: FragmentReference;
export type ExploreVariant_trip = {|
  +departure: ?{|
    +time: ?any
  |},
  +arrival: ?{|
    +$fragmentRefs: BookingConfirmed_arrival$ref
  |},
  +legs: ?$ReadOnlyArray<?{|
    +departure: ?{|
      +time: ?any,
      +$fragmentRefs: BookingConfirmed_departure$ref,
    |},
    +arrival: ?{|
      +time: ?any,
      +$fragmentRefs: IsFlying$ref,
    |},
    +$fragmentRefs: PriorToDeparture$ref,
  |}>,
  +$refType: ExploreVariant_trip$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "time",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "ExploreVariant_trip",
  "type": "Trip",
  "metadata": null,
  "argumentDefinitions": [],
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
        v0
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
          "name": "BookingConfirmed_arrival",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "legs",
      "storageKey": null,
      "args": null,
      "concreteType": "Leg",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "PriorToDeparture",
          "args": null
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
              "name": "BookingConfirmed_departure",
              "args": null
            },
            v0
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
              "name": "IsFlying",
              "args": null
            },
            v0
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '60b842cd9ffcf4cd59d26ac69b40132f';
module.exports = node;
