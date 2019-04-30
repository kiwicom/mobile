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
  +description: ?{|
    +title: ?string
  |},
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
  "type": "HotelRoomInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "description",
      "storageKey": null,
      "args": null,
      "concreteType": "HotelRoomDescription",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "title",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '63a12a56a624f00c988b45ff029482cc';
module.exports = node;
