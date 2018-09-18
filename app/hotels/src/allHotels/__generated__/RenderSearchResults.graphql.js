/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AllHotelsSearchList_data$ref = any;
type MapScreen$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type RenderSearchResults$ref: FragmentReference;
export type RenderSearchResults = {|
  +$fragmentRefs: AllHotelsSearchList_data$ref & MapScreen$ref,
  +$refType: RenderSearchResults$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "RenderSearchResults",
  "type": "RootQuery",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "AllHotelsSearchList_data",
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
(node/*: any*/).hash = '4ff37e2c888ba651167975f92e09101d';
module.exports = node;
