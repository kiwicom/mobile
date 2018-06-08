/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type StatusBarIcon$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type StatusBar$ref: FragmentReference;
export type StatusBar = {|
  +databaseId: ?number,
  +$fragmentRefs: StatusBarIcon$ref,
  +$refType: StatusBar$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "StatusBar",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "StatusBarIcon",
      "args": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "databaseId",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '7b07e3e0c7a03027bae48fd7f88b4ff1';
module.exports = node;
