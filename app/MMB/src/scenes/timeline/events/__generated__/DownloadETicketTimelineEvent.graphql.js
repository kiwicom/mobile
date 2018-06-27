/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type DownloadETicketTimelineEvent$ref: FragmentReference;
export type DownloadETicketTimelineEvent = {|
  +timestamp: ?any,
  +ticketUrl: ?string,
  +$refType: DownloadETicketTimelineEvent$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "DownloadETicketTimelineEvent",
  "type": "DownloadETicketTimelineEvent",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "timestamp",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "ticketUrl",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '285fae5a1a4fd071f78c94e980a61860';
module.exports = node;
