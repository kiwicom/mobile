/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AllHotelsSearchList$ref = any;
type MapScreen$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type RenderSearchResults$ref: FragmentReference;
export type RenderSearchResults = $ReadOnlyArray<{|
  +$fragmentRefs: AllHotelsSearchList$ref & MapScreen$ref,
  +$refType: RenderSearchResults$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "RenderSearchResults",
  "type": "AllHotelsInterface",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "AllHotelsSearchList",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "MapScreen",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a30f51e63d22db00429c35b07eacc214';
module.exports = node;
