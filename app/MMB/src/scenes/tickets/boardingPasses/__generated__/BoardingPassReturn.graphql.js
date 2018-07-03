/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FlightSegments$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BoardingPassReturn$ref: FragmentReference;
export type BoardingPassReturn = {|
  +outbound: ?{|
    +$fragmentRefs: FlightSegments$ref
  |},
  +inbound: ?{|
    +$fragmentRefs: FlightSegments$ref
  |},
  +$refType: BoardingPassReturn$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "FlightSegments",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "BoardingPassReturn",
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
      "selections": v0
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "inbound",
      "storageKey": null,
      "args": null,
      "concreteType": "Trip",
      "plural": false,
      "selections": v0
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '90e4f216e66e99c61c949412630598a1';
module.exports = node;
