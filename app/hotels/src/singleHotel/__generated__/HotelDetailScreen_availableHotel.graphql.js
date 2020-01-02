/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
type BookingSummary_room$ref = any;
type Header_hotel$ref = any;
type HotelInformation_hotel$ref = any;
type RoomList_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type HotelDetailScreen_availableHotel$ref: FragmentReference;
declare export opaque type HotelDetailScreen_availableHotel$fragmentType: HotelDetailScreen_availableHotel$ref;
export type HotelDetailScreen_availableHotel = {|
  +hotel: ?{|
    +$fragmentRefs: Header_hotel$ref & HotelInformation_hotel$ref
  |},
  +$fragmentRefs: BookingSummary_room$ref & RoomList_data$ref,
  +$refType: HotelDetailScreen_availableHotel$ref,
|};
export type HotelDetailScreen_availableHotel$data = HotelDetailScreen_availableHotel;
export type HotelDetailScreen_availableHotel$key = {
  +$data?: HotelDetailScreen_availableHotel$data,
  +$fragmentRefs: HotelDetailScreen_availableHotel$ref,
  ...
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "HotelDetailScreen_availableHotel",
  "type": "HotelAvailabilityInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "hotel",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Header_hotel",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "HotelInformation_hotel",
          "args": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "BookingSummary_room",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "RoomList_data",
      "args": null
    }
  ]
};
// prettier-ignore
(node: any).hash = 'cb51b65ce808f30cd94bf90eb32a91df';
export default node;
