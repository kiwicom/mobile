/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CheckinClosingTimelineEvent$ref: FragmentReference;
export type CheckinClosingTimelineEvent = {|
  +timestamp: ?any,
  +$refType: CheckinClosingTimelineEvent$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "CheckinClosingTimelineEvent",
  "type": "CheckinClosingTimelineEvent",
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
(node/*: any*/).hash = 'eea9f60d81aeb4598ff611bbf1cd40be';
module.exports = node;
