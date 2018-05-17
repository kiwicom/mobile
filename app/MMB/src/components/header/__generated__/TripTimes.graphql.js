/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type DateTime$ref = any;
type Duration$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripTimes$ref: FragmentReference;
export type TripTimes = {|
  +departure: ?{|
    +$fragmentRefs: DateTime$ref
  |},
  +arrival: ?{|
    +$fragmentRefs: DateTime$ref
  |},
  +$fragmentRefs: Duration$ref,
  +$refType: TripTimes$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "DateTime",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "TripTimes",
  "type": "Trip",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Duration",
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '657c08da5284310451246fb983abeb87';
module.exports = node;
