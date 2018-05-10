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
  "type": "BookingConnection",
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
(node/*: any*/).hash = 'bbc769249a6c84701f4e6f8b2191c4ab';
module.exports = node;
