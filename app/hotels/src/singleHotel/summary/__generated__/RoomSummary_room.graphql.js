/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type SummaryButtons_rooms$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type RoomSummary_room$ref: FragmentReference;
export type RoomSummary_room = {|
  +availableRooms: ?$ReadOnlyArray<?{|
    +selectedCount: ?number,
    +incrementalPriceWithExtraCharges: ?$ReadOnlyArray<?{|
      +price: ?{|
        +amount: ?number,
        +currency: ?string,
      |}
    |}>,
    +room: ?{|
      +maxPersons: ?number
    |},
  |}>,
  +$fragmentRefs: SummaryButtons_rooms$ref,
  +$refType: RoomSummary_room$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "RoomSummary_room",
  "type": "HotelAvailabilityInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "SummaryButtons_rooms",
      "args": null
    },
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
          "name": "selectedCount",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "incrementalPriceWithExtraCharges",
          "storageKey": null,
          "args": null,
          "concreteType": "HotelPrice",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "price",
              "storageKey": null,
              "args": null,
              "concreteType": "Price",
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
                  "name": "currency",
                  "args": null,
                  "storageKey": null
                }
              ]
            }
          ]
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
              "kind": "ScalarField",
              "alias": null,
              "name": "maxPersons",
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
(node/*: any*/).hash = 'e7b9af5142900f1bafcdadd3ca411c04';
module.exports = node;
