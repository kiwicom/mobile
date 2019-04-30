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
declare export opaque type RoomSummary_room$fragmentType: RoomSummary_room$ref;
export type RoomSummary_room = {|
  +availableRooms: ?$ReadOnlyArray<?{|
    +id: string,
    +selectedCount: ?number,
    +incrementalPriceWithExtraCharges: ?$ReadOnlyArray<?{|
      +total: ?{|
        +amount: ?string,
        +currencyId: ?string,
      |},
      +extraCharges: ?$ReadOnlyArray<?{|
        +excluded: ?boolean,
        +amount: ?string,
        +name: ?string,
        +chargeAmount: ?string,
        +type: ?string,
      |}>,
    |}>,
    +room: ?{|
      +description: ?{|
        +title: ?string
      |},
      +maxPersons: ?number,
    |},
  |}>,
  +$fragmentRefs: SummaryButtons_rooms$ref,
  +$refType: RoomSummary_room$ref,
|};
export type RoomSummary_room$data = RoomSummary_room;
export type RoomSummary_room$key = {
  +$data?: RoomSummary_room$data,
  +$fragmentRefs: RoomSummary_room$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "amount",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "RoomSummary_room",
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
              "name": "total",
              "storageKey": null,
              "args": null,
              "concreteType": "Money",
              "plural": false,
              "selections": [
                (v0/*: any*/),
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
              "kind": "LinkedField",
              "alias": null,
              "name": "extraCharges",
              "storageKey": null,
              "args": null,
              "concreteType": "ExtraCharges",
              "plural": true,
              "selections": [
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "excluded",
                  "args": null,
                  "storageKey": null
                },
                (v0/*: any*/),
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "name",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "chargeAmount",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "type",
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
              "kind": "ScalarField",
              "alias": null,
              "name": "maxPersons",
              "args": null,
              "storageKey": null
            }
          ]
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
    },
    {
      "kind": "FragmentSpread",
      "name": "SummaryButtons_rooms",
      "args": null
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'edcb6904918686e2753f65bd4793d4db';
module.exports = node;
