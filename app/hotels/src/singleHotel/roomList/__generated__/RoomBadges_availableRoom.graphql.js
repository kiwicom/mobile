/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type RoomBadges_availableRoom$ref: FragmentReference;
export type RoomBadges_availableRoom = {|
  +isBreakfastIncluded: ?boolean,
  +isRefundable: ?boolean,
  +$refType: RoomBadges_availableRoom$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "RoomBadges_availableRoom",
  "type": "HotelRoomAvailabilityInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isBreakfastIncluded",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isRefundable",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'daa0ecb11f27c4ff85420c25d988f6a4';
module.exports = node;
