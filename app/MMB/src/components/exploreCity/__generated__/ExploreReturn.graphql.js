/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ExploreVariant$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExploreReturn$ref: FragmentReference;
export type ExploreReturn = {|
  +outbound?: ?{|
    +$fragmentRefs: ExploreVariant$ref
  |},
  +$refType: ExploreReturn$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ExploreReturn",
  "type": "BookingInterface",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "InlineFragment",
      "type": "BookingReturn",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "outbound",
          "storageKey": null,
          "args": null,
          "concreteType": "Trip",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "ExploreVariant",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3f2eb5c9f1914dc09c9417c8e9468140';
module.exports = node;
