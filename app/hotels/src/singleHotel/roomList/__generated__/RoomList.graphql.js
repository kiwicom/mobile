/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type RoomRow_availableRoom$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type RoomList$ref: FragmentReference;
export type RoomList = $ReadOnlyArray<{|
  +id: string,
  +$fragmentRefs: RoomRow_availableRoom$ref,
  +$refType: RoomList$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "RoomList",
  "type": "HotelRoomAvailability",
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
(node/*: any*/).hash = 'b8d84e7d3cff94502e4fcb20914d2ac9';
module.exports = node;
