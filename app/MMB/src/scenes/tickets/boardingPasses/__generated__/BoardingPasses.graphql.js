/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type BoardingPassReturn$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type BoardingPasses$ref: FragmentReference;
export type BoardingPasses = {|
  +__typename: "BookingReturn",
  +$fragmentRefs: BoardingPassReturn$ref,
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
(node/*: any*/).hash = '442a80880e835f3949c03470825cc281';
module.exports = node;
