/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type OutboundFlights$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BoardingPassReturn$ref: FragmentReference;
export type BoardingPassReturn = {|
  +$fragmentRefs: OutboundFlights$ref,
  +$refType: BoardingPassReturn$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BoardingPassReturn",
  "type": "BookingReturn",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "OutboundFlights",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '6db725bea412141076147b589d9d82d1';
module.exports = node;
