/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type RouteStop$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripInfoOneWay$ref: FragmentReference;
export type TripInfoOneWay = {|
  +trip: ?{|
    +departure: ?{|
      +$fragmentRefs: RouteStop$ref
    |},
    +arrival: ?{|
      +$fragmentRefs: RouteStop$ref
    |},
  |},
  +$refType: TripInfoOneWay$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "RouteStop",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "TripInfoOneWay",
  "type": "BookingOneWay",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
          "selections": v0
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "arrival",
          "storageKey": null,
          "args": null,
          "concreteType": "RouteStop",
          "plural": false,
          "selections": v0
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ee53a28d09d0fa58a00254b8c22303d6';
module.exports = node;
