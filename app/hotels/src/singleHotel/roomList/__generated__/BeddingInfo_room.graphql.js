/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type BeddingInfo_room$ref: FragmentReference;
declare export opaque type BeddingInfo_room$fragmentType: BeddingInfo_room$ref;
export type BeddingInfo_room = {|
  +maxOccupancy: ?number,
  +room: ?{|
    +bedding: ?$ReadOnlyArray<?{|
      +type: ?string,
      +amount: ?number,
    |}>
  |},
  +$refType: BeddingInfo_room$ref,
|};
export type BeddingInfo_room$data = BeddingInfo_room;
export type BeddingInfo_room$key = {
  +$data?: BeddingInfo_room$data,
  +$fragmentRefs: BeddingInfo_room$ref,
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "BeddingInfo_room",
  "type": "HotelRoomAvailabilityInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "maxOccupancy",
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
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "bedding",
          "storageKey": null,
          "args": null,
          "concreteType": "HotelRoomBedding",
          "plural": true,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "type",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "amount",
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
(node: any).hash = '619549d31e5072173988bbd05e3051bb';
export default node;
