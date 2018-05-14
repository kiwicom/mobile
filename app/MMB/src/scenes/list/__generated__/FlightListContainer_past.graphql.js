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
(node/*: any*/).hash = 'c5c19e1c9f740fea4e7eabf8df4ff1e4';
module.exports = node;
