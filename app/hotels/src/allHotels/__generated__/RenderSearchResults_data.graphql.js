/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type AllHotelsSearchList_data$ref = any;
type MapScreen_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type RenderSearchResults_data$ref: FragmentReference;
export type RenderSearchResults_data = $ReadOnlyArray<{|
  +$fragmentRefs: AllHotelsSearchList_data$ref & MapScreen_data$ref,
  +$refType: RenderSearchResults_data$ref,
|}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "RenderSearchResults_data",
  "type": "AllHotelsInterface",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "AllHotelsSearchList_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "MapScreen_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '6f245112b0fcea113e24e1b91da3d848';
module.exports = node;
