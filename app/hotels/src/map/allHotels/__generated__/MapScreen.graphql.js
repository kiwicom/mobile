/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type HotelSwipeList$ref = any;
type MapView$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MapScreen$ref: FragmentReference;
export type MapScreen = $ReadOnlyArray<{|
  +id: string,
  +hotelId: ?string,
  +$fragmentRefs: MapView$ref & HotelSwipeList$ref,
  +$refType: MapScreen$ref,
|}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "MapScreen",
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
      "name": "MapView",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "HotelSwipeList",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '6ee118ef2da5858b66aa07648b7ae804';
module.exports = node;
