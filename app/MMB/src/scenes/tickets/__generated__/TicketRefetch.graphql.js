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
  +id: string,
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
      "name": "id",
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
(node/*: any*/).hash = 'aa36dfaaf38afd496cb88e83da113cfb';
module.exports = node;
