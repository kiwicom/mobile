/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type AppleWalletPassenger$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AppleWallet$ref: FragmentReference;
export type AppleWallet = {|
  +pkpasses: ?$ReadOnlyArray<?{|
    +passenger: ?{|
      +databaseId: ?number
    |},
    +$fragmentRefs: AppleWalletPassenger$ref,
  |}>,
  +$refType: AppleWallet$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AppleWallet",
  "type": "BoardingPass",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "pkpasses",
      "storageKey": null,
      "args": null,
      "concreteType": "Pkpass",
      "plural": true,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "AppleWalletPassenger",
          "args": null
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
              "name": "databaseId",
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
(node/*: any*/).hash = '2cb43254bbc6c734f085a85c7b264914';
module.exports = node;
