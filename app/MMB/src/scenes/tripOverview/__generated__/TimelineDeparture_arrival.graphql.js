/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type TimelineTerminal$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TimelineDeparture_arrival$ref: FragmentReference;
export type TimelineDeparture_arrival = {|
  +$fragmentRefs: TimelineTerminal$ref,
  +$refType: TimelineDeparture_arrival$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TimelineDeparture_arrival",
  "type": "RouteStop",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "TimelineTerminal",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '23e592bf5a17bf6d70d38bc250309fcc';
module.exports = node;
