/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TimeToCheckinTimelineEvent$ref: FragmentReference;
export type TimeToCheckinTimelineEvent = {|
  +timestamp: ?any,
  +$refType: TimeToCheckinTimelineEvent$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TimeToCheckinTimelineEvent",
  "type": "TimeToCheckinTimelineEvent",
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
(node/*: any*/).hash = 'd4c9916ac64fa223146ce7833ac2cddd';
module.exports = node;
