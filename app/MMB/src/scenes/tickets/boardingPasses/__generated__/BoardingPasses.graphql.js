/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BoardingPassMultiCity$ref = any;
type BoardingPassOneWay$ref = any;
type BoardingPassReturn$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BoardingPasses$ref: FragmentReference;
export type BoardingPasses = {|
  +__typename: "BookingReturn",
  +$fragmentRefs: BoardingPassReturn$ref,
  +$refType: BoardingPasses$ref,
|} | {|
  +__typename: "BookingOneWay",
  +$fragmentRefs: BoardingPassOneWay$ref,
  +$refType: BoardingPasses$ref,
|} | {|
  +__typename: "BookingMulticity",
  +$fragmentRefs: BoardingPassMultiCity$ref,
  +$refType: BoardingPasses$ref,
|} | {|
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  +__typename: "%other",
  +$refType: BoardingPasses$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "BoardingPasses",
  "type": "Node",
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
      "kind": "InlineFragment",
      "type": "BookingMulticity",
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "BoardingPassMultiCity",
          "args": null
        }
      ]
    },
    {
      "kind": "InlineFragment",
      "type": "BookingOneWay",
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "BoardingPassOneWay",
          "args": null
        }
      ]
    },
    {
      "kind": "InlineFragment",
      "type": "BookingReturn",
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "BoardingPassReturn",
          "args": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '6cb2a32a73300602cb8943001003d8d2';
module.exports = node;
