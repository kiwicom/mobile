/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type HotelSwipeList_data$ref = any;
type MapView_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MapScreen_data$ref: FragmentReference;
export type MapScreen_data = $ReadOnlyArray<{|
  +id: string,
  +hotelId: ?string,
  +$fragmentRefs: MapView_data$ref & HotelSwipeList_data$ref,
  +$refType: MapScreen_data$ref,
|}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MapScreen_data",
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
      "name": "MapView_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "HotelSwipeList_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '5d2e2c5c45e1d83d218bacf24ed5a0e8';
module.exports = node;
