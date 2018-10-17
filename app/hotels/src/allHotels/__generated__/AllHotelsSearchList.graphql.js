/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AllHotelsSearchRow$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AllHotelsSearchList$ref: FragmentReference;
export type AllHotelsSearchList = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: AllHotelsSearchRow$ref,
  +$refType: AllHotelsSearchList$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AllHotelsSearchList",
  "type": "AllHotelsInterface",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "AllHotelsSearchRow",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3eee76d3f577bf07e2be1c15ad778705';
module.exports = node;
