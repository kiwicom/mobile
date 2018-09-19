/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type RoomRowTitle_room$ref: FragmentReference;
export type RoomRowTitle_room = {|
  +description: ?{|
    +title: ?string
  |},
  +$refType: RoomRowTitle_room$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "RoomRowTitle_room",
  "type": "HotelRoom",
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
(node/*: any*/).hash = '1f0ae1b53499b83972de5c5c85758cd3';
module.exports = node;
