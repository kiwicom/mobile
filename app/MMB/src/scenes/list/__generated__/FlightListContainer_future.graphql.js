/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type FlightList$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FlightListContainer_future$ref: FragmentReference;
export type FlightListContainer_future = {|
  +$fragmentRefs: FlightList$ref,
  +$refType: FlightListContainer_future$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "FlightListContainer_future",
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
(node/*: any*/).hash = '7ae9d6ade8bd94c3e77052c327fdcd65';
module.exports = node;
