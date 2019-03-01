/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type RoomRow_availableRoom$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type RoomList_data$ref: FragmentReference;
export type RoomList_data = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: RoomRow_availableRoom$ref,
  +$refType: RoomList_data$ref,
|}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "RoomList_data",
  "type": "HotelRoomAvailabilityInterface",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "RoomRow_availableRoom",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '16d35faa290c6d3a179c5ffe126447dd';
module.exports = node;
