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
  +id: string,
  +minimalPrice: ?{|
    +amount: ?number,
    +currency: ?string,
  |},
  +incrementalPrice: ?$ReadOnlyArray<?{|
    +amount: ?number,
    +currency: ?string,
  |}>,
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
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
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
  "type": "HotelRoomAvailabilityInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    v0,
    {
      "kind": "FragmentSpread",
      "name": "RoomBadges_availableRoom",
      "args": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "minimalPrice",
      "storageKey": null,
      "args": null,
      "concreteType": "Price",
      "plural": false,
      "selections": v1
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "incrementalPrice",
      "storageKey": null,
      "args": null,
      "concreteType": "Price",
      "plural": true,
      "selections": v1
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
        v0,
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
            v0
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
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fbd7c495ebab8dc3c39eae6386da62a1';
module.exports = node;
