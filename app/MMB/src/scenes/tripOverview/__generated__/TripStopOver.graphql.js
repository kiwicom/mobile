/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
export type CoveredBy = "CARRIER" | "KIWICOM" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripStopOver$ref: FragmentReference;
export type TripStopOver = {|
  +guarantee: ?CoveredBy,
  +$refType: TripStopOver$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TripStopOver",
  "type": "Leg",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "guarantee",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'eb88a35a25936daf8a481e1f3a9efbb5';
module.exports = node;
