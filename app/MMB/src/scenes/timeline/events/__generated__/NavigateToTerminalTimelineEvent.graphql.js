/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type NavigateToTerminalTimelineEvent$ref: FragmentReference;
export type NavigateToTerminalTimelineEvent = {|
  +timestamp: ?any,
  +$refType: NavigateToTerminalTimelineEvent$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "NavigateToTerminalTimelineEvent",
  "type": "NavigateToTerminalTimelineEvent",
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
(node/*: any*/).hash = 'eb80313c430c2ae1b06271a09b5e0844';
module.exports = node;
