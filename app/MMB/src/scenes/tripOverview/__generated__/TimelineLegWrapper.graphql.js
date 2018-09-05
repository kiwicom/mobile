/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type TripStopOver$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TimelineLegWrapper$ref: FragmentReference;
export type TimelineLegWrapper = {|
  +$fragmentRefs: TripStopOver$ref,
  +$refType: TimelineLegWrapper$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TimelineLegWrapper",
  "type": "Leg",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "TripStopOver",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a600684d240a41a3ab9efd92499d322a';
module.exports = node;
