/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Amenities_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Description_hotel$ref: FragmentReference;
export type Description_hotel = {|
  +summary: ?string,
  +$fragmentRefs: Amenities_data$ref,
  +$refType: Description_hotel$ref,
|};
*/


const node/*: ReaderFragment*/ = {
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
      "name": "Amenities_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '4763051216be9c6d70e158bf7572ce14';
module.exports = node;
