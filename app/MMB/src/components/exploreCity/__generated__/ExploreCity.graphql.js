/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type CardContent$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExploreCity$ref: FragmentReference;
export type ExploreCity = {|
  +$fragmentRefs: CardContent$ref,
  +$refType: ExploreCity$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ExploreCity",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "CardContent",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '0a776c7ffdb2a2b18800321e85872bf2';
module.exports = node;
