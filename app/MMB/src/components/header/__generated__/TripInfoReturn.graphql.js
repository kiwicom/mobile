/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type RouteStop$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripInfoReturn$ref: FragmentReference;
export type TripInfoReturn = {|
  +outbound: ?{|
    +departure: ?{|
      +$fragmentRefs: RouteStop$ref
    |},
    +arrival: ?{|
      +$fragmentRefs: RouteStop$ref
    |},
  |},
  +inbound: ?{|
    +departure: ?{|
      +$fragmentRefs: RouteStop$ref
    |},
    +arrival: ?{|
      +$fragmentRefs: RouteStop$ref
    |},
  |},
  +$refType: TripInfoReturn$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "RouteStop",
    "args": null
  }
],
v1 = [
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
];
return {
  "kind": "Fragment",
  "name": "TripInfoReturn",
  "type": "BookingReturn",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "outbound",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
      "plural": false,
      "selections": v1
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "inbound",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
      "plural": false,
      "selections": v1
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '6ccac82d4c0e5c23bce7b44f72e04872';
module.exports = node;
