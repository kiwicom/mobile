/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Duration$ref = any;
type MulticityTitle$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TripTitle$ref: FragmentReference;
export type TripTitle = {|
  +$fragmentRefs: MulticityTitle$ref & Duration$ref,
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
      "kind": "FragmentSpread",
      "name": "Duration",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '254d4a0a445d6e14e3c10d66427172be';
module.exports = node;
