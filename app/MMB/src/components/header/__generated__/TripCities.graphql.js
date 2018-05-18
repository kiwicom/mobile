/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Location$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripCities$ref: FragmentReference;
export type TripCities = {|
  +departure: ?{|
    +$fragmentRefs: Location$ref
  |},
  +arrival: ?{|
    +$fragmentRefs: Location$ref
  |},
  +$refType: TripCities$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "Location",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "TripCities",
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
(node/*: any*/).hash = '7934dfc06ae2eaacd9ced1c53aa78021';
module.exports = node;
