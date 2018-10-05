/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BeddingInfo_room$ref = any;
type RoomBadges_availableRoom$ref = any;
type RoomRowTitle_room$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type RoomRow_availableRoom$ref: FragmentReference;
export type RoomRow_availableRoom = {|
  +originalId: ?string,
  +room: ?{|
    +description: ?{|
      +title: ?string
    |},
    +photos: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +highResUrl: ?string,
          +lowResUrl: ?string,
          +id: string,
        |}
      |}>
    |},
    +maxPersons: ?number,
    +$fragmentRefs: RoomRowTitle_room$ref & BeddingInfo_room$ref,
  |},
  +minimalPrice: ?{|
    +amount: ?number,
    +currency: ?string,
  |},
  +incrementalPrice: ?$ReadOnlyArray<?{|
    +amount: ?number,
    +currency: ?string,
  |}>,
  +$fragmentRefs: RoomBadges_availableRoom$ref,
  +$refType: RoomRow_availableRoom$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "amount",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "currency",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "RoomRow_availableRoom",
  "type": "HotelRoomAvailability",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "originalId",
      "args": null,
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
      "name": "room",
      "storageKey": null,
      "args": null,
      "concreteType": "HotelRoom",
      "plural": false,
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
        },
        {
          "kind": "FragmentSpread",
          "name": "RoomRowTitle_room",
          "args": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "photos",
          "storageKey": null,
          "args": null,
          "concreteType": "HotelRoomPhotoConnection",
          "plural": false,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "edges",
              "storageKey": null,
              "args": null,
              "concreteType": "HotelRoomPhotoEdge",
              "plural": true,
              "selections": [
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "node",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "HotelPhoto",
                  "plural": false,
                  "selections": [
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "highResUrl",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "lowResUrl",
                      "args": null,
                      "storageKey": null
                    },
                    {
                      "kind": "ScalarField",
                      "alias": null,
                      "name": "id",
                      "args": null,
                      "storageKey": null
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "maxPersons",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "BeddingInfo_room",
          "args": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "minimalPrice",
      "storageKey": null,
      "args": null,
      "concreteType": "Price",
      "plural": false,
      "selections": v0
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "incrementalPrice",
      "storageKey": null,
      "args": null,
      "concreteType": "Price",
      "plural": true,
      "selections": v0
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '64bb202d0291baafe462adeee69d93b8';
module.exports = node;
