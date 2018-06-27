/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TransportFromAirportTimelineEvent$ref: FragmentReference;
export type TransportFromAirportTimelineEvent = {|
  +timestamp: ?any,
  +$refType: TransportFromAirportTimelineEvent$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TransportFromAirportTimelineEvent",
  "type": "TransportFromAirportTimelineEvent",
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
(node/*: any*/).hash = '1fba0733ff4cf23ba489b28d48b5c059';
module.exports = node;
