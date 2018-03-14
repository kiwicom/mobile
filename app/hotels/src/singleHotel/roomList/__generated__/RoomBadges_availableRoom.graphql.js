/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type RoomBadges_availableRoom = {|
  +isBreakfastIncluded: ?boolean;
  +isRefundable: ?boolean;
|};


const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoomBadges_availableRoom",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "isBreakfastIncluded",
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "isRefundable",
      "storageKey": null
    }
  ],
  "type": "HotelRoomAvailability"
};

module.exports = node;
