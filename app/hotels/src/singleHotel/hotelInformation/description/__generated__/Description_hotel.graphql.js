/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Amenities$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Description_hotel$ref: FragmentReference;
export type Description_hotel = {|
  +summary: ?string,
  +$fragmentRefs: Amenities$ref,
  +$refType: Description_hotel$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "Description_hotel",
  "type": "HotelInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "summary",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Amenities",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a4a2a7f7fb192b8fbaa51890d01db222';
module.exports = node;
