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
export type SummaryButtons_rooms = {|
  +$fragmentRefs: BookNow_rooms$ref,
  +$refType: SummaryButtons_rooms$ref,
|};
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
