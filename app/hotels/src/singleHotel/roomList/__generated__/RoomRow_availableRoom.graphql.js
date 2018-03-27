/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteFragment } from 'relay-runtime';
export type RoomRow_availableRoom = {|
  +originalId: ?string;
  +room: ?{|
    +description: ?{|
      +title: ?string;
    |};
    +photos: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +thumbnailUrl: ?string;
          +highResUrl: ?string;
          +lowResUrl: ?string;
          +id: string;
        |};
      |}>;
    |};
    +maxPersons: ?number;
  |};
  +minimalPrice: ?{|
    +amount: ?number;
    +currency: ?string;
  |};
  +incrementalPrice: ?$ReadOnlyArray<?{|
    +amount: ?number;
    +currency: ?string;
  |}>;
|};


const node: ConcreteFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoomRow_availableRoom",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "originalId",
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "RoomBadges_availableRoom",
      "args": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "HotelRoom",
      "name": "room",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "HotelRoomDescription",
          "name": "description",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "args": null,
              "name": "title",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "RoomRowTitle_room",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "RoomDescription_room",
          "args": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "args": null,
          "concreteType": "HotelRoomPhotoConnection",
          "name": "photos",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "args": null,
              "concreteType": "HotelRoomPhotoEdge",
              "name": "edges",
              "plural": true,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "args": null,
                  "concreteType": "HotelPhoto",
                  "name": "node",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "args": null,
                      "name": "thumbnailUrl",
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "args": null,
                      "name": "highResUrl",
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "args": null,
                      "name": "lowResUrl",
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "args": null,
                      "name": "id",
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "maxPersons",
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "BeddingInfo_room",
          "args": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Price",
      "name": "minimalPrice",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "amount",
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "currency",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "args": null,
      "concreteType": "Price",
      "name": "incrementalPrice",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "amount",
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "currency",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "HotelRoomAvailability"
};

module.exports = node;
