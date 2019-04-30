/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type BeddingInfo_room$ref = any;
type RoomBadges_availableRoom$ref = any;
type RoomRowTitle_room$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type RoomRow_availableRoom$ref: FragmentReference;
declare export opaque type RoomRow_availableRoom$fragmentType: RoomRow_availableRoom$ref;
export type RoomRow_availableRoom = {|
  +id: string,
  +selectedCount: ?number,
  +minimalCost: ?{|
    +amount: ?string,
    +currencyId: ?string,
  |},
  +availableRoomsCount: ?number,
  +room: ?{|
    +id: string,
    +description: ?{|
      +title: ?string
    |},
    +roomPhotos: ?$ReadOnlyArray<?{|
      +highResUrl: ?string,
      +lowResUrl: ?string,
      +id: string,
    |}>,
    +maxPersons: ?number,
    +$fragmentRefs: RoomRowTitle_room$ref & BeddingInfo_room$ref,
  |},
  +$fragmentRefs: RoomBadges_availableRoom$ref,
  +$refType: RoomRow_availableRoom$ref,
|};
export type RoomRow_availableRoom$data = RoomRow_availableRoom;
export type RoomRow_availableRoom$key = {
  +$data?: RoomRow_availableRoom$data,
  +$fragmentRefs: RoomRow_availableRoom$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "RoomRow_availableRoom",
  "type": "HotelRoomAvailabilityInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "minimalCost",
      "storageKey": null,
      "args": null,
      "concreteType": "Money",
      "plural": false,
      "selections": [
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
          "name": "currencyId",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "availableRoomsCount",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "room",
      "storageKey": null,
      "args": null,
      "concreteType": null,
      "plural": false,
      "selections": [
        (v0/*: any*/),
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
          "kind": "LinkedField",
          "alias": null,
          "name": "roomPhotos",
          "storageKey": null,
          "args": null,
          "concreteType": "HotelPhoto",
          "plural": true,
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
            (v0/*: any*/)
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
          "name": "RoomRowTitle_room",
          "args": null
        },
        {
          "kind": "FragmentSpread",
          "name": "BeddingInfo_room",
          "args": null
        }
      ]
    },
    {
      "kind": "FragmentSpread",
      "name": "RoomBadges_availableRoom",
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '11decfc5905b4d8b51f8aea1b345b817';
module.exports = node;
