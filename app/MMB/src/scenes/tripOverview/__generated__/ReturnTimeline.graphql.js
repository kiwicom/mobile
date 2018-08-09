/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Timeline$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ReturnTimeline$ref: FragmentReference;
export type ReturnTimeline = {|
  +outbound: ?{|
    +$fragmentRefs: Timeline$ref
  |},
  +inbound: ?{|
    +$fragmentRefs: Timeline$ref
  |},
  +$refType: ReturnTimeline$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "Timeline",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "ReturnTimeline",
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
(node/*: any*/).hash = '77deb8f676be76d1054c827732712eec';
module.exports = node;
