/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type RoomSummary_room$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BookingSummary_room$ref: FragmentReference;
declare export opaque type BookingSummary_room$fragmentType: BookingSummary_room$ref;
export type BookingSummary_room = {|
  +$fragmentRefs: RoomSummary_room$ref,
  +$refType: BookingSummary_room$ref,
|};
export type BookingSummary_room$data = BookingSummary_room;
export type BookingSummary_room$key = {
  +$data?: BookingSummary_room$data,
  +$fragmentRefs: BookingSummary_room$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "BookingSummary_room",
  "type": "HotelAvailabilityInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "RoomSummary_room",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '438e6c9b528be9f96aa1a34de5930da9';
module.exports = node;
