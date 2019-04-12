/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type HotelTitle_data$ref = any;
type SearchRowContent_hotel$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AllHotelsSearchRow_data$ref: FragmentReference;
export type AllHotelsSearchRow_data = {|
  +hotelId: ?string,
  +$fragmentRefs: HotelTitle_data$ref & SearchRowContent_hotel$ref,
  +$refType: AllHotelsSearchRow_data$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "AllHotelsSearchRow_data",
  "type": "AllHotelsInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "HotelTitle_data",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "SearchRowContent_hotel",
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
(node/*: any*/).hash = '385f7e8b114506ce1d552de465105978';
module.exports = node;
