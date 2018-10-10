/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type WalletPassenger$ref: FragmentReference;
export type WalletPassenger = {|
  +url: ?string,
  +passenger: ?{|
    +fullName: ?string,
    +databaseId: ?number,
  |},
  +$refType: WalletPassenger$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "WalletPassenger",
  "type": "Pkpass",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "url",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "passenger",
      "storageKey": null,
      "args": null,
      "concreteType": "Passenger",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "fullName",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "databaseId",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '29db6d6dae2f405a47adfd4a628b6a51';
module.exports = node;
