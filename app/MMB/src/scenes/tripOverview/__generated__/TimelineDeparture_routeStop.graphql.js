/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type TimelineTitle$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TimelineDeparture_routeStop$ref: FragmentReference;
export type TimelineDeparture_routeStop = {|
  +$fragmentRefs: TimelineTitle$ref,
  +$refType: TimelineDeparture_routeStop$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TimelineDeparture_routeStop",
  "type": "RouteStop",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "TimelineTitle",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'c0bad4d05dbe1572194c7592c67abbe1';
module.exports = node;
