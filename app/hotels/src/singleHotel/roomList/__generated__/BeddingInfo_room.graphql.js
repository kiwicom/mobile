/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type BeddingInfo_room$ref: FragmentReference;
export type BeddingInfo_room = {|
  +maxPersons: ?number,
  +bedding: ?$ReadOnlyArray<?{|
    +type: ?string,
    +amount: ?number,
  |}>,
  +$refType: BeddingInfo_room$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BeddingInfo_room",
  "type": "HotelRoom",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "maxPersons",
      "args": null,
      "storageKey": null
    },
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
};
// prettier-ignore
(node/*: any*/).hash = 'c0c0c0f1049ab0c202880384f2205488';
module.exports = node;
