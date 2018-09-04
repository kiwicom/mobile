/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type MulticityTitle$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripTitle$ref: FragmentReference;
export type TripTitle = {|
  +duration: ?number,
  +$fragmentRefs: MulticityTitle$ref,
  +$refType: TripTitle$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TripTitle",
  "type": "Trip",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "MulticityTitle",
      "args": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "duration",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ece4655ee8bc801e23001381a5d7a9d8';
module.exports = node;
