/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type RoomBadges_availableRoom$ref: FragmentReference;
export type RoomBadges_availableRoom = {|
  +isBreakfastIncluded: ?boolean,
  +isRefundable: ?boolean,
  +$refType: RoomBadges_availableRoom$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "RoomBadges_availableRoom",
  "type": "HotelRoomAvailability",
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
(node/*: any*/).hash = 'cab91ec2f2ffb1204ce18c5b4f5af605';
module.exports = node;
