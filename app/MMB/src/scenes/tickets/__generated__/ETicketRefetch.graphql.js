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
  +databaseId: ?number,
  +assets: ?{|
    +$fragmentRefs: ETicket$ref
  |},
  +$refType: ETicketRefetch$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ETicketRefetch",
  "type": "Booking",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "databaseId",
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
(node/*: any*/).hash = 'b3aab37e77ce73eb1dcfc038632deca3';
module.exports = node;
