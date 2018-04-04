/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type RoomRowTitle_room$ref: FragmentReference;
export type RoomRowTitle_room = {|
  +roomSize: ?number,
  +description: ?{|
    +title: ?string,
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
      "kind": "ScalarField",
      "alias": null,
      "name": "roomSize",
      "args": null,
      "storageKey": null
    },
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
(node/*: any*/).hash = 'c4cdfeeecc326e0d204dfb5acfdd9a8c';
module.exports = node;
