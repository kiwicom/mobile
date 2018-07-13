/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type EnterDetailsTimelineEvent$ref: FragmentReference;
export type EnterDetailsTimelineEvent = {|
  +timestamp: ?any,
  +$refType: EnterDetailsTimelineEvent$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "EnterDetailsTimelineEvent",
  "type": "EnterDetailsTimelineEvent",
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
(node/*: any*/).hash = '5a2c81f3fdc9fe459f1cc812bf316623';
module.exports = node;
