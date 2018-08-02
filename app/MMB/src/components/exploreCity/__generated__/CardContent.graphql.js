/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ExploreOneWay$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CardContent$ref: FragmentReference;
export type CardContent = {|
  +__typename: string,
  +$fragmentRefs: ExploreOneWay$ref,
  +$refType: CardContent$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "CardContent",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "__typename",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ExploreOneWay",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'ca7c71989848aeedec07d11798c85738';
module.exports = node;
