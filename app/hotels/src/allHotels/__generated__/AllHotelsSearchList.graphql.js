/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type AllHotelsSearchRow$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AllHotelsSearchList$ref: FragmentReference;
export type AllHotelsSearchList = $ReadOnlyArray<{|
  +id: string,
  +hotelId: ?string,
  +$fragmentRefs: AllHotelsSearchRow$ref,
  +$refType: AllHotelsSearchList$ref,
|}>;
*/


const node/*: ReaderFragment*/ = {
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hotelId",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a5c6871335e7fdaa11bfe7a769eb8a88';
module.exports = node;
