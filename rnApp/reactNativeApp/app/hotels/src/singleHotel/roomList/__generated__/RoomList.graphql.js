/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type RoomList = $ReadOnlyArray<{|
  +id: string;
|}>;


const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "RoomList",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "id",
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "RoomRowContainer_availableRoom",
      "args": null
    }
  ],
  "type": "HotelRoomAvailability"
};

module.exports = node;
