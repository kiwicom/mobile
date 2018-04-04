/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BookNow_availableRooms$ref = any;
type BookNow_hotel$ref = any;
type Header_hotel$ref = any;
type HotelInformation_hotel$ref = any;
type RoomList$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type HotelDetailScreen_availableHotel$ref: FragmentReference;
export type HotelDetailScreen_availableHotel = {|
  +hotel: ?{|
    +$fragmentRefs: (Header_hotel$ref & BookNow_hotel$ref & HotelInformation_hotel$ref),
  |},
  +availableRooms: ?$ReadOnlyArray<?{|
    +$fragmentRefs: (RoomList$ref & BookNow_availableRooms$ref),
  |}>,
  +$refType: HotelDetailScreen_availableHotel$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "HotelDetailScreen_availableHotel",
  "type": "HotelAvailability",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "hotel",
      "storageKey": null,
      "args": null,
      "concreteType": "Hotel",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Header_hotel",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "BookNow_hotel",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "HotelInformation_hotel",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "availableRooms",
      "storageKey": null,
      "args": null,
      "concreteType": "HotelRoomAvailability",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "RoomList",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "BookNow_availableRooms",
          "args": null
        }
      ]
    }
  ]
};
(node/*: any*/).hash = 'bb740e85b1d4abf7b6ea3f2f85d361a8';
module.exports = node;
