/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FlightList$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FlightListContainer_past$ref: FragmentReference;
export type FlightListContainer_past = {|
  +$fragmentRefs: FlightList$ref,
  +$refType: FlightListContainer_past$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FlightListContainer_past",
  "type": "BookingInterfaceConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "FlightList",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '7409e6b388d5af22f73a6783a4b64a2f';
module.exports = node;
