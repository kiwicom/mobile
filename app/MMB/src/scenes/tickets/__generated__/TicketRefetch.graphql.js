/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BoardingPasses$ref = any;
type ETicket$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TicketRefetch$ref: FragmentReference;
export type TicketRefetch = {|
  +databaseId: ?number,
  +authToken: ?string,
  +assets: ?{|
    +$fragmentRefs: ETicket$ref
  |},
  +$fragmentRefs: BoardingPasses$ref,
  +$refType: TicketRefetch$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TicketRefetch",
  "type": "BookingInterface",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "authToken",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "BoardingPasses",
      "args": null
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
(node/*: any*/).hash = 'd917b9dbd810ed7fa870967012e0c350';
module.exports = node;
