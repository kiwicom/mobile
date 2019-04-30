/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type AllHotelsSearchRow_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AllHotelsSearchList_data$ref: FragmentReference;
declare export opaque type AllHotelsSearchList_data$fragmentType: AllHotelsSearchList_data$ref;
export type AllHotelsSearchList_data = $ReadOnlyArray<{|
  +id: string,
  +hotelId: ?string,
  +$fragmentRefs: AllHotelsSearchRow_data$ref,
  +$refType: AllHotelsSearchList_data$ref,
|}>;
export type AllHotelsSearchList_data$data = AllHotelsSearchList_data;
export type AllHotelsSearchList_data$key = {
  +$data?: AllHotelsSearchList_data$data,
  +$fragmentRefs: AllHotelsSearchList_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "AllHotelsSearchList_data",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "hotelId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "AllHotelsSearchRow_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '75f6ebe8799667fb041b0e2cd525faab';
module.exports = node;
