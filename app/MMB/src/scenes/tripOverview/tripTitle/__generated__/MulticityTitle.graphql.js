/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type MulticityName$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MulticityTitle$ref: FragmentReference;
export type MulticityTitle = {|
  +departure: ?{|
    +$fragmentRefs: MulticityName$ref
  |},
  +arrival: ?{|
    +$fragmentRefs: MulticityName$ref
  |},
  +$refType: MulticityTitle$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "FragmentSpread",
    "name": "MulticityName",
    "args": null
  }
];
return {
  "kind": "Fragment",
  "name": "MulticityTitle",
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
(node/*: any*/).hash = '0bfef22b68642d05116d1faa907ec255';
module.exports = node;
