/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type RoomRowTitle_room$ref: FragmentReference;
declare export opaque type RoomRowTitle_room$fragmentType: RoomRowTitle_room$ref;
export type RoomRowTitle_room = {|
  +name: ?string,
  +$refType: RoomRowTitle_room$ref,
|};
export type RoomRowTitle_room$data = RoomRowTitle_room;
export type RoomRowTitle_room$key = {
  +$data?: RoomRowTitle_room$data,
  +$fragmentRefs: RoomRowTitle_room$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "RoomRowTitle_room",
  "type": "HotelRoomAvailabilityInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1bdb6a540a5a35081cb9fcff82e12fc2';
module.exports = node;
