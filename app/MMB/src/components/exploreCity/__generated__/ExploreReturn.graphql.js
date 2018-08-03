/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type ExploreText$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExploreReturn$ref: FragmentReference;
export type ExploreReturn = {|
  +outbound?: ?{|
    +$fragmentRefs: ExploreText$ref
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
              "name": "ExploreText",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '99b3efa9b751de3447624d36ab424265';
module.exports = node;
