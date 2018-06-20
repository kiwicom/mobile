/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type LeaveForAirportTimelineEvent$ref: FragmentReference;
export type LeaveForAirportTimelineEvent = {|
  +timestamp: ?any,
  +$refType: LeaveForAirportTimelineEvent$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "LeaveForAirportTimelineEvent",
  "type": "LeaveForAirportTimelineEvent",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "timestamp",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '7af5620314738678da8721a811e1ee21';
module.exports = node;
