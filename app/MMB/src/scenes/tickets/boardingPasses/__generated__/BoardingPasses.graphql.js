/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
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
(node/*: any*/).hash = '750290032053fa67c65cf7702fc38682';
module.exports = node;
