/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type BookedFlightTimelineEvent$ref: FragmentReference;
export type BookedFlightTimelineEvent = {|
  +timestamp: ?any,
  +$refType: BookedFlightTimelineEvent$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BookedFlightTimelineEvent",
  "type": "BookedFlightTimelineEvent",
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
(node/*: any*/).hash = '44d5e557f82e847a9f06b0429480376a';
module.exports = node;
