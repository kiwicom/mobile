/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type HotelDistance_hotel$ref: FragmentReference;
declare export opaque type HotelDistance_hotel$fragmentType: HotelDistance_hotel$ref;
export type HotelDistance_hotel = {|
  +distanceFromCenter: ?number,
  +$refType: HotelDistance_hotel$ref,
|};
export type HotelDistance_hotel$data = HotelDistance_hotel;
export type HotelDistance_hotel$key = {
  +$data?: HotelDistance_hotel$data,
  +$fragmentRefs: HotelDistance_hotel$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "HotelDistance_hotel",
  "type": "AllHotelsInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "distanceFromCenter",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3f3ee4ffb6dfe9189b9e421c18839bcf';
module.exports = node;
