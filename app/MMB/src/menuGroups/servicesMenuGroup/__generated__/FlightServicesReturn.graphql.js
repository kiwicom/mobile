/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FlightServicesMenuItem$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FlightServicesReturn$ref: FragmentReference;
export type FlightServicesReturn = {|
  +inbound?: ?{|
    +$fragmentRefs: FlightServicesMenuItem$ref
  |},
  +outbound?: ?{|
    +$fragmentRefs: FlightServicesMenuItem$ref
  |},
  +$refType: FlightServicesReturn$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "FlightServicesMenuItem",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "FlightServicesReturn",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "InlineFragment",
      "type": "BookingReturn",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "inbound",
          "storageKey": null,
          "args": null,
          "concreteType": "Trip",
          "plural": false,
          "selections": v0
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "outbound",
          "storageKey": null,
          "args": null,
          "concreteType": "Trip",
          "plural": false,
          "selections": v0
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f87ee8c2014a64fa3d53f685dc287902';
module.exports = node;
