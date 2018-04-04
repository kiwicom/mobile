/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type BookNow_availableRooms$ref: FragmentReference;
export type BookNow_availableRooms = $ReadOnlyArray<{|
  +originalId: ?string,
  +incrementalPrice: ?$ReadOnlyArray<?{|
    +amount: ?number,
    +currency: ?string,
  |}>,
  +$refType: BookNow_availableRooms$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BookNow_availableRooms",
  "type": "HotelRoomAvailability",
  "metadata": {
    "plural": true
  },
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
      "kind": "LinkedField",
      "alias": null,
      "name": "incrementalPrice",
      "storageKey": null,
      "args": null,
      "concreteType": "Price",
      "plural": true,
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
};
(node/*: any*/).hash = '20da5274c235be9074e40e81b1647de0';
module.exports = node;
