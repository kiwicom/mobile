/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type WalletPassenger$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TicketList$ref: FragmentReference;
export type TicketList = {|
  +flightNumber: ?string,
  +pkpasses: ?$ReadOnlyArray<?{|
    +passenger: ?{|
      +databaseId: ?number
    |},
    +$fragmentRefs: WalletPassenger$ref,
  |}>,
  +$refType: TicketList$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TicketList",
  "type": "BoardingPass",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "flightNumber",
      "args": null,
      "storageKey": null
    },
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
          "name": "WalletPassenger",
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
(node/*: any*/).hash = '51fd314afde996265961adf6a096204b';
module.exports = node;
