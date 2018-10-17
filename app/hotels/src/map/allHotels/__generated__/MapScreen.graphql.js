/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type HotelSwipeList$ref = any;
type MapView$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type MapScreen$ref: FragmentReference;
export type MapScreen = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: MapView$ref & HotelSwipeList$ref,
  +$refType: MapScreen$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
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
(node/*: any*/).hash = '198cfa902f41b93273553afc4ced731d';
module.exports = node;
