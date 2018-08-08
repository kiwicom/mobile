/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BookingConfirmed_arrival$ref = any;
type BookingConfirmed_departure$ref = any;
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
    |}
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
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '721f670075c8767d84b1d6cf4f9f0c5a';
module.exports = node;
