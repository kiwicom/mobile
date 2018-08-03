/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ExploreMulticity$ref = any;
type ExploreOneWay$ref = any;
type ExploreReturn$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type CardContent$ref: FragmentReference;
export type CardContent = {|
  +__typename: string,
  +$fragmentRefs: ExploreOneWay$ref & ExploreReturn$ref & ExploreMulticity$ref,
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
    },
    {
      "kind": "FragmentSpread",
      "name": "ExploreReturn",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ExploreMulticity",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b040a18e5f5d4b5273d3e8e01b111f11';
module.exports = node;
