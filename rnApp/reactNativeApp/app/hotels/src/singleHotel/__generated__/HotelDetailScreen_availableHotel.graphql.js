/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type HotelDetailScreen_availableHotel = {|
  +hotel: ?{| |};
  +availableRooms: ?$ReadOnlyArray<?{| |}>;
|};


const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HotelDetailScreen_availableHotel",
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Hotel",
      "name": "hotel",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "HeaderContainer_hotel",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "LocationContainer_hotel",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "DescriptionContainer_hotel",
          "args": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "HotelRoomAvailability",
      "name": "availableRooms",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "RoomList",
          "args": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HotelAvailability"
};

module.exports = node;
