/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type BookNow_rooms$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type SummaryButtons_rooms$ref: FragmentReference;
declare export opaque type SummaryButtons_rooms$fragmentType: SummaryButtons_rooms$ref;
export type SummaryButtons_rooms = {|
  +$fragmentRefs: BookNow_rooms$ref,
  +$refType: SummaryButtons_rooms$ref,
|};
export type SummaryButtons_rooms$data = SummaryButtons_rooms;
export type SummaryButtons_rooms$key = {
  +$data?: SummaryButtons_rooms$data,
  +$fragmentRefs: SummaryButtons_rooms$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "SummaryButtons_rooms",
  "type": "HotelAvailabilityInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "BookNow_rooms",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '322e25390d6a8ff2c2c71c8a59c6eaeb';
module.exports = node;
