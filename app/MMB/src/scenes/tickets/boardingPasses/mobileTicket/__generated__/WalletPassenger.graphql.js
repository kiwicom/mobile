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
    +fullName: ?string
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
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'fd0cebd051bc50e5cf19ba7451755c4c';
module.exports = node;
