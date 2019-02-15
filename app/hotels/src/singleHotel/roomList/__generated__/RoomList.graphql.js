/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type RoomRow_availableRoom$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type RoomList$ref: FragmentReference;
export type RoomList = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: RoomRow_availableRoom$ref,
  +$refType: RoomList$ref,
|}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "RoomList",
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
(node/*: any*/).hash = '4345156d4d91f74aa72076a9623f9f7d';
module.exports = node;
