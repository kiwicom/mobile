/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type RouteStop$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripInfoMulticity$ref: FragmentReference;
export type TripInfoMulticity = {|
  +trips: ?$ReadOnlyArray<?{|
    +departure: ?{|
      +$fragmentRefs: RouteStop$ref
    |},
    +arrival: ?{|
      +$fragmentRefs: RouteStop$ref
    |},
  |}>,
  +$refType: TripInfoMulticity$ref,
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
  "name": "TripInfoMulticity",
  "type": "BookingMulticity",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "trips",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
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
(node/*: any*/).hash = '001eb7f378ed577673d68812823cc7ac';
module.exports = node;
