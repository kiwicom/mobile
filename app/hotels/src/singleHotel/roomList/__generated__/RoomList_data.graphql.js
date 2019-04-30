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
declare export opaque type RoomList_data$fragmentType: RoomList_data$ref;
export type RoomList_data = {|
  +availableRooms: ?$ReadOnlyArray<?{|
    +id: string,
    +selectedCount: ?number,
    +$fragmentRefs: RoomRow_availableRoom$ref,
  |}>,
  +$refType: RoomList_data$ref,
|};
export type RoomList_data$data = RoomList_data;
export type RoomList_data$key = {
  +$data?: RoomList_data$data,
  +$fragmentRefs: RoomList_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "RoomList_data",
  "type": "HotelAvailabilityInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "availableRooms",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": true,
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
          "kind": "ClientExtension",
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "selectedCount",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b69aa45a655909096114a8215dc265a3';
module.exports = node;
