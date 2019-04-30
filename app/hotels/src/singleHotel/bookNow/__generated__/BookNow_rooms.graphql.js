/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type BookNow_rooms$ref: FragmentReference;
declare export opaque type BookNow_rooms$fragmentType: BookNow_rooms$ref;
export type BookNow_rooms = {|
  +availableRooms: ?$ReadOnlyArray<?{|
    +id: string,
    +selectedCount: ?number,
  |}>,
  +$refType: BookNow_rooms$ref,
|};
export type BookNow_rooms$data = BookNow_rooms;
export type BookNow_rooms$key = {
  +$data?: BookNow_rooms$data,
  +$fragmentRefs: BookNow_rooms$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "BookNow_rooms",
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
(node/*: any*/).hash = '24429e1f536ae44a56158a8e96c70544';
module.exports = node;
