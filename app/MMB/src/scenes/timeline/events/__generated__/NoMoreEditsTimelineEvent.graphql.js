/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type NoMoreEditsTimelineEvent$ref: FragmentReference;
export type NoMoreEditsTimelineEvent = {|
  +timestamp: ?any,
  +$refType: NoMoreEditsTimelineEvent$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "NoMoreEditsTimelineEvent",
  "type": "NoMoreEditsTimelineEvent",
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
(node/*: any*/).hash = 'dc53edfd90784e543cfe0cd7ad647188';
module.exports = node;
