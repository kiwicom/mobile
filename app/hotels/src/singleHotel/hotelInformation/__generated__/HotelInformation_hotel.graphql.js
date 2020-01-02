/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
type Description_hotel$ref = any;
type HotelReview_data$ref = any;
type Location_hotel$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HotelInformation_hotel$ref: FragmentReference;
declare export opaque type HotelInformation_hotel$fragmentType: HotelInformation_hotel$ref;
export type HotelInformation_hotel = {|
  +$fragmentRefs: Location_hotel$ref & Description_hotel$ref & HotelReview_data$ref,
  +$refType: HotelInformation_hotel$ref,
|};
export type HotelInformation_hotel$data = HotelInformation_hotel;
export type HotelInformation_hotel$key = {
  +$data?: HotelInformation_hotel$data,
  +$fragmentRefs: HotelInformation_hotel$ref,
  ...
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "HotelInformation_hotel",
  "type": "HotelInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Location_hotel",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Description_hotel",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "HotelReview_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node: any).hash = '4ab25a826f030bc539e6e7084da6db67';
export default node;
