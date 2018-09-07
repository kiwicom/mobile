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
  +stopoverDuration: ?number,
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "stopoverDuration",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '14f2a78f39e00b6a12f7e92d0659607d';
module.exports = node;
