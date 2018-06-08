/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ETicket$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ETicketRefetch$ref: FragmentReference;
export type ETicketRefetch = {|
  +id: string,
  +assets: ?{|
    +$fragmentRefs: ETicket$ref
  |},
  +$refType: ETicketRefetch$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ETicketRefetch",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
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
      "name": "assets",
      "storageKey": null,
      "args": null,
      "concreteType": "BookingAssets",
      "plural": false,
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "ETicket",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a9bb89a2264299ce50c4b189db1a953a';
module.exports = node;
