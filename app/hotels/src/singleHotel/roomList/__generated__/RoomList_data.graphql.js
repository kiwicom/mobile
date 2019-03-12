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
  +selectedCount: ?number,
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "selectedCount",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e1c4f03dc4beca8cf570e6ef25a0b391';
module.exports = node;
