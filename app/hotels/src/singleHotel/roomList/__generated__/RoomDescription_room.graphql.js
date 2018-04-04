/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type RoomDescription_room$ref: FragmentReference;
export type RoomDescription_room = {|
  +description: ?{|
    +text: ?string,
  |},
  +$refType: RoomDescription_room$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "RoomDescription_room",
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
          "name": "text",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node/*: any*/).hash = 'e8d0d5917d3e762e92e344dc27b4d946';
module.exports = node;
